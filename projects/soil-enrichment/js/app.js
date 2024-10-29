// Core library
import * as THREE from "./three.module.js";

// Utility and helper modules
import { TWEEN } from "./tween.module.min.js";
import Stats from "./stats.module.js";
import { GUI } from "./lil-gui.module.min.js";
import * as SkeletonUtils from "./SkeletonUtils.js";
import { Matrix } from "./Matrix.js";

// Controls
import { OrbitControls } from "./OrbitControls.js";
import { FirstPersonControls } from "./FirstPersonControls.js";
import { TransformControls } from "./TransformControls.js";

// Loaders
import { MTLLoader } from "./MTLLoader.js";
import { OBJLoader } from "./OBJLoader.js";
import { TGALoader } from "./TGALoader.js";
import { GLTFLoader } from "./GLTFLoader.js";

// Post-processing
import { EffectComposer } from "./EffectComposer.js";
import { RenderPass } from "./RenderPass.js";
import { ShaderPass } from "./ShaderPass.js";

// Shaders
import { PixelShader } from "./PixelShader.js";
import { SkyShader } from "./SkyShader.js";
import { GammaCorrectionShader } from "./GammaCorrectionShader.js";

let gltfLoaded = 0;
let groundGroup;
let ground2D = [];

let firstMatrix;
let finalMatrix;
let finalSet;

let finalArray;

let pickaxeMan = undefined;
let pickaxeTime = 0;

let shovelMan = undefined;
let shovelTime = 0;

let nosToBeSelected = 10;
let nos = 30;

let defaultShaderTrailer, defaultShaderDrone;
let scene,
  renderer,
  stats,
  composerPixelShaderTrailer,
  composerPixelShaderDrone;
let cameraRig;
let cameraForTrailer, cameraForDrone;

let objectsTRS = [];

let environmentalObjects = new THREE.Group();

let pixelPass, gammaCorrectionPass;

const objProbs = cumulativeProbs([
  0.3, 0.2, 0.05, 0.05, 0.05, 0.9, 0.9, 0.9, 0.4, 0.06, 0.06, 0.06, 0.06, 0.06,
  0.06, 0.06, 0.2, 0.2,
]);

const objNames = [
  "Stone",
  "Pine1",
  "Log1",
  "Log2",
  "Log3",
  "Grass1",
  "Grass2",
  "Grass3",
  "DeadTree",
  "Flower1",
  "Flower2",
  "Flower3",
  "Flower4",
  "Flower5",
  "Flower6",
  "Flower7",
  "Tree1",
  "Tree2",
];

function cumulativeProbs(probs) {
  let list = [];
  let sum = 0;
  for (let i = 0; i < probs.length; i++) {
    sum += probs[i];
    list.push(sum);
  }
  return list;
}

function nameFromProb(prob, probsList, namesList) {
  for (let i = 0; i < probsList.length; i++) {
    if (prob < probsList[i]) {
      return namesList[i];
    }
  }
  return probsList[probsList.length - 1];
}

const clock = new THREE.Clock();
//clock.stop();

const manager = new THREE.LoadingManager();
// manager.addHandler( /\.dds$/i, new DDSLoader() );
manager.addHandler(/\.tga$/i, new TGALoader());

let mixers = [];

let controlsForDrone;
let controlsForTrailer;
let transformControlsDrone;
let transformControlsTrailer;

let spotLight;
let spotLightHelper;

let selectMode = false;

let renderMode = 0; // 0 default , 1 pixel render
let cameraMode = 0; // 0 trailer , 1 drone camera

let INTERSECTED = undefined;
const mouse = new THREE.Vector2();
let raycaster = new THREE.Raycaster();

let board_size = 10; //actual map size
const sizeOfSoil = 3;
const offset = (board_size - 1) / 2;

let deltaTime = clock.getDelta();
let sky;

const randomDirtColor = [
  0xff0000, 0xff3000, 0xff6000, 0xff9000, 0xffc000, 0xffff00, 0xc0ff00,
  0x80ff00, 0x40ff00, 0x00ff00,
];

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x88ccee);

  let skyGeometry = new THREE.SphereBufferGeometry(300, 32, 15);
  let skyMaterial = new THREE.ShaderMaterial({
    uniforms: SkyShader.uniforms,
    vertexShader: SkyShader.vertexShader,
    fragmentShader: SkyShader.fragmentShader,
    side: THREE.BackSide,
  });

  sky = new THREE.Mesh(skyGeometry, skyMaterial);
  scene.add(sky);

  myObjLoader("Drone", [0, 1, 0], [1, 1, 1], [0, 0, 0]);
  myGltfLoader("ShovelMan", [10, 1, 10], [1, 1, 1], [0, 0, 0]);
  myGltfLoader("PickaxeMan", [-10, 1, -10], [1, 1, 1], [0, 0, 0]);

  cameraForTrailer = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  );

  cameraForTrailer.position.set(
    board_size * sizeOfSoil,
    board_size * sizeOfSoil,
    board_size * sizeOfSoil
  );
  cameraForTrailer.lookAt(0, 0, 0);

  cameraForDrone = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  );
  cameraForDrone.position.set(0, 10, 0);
  cameraForDrone.lookAt(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.15));

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
  dirLight.position.set(0, 2, 0);
  dirLight.rotation.set(0, 0, 0);
  scene.add(dirLight);

  const spotlightDummyGeometry = new THREE.BoxGeometry(1, 1, 1);
  const spotlightDummyMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000,
  });
  const spotlightDummyMesh = new THREE.Mesh(
    spotlightDummyGeometry,
    spotlightDummyMaterial
  );

  spotlightDummyMesh.position.set(0, 50, 0);
  spotlightDummyMesh.rotation.set(0, 0, 0);

  scene.add(spotlightDummyMesh);

  spotLight = new THREE.SpotLight(0xffffff, 0.9);
  spotLight.angle = Math.PI / 4;
  spotLight.position.set(0, -0.6, 0);
  spotLight.target.position.set(0, -1.6, 0);

  spotLight.penumbra = 0.1;
  spotLight.distance = 2000;

  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 512;
  spotLight.shadow.mapSize.height = 512;
  spotLight.shadow.camera.near = 10;
  spotLight.shadow.camera.far = 200;
  spotLight.shadow.focus = 1;

  spotlightDummyMesh.add(spotLight);
  spotlightDummyMesh.add(spotLight.target);

  spotLightHelper = new THREE.SpotLightHelper(spotLight);
  scene.add(spotLightHelper);
  objectsTRS.push(spotlightDummyMesh);

  const axesHelper = new THREE.AxesHelper(10);
  scene.add(axesHelper);

  const stoneDumbGeometry = new THREE.BoxGeometry(0.01, 0.01, 0.01);
  const stoneDumbMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const stoneMesh = new THREE.Mesh(stoneDumbGeometry, stoneDumbMaterial);
  INTERSECTED = stoneMesh;
  scene.add(stoneMesh);

  createGround(board_size);

  const gui = new GUI();
  let hud;

  const algorithmButtons = {
    create_ground: function () {
      createGround(board_size);
    },
    run_algorithm: function () {
      tween();
    },
    board_size: board_size,
    generate_sets: 30,
    sets_to_select: 10,
  };

  hud = gui.addFolder("Algorithm");
  hud.add(algorithmButtons, "create_ground").name("Create New Ground");
  hud.add(algorithmButtons, "run_algorithm").name("Run / Rerun");
  hud
    .add(algorithmButtons, "board_size", 10.0, 50.0, 2.0)
    .name("Map size")
    .onChange(function (val) {
      board_size = val;
    });
  hud
    .add(algorithmButtons, "generate_sets", 2.0, 50.0, 1.0)
    .name("Generate sets")
    .onChange(function (val) {
      nos = val;
    });
  hud
    .add(algorithmButtons, "sets_to_select", 2.0, 50.0, 1.0)
    .name("Sets to select")
    .onChange(function (val) {
      nosToBeSelected = val;
    });

  hud = gui.addFolder("Pixel shader");
  hud.add({ switch: renderMode === 1 }, "switch").onChange(function () {
    renderMode = (renderMode + 1) % 2;
  });
  hud.add({ size: 1.0 }, "size", 0.0, 4.0, 0.05).onChange(function (val) {
    pixelPass.uniforms["intensity"].value = val;
  });

  hud = gui.addFolder("Spot light");
  hud
    .add({ checkbox: true }, "checkbox")
    .name("Switch")
    .onChange(function (val) {
      spotLight.visible = val;
    });

  // MAIN RENDERER
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // CAMERA 1
  controlsForTrailer = new OrbitControls(cameraForTrailer, renderer.domElement);
  controlsForTrailer.target.set(0, 1, 0);
  controlsForTrailer.enablePan = false;

  // CAMERA 2
  controlsForDrone = new FirstPersonControls(
    cameraForDrone,
    renderer.domElement
  );
  controlsForDrone.lookAt(30, 0, 30);

  controlsForDrone.movementSpeed = 20;
  controlsForDrone.lookSpeed = 0.05;

  controlsForDrone.enabled = false;
  controlsForTrailer.enabled = true;

  controlsForTrailer.update();
  controlsForDrone.update(clock.getDelta());

  // transform controls
  transformControlsDrone = new TransformControls(
    cameraForDrone,
    renderer.domElement
  );
  scene.add(transformControlsDrone);
  transformControlsTrailer = new TransformControls(
    cameraForTrailer,
    renderer.domElement
  );
  scene.add(transformControlsTrailer);

  stats = new Stats();
  stats.dom.classList.add("stats");
  document.body.appendChild(stats.dom);

  // DEFAULT SHADERS
  defaultShaderTrailer = new EffectComposer(renderer);
  defaultShaderDrone = new EffectComposer(renderer);

  // BLOCK OF CODES TO PASS PIXEL SHADER
  composerPixelShaderTrailer = new EffectComposer(renderer);
  composerPixelShaderDrone = new EffectComposer(renderer);

  // ADD PASSES TO SHADERS
  defaultShaderTrailer.addPass(new RenderPass(scene, cameraForTrailer));
  defaultShaderDrone.addPass(new RenderPass(scene, cameraForDrone));
  composerPixelShaderTrailer.addPass(new RenderPass(scene, cameraForTrailer));
  composerPixelShaderDrone.addPass(new RenderPass(scene, cameraForDrone));

  pixelPass = new ShaderPass(PixelShader);
  pixelPass.uniforms["resolution"].value = new THREE.Vector2(
    window.innerWidth,
    window.innerHeight
  );
  pixelPass.uniforms["resolution"].value.multiplyScalar(
    window.devicePixelRatio
  );
  // JUST PLAY WITH THIS VALUE TO CHANGE THE PIXEL SIZE
  pixelPass.uniforms["intensity"].value = 1.0;
  composerPixelShaderTrailer.addPass(pixelPass);
  composerPixelShaderDrone.addPass(pixelPass);

  const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
  defaultShaderTrailer.addPass(gammaCorrectionPass);
  defaultShaderDrone.addPass(gammaCorrectionPass);
  composerPixelShaderTrailer.addPass(gammaCorrectionPass);
  composerPixelShaderDrone.addPass(gammaCorrectionPass);

  scene.add(cameraForTrailer);
  scene.add(cameraForDrone);

  window.addEventListener("resize", onWindowResize);
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousedown", onMouseDown);
}

function randomObjLoader() {
  for (
    let i = (-board_size * sizeOfSoil) / 2 + 1;
    i < (board_size * sizeOfSoil) / 2;
    i += sizeOfSoil
  ) {
    for (
      let j = (-board_size * sizeOfSoil) / 2 + 1;
      j < (board_size * sizeOfSoil) / 2;
      j += sizeOfSoil
    ) {
      if (Math.random() >= 0.8) {
        let randomScale = Math.random() / 4;
        let probability = Math.random() * objProbs[objProbs.length - 1];
        let name = nameFromProb(probability, objProbs, objNames);
        myObjLoader(
          name,
          [i + 0.5, 0.0, j + 0.5],
          [1 + randomScale, 1 + randomScale, 1 + randomScale],
          [0, Math.random() * 360, 0]
        );
      }
    }
  }
}

function createGround(sideLength) {
  scene.remove(groundGroup);
  scene.remove(environmentalObjects);

  randomObjLoader();

  let matrix = new Matrix(sideLength, nos, nosToBeSelected);
  let output = matrix.mainFunction();

  firstMatrix = output[0];
  finalMatrix = output[1];
  finalSet = output[2];

  groundGroup = new THREE.Group();
  environmentalObjects = new THREE.Group();

  const planeGeometry = new THREE.PlaneGeometry(sizeOfSoil, sizeOfSoil);
  const boxGeometry = new THREE.BoxGeometry(
    sizeOfSoil * sideLength,
    3,
    sizeOfSoil * sideLength
  );

  const lowerGroundObject = new THREE.Mesh(
    boxGeometry,
    new THREE.MeshPhongMaterial({ color: 0x904000 })
  );
  lowerGroundObject.position.y = -1.6;

  groundGroup.add(lowerGroundObject);

  ground2D = [];

  let line;

  const offset = (sideLength - 1) / 2;

  for (let x = 0; x < sideLength; x++) {
    line = [];

    for (let z = 0; z < sideLength; z++) {
      const object = new THREE.Mesh(
        planeGeometry,
        new THREE.MeshPhongMaterial({
          color: randomDirtColor[firstMatrix[x * sideLength + z]._health - 1],
        })
      );

      object.position.set(
        (offset - x) * sizeOfSoil,
        0,
        (offset - z) * sizeOfSoil
      );
      object.rotation.x = Math.PI * 1.5;

      line.push(object);

      groundGroup.add(object);
    }

    ground2D.push(line);
  }

  scene.add(groundGroup);
  scene.add(environmentalObjects);
}

// FUNCTION TO LOAD A SINGLE .OBJ source
function myObjLoader(fileName, position, scale, rotation) {
  new MTLLoader(manager)
    .setPath("./resources/")
    .load(fileName + ".mtl", function (materials) {
      materials.preload();

      new OBJLoader(manager)
        .setMaterials(materials)
        .setPath("./resources/")
        .load(fileName + ".obj", function (object) {
          object.position.set(...position);
          object.scale.set(...scale);
          object.rotation.set(...rotation);

          if (fileName === "Drone") {
            cameraForDrone.add(object);
          } else {
            environmentalObjects.add(object);
            objectsTRS.push(object);
          }
        });
    });
}

function myGltfLoader(fileName, position, scale, rotation) {
  const loader = new GLTFLoader();

  loader.load("./resources/" + fileName + ".glb", function (gltf) {
    const model = SkeletonUtils.clone(gltf.scene);

    const mixer = new THREE.AnimationMixer(model);

    mixer.clipAction(gltf.animations[0]).play(); // working?

    model.position.set(...position);
    model.scale.set(...scale);
    model.rotation.set(...rotation);

    mixers.push(mixer);

    gltfLoaded += 1;

    if (fileName === "PickaxeMan") {
      pickaxeMan = model;
    } else if (fileName === "ShovelMan") {
      shovelMan = model;
    }

    scene.add(model);
  });
}

function onMouseDown(event) {
  if (selectMode) {
    let transformControls;
    let controls;

    if (cameraMode === 0) {
      transformControls = transformControlsTrailer;
      controls = controlsForTrailer;
    } else if (cameraMode === 1) {
      transformControls = transformControlsDrone;
      controls = controlsForDrone;
    }

    const intersection = raycaster.intersectObjects(objectsTRS);

    if (INTERSECTED && event.button === 0) {
      controls.enabled = !transformControls.dragging;
    }
  }
}

function onMouseUp(event) {
  if (selectMode) {
    let transformControls;
    let controls;

    if (cameraMode === 0) {
      transformControls = transformControlsTrailer;
      controls = controlsForTrailer;
    } else if (cameraMode === 1) {
      transformControls = transformControlsDrone;
      controls = controlsForDrone;
    }

    const intersection = raycaster.intersectObjects(objectsTRS);

    if (intersection.length === 0 && event.button === 0) {
      controls.enabled = true;
    }
  }
}

function onMouseMove(event) {
  if (selectMode) {
    let transformControls;

    if (cameraMode === 0) {
      transformControls = transformControlsTrailer;
    } else if (cameraMode === 1) {
      transformControls = transformControlsDrone;
    }

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    if (cameraMode === 0) {
      raycaster.setFromCamera(mouse, cameraForTrailer);
    } else if (cameraMode === 1) {
      raycaster.setFromCamera(mouse, cameraForDrone);
    }

    const intersection = raycaster.intersectObjects(objectsTRS);

    if (intersection.length > 0 && !transformControls.dragging) {
      if (INTERSECTED !== intersection[0].object) {
        if (INTERSECTED) {
          transformControls.detach(INTERSECTED);
        }

        INTERSECTED = intersection[0].object;

        transformControls.attach(INTERSECTED);
      }
    }
  }
}

function onKeyDown(event) {
  let transformControls;
  let controls;

  if (cameraMode === 0) {
    transformControls = transformControlsTrailer;
    controls = controlsForTrailer;
  } else if (cameraMode === 1) {
    transformControls = transformControlsDrone;
    controls = controlsForDrone;
  }

  switch (event.keyCode) {
    case 49: // 1 Trailer Camera
      if (!selectMode) {
        //clock.stop();
        controlsForDrone.enabled = false;
        controlsForTrailer.enabled = true;
        cameraMode = 0;
      }
      break;

    case 50: // 2 Drone Camera
      if (!selectMode) {
        clock.start();
        controlsForTrailer.enabled = false;
        controlsForDrone.enabled = true;
        cameraMode = 1;
      }
      break;

    case 72: // H s(h)ader
      renderMode = (renderMode + 1) % 2;
      break;

    case 75: // K s(k)y
      sky.visible = !sky.visible;
      break;

    case 76: // L Se(l)ect
      if (selectMode) {
        transformControls.detach(INTERSECTED);
        INTERSECTED = undefined;
      }

      selectMode = !selectMode;
      break;

    case 79: // O R(o)tate
    case 84: // T (T)ranslate
    case 69: // E Scal(e)
      if (selectMode) {
        const modes = { 79: "rotate", 84: "translate", 69: "scale" };
        transformControls.setMode(modes[event.keyCode]);
      }
      break;
  }
}

function onWindowResize() {
  cameraForTrailer.aspect = window.innerWidth / window.innerHeight;
  cameraForTrailer.updateProjectionMatrix();

  cameraForDrone.aspect = window.innerWidth / window.innerHeight;
  cameraForDrone.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  pixelPass.uniforms["resolution"].value
    .set(window.innerWidth, window.innerHeight)
    .multiplyScalar(window.devicePixelRatio);
}

function tween() {
  for (let cell of finalSet) {
    new TWEEN.Tween(ground2D[cell.y][cell.x].material.color)
      .to({ r: 0, g: 1, b: 0 }, Math.random() * 1000 + 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
  }
}

function update() {
  switch (cameraMode) {
    case 0:
      cameraForTrailer.updateProjectionMatrix();
      controlsForTrailer.update();
      break;
    case 1:
      cameraForDrone.updateProjectionMatrix();
      controlsForDrone.update(deltaTime);
      break;
  }

  TWEEN.update();
  stats.update();
  spotLightHelper.update();
}

function render() {
  requestAnimationFrame(render);
  deltaTime = clock.getDelta();

  if (gltfLoaded !== 2) return;

  update();
  for (const mixer of mixers) mixer.update(deltaTime);

  switch (renderMode) {
    case 0:
      switch (cameraMode) {
        case 0:
          defaultShaderTrailer.render(scene, cameraForTrailer);
          break;
        case 1:
          defaultShaderDrone.render(scene, cameraForDrone);
          break;
      }
      break;

    case 1:
      switch (cameraMode) {
        case 0:
          composerPixelShaderTrailer.render(deltaTime);
          break;
        case 1:
          composerPixelShaderDrone.render(deltaTime);
          break;
      }
      break;
  }
}

init();
render();
