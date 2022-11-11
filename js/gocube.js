/// <reference path='babylon.d.ts' />

window.addEventListener('DOMContentLoaded', function() {
    let canvas = document.getElementById('canvas');
    let engine = new BABYLON.Engine(canvas, false);

    engine.displayLoadingUI();
    // let divFps = document.getElementById("fps");

    let arcCamera = null;
    let freeCamera = null;
    let shape = null;
    let forwardConstant = false;
    let backwardsConstant = false;
    let leftConstant = false;
    let rightConstant = false;

    let createScene = function() {
        scene = new BABYLON.Scene(engine);
        let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 1;

        freeCamera = new BABYLON.FreeCamera(
            "freeCamera",
            new BABYLON.Vector3(0, 5, -10),
            scene);
        // freeCamera.inputs.remove(freeCamera.inputs.attached.keyboard);
        freeCamera.inputs.addMouseWheel();

        arcCamera = new BABYLON.ArcRotateCamera(
            "arcCamera",
            BABYLON.Tools.ToRadians(-90),
            BABYLON.Tools.ToRadians(80),
            10.0,
            new BABYLON.Vector3(0, 0, 0),
            scene);
        arcCamera.inputs.remove(arcCamera.inputs.attached.keyboard);

        let box = BABYLON.Mesh.CreateBox("Box", 2.0, scene);
        let boxMaterial = new BABYLON.StandardMaterial("Box Material", scene);
        boxMaterial.diffuseTexture = new BABYLON.Texture("textures/box.jpg", scene);
        box.material = boxMaterial;
        box.position.y = 0
        shape = box;

        arcCamera.lockedTarget = shape;
        arcCamera.attachControl(canvas, false);
        scene.activeCamera = arcCamera;

        let ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, scene);
        // ground.position.z = 50;
        ground.position.y = -1;

        let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        groundMaterial.diffuseTexture = new BABYLON.Texture("textures/cobblestone.jpg", scene);
        groundMaterial.diffuseTexture.uScale = 100;
        groundMaterial.diffuseTexture.vScale = 40;
        ground.material = groundMaterial;


        // let skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:500}, scene);
        // let skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
        // skyboxMaterial.backFaceCulling = false;
        // skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
        // skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        // skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        // skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        // skybox.material = skyboxMaterial;
        // // camera.upperBetaLimit = Math.PI / 2.2;


        let outerBox = BABYLON.MeshBuilder.CreateBox("outerbox", { size: 2000.0 }, scene);
        let outerBoxMaterial = new BABYLON.StandardMaterial("outerbox", scene);
        outerBoxMaterial.backFaceCulling = false;
        outerBoxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/redbox", scene);
        outerBoxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        outerBoxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        outerBoxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        outerBox.material = outerBoxMaterial;


        // let wideBox = BABYLON.MeshBuilder.CreateBox("wideBox", {size:10000.0}, scene);
        // let wideBoxMaterial = new BABYLON.StandardMaterial("wideBox", scene);
        // wideBoxMaterial.backFaceCulling = false;
        // wideBoxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/widebox", scene);
        // wideBoxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        // wideBoxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        // wideBoxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        // wideBox.material = wideBoxMaterial;

        let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
        // let fps = engine.getFps().toFixed();
        let text1 = new BABYLON.GUI.TextBlock();
        text1.text = "\n\n\n" +
            "Move Box - WSAD space + ctrl\n" +
            "Rotate left, right - q, e\n" +
            "Free camera, Arc Camera - o, p\n" +
            "Toggle constant speed, speed up, speed down - 1,2,3\n" +
            "Restart position - r ";
        // text1.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        text1.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT;
        // text1.width = "20%";
        text1.color = "white";
        text1.shadowColor = "black";
        text1.shadowOffsetX = 1;
        text1.shadowOffsetY = 1;
        text1.fontSize = 14;
        advancedTexture.addControl(text1);

        // let text2 = new BABYLON.GUI.TextBlock();
        // text2.text = "21321"
        // text2.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT;
        // text2.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT;
        // text1.width = "20%";
        // text2.color = "white";
        // text2.shadowColor = "black";
        // text2.shadowOffsetX = 1;
        // text2.shadowOffsetY = 1;
        // text2.fontSize = 14;
        // advancedTexture.addControl(text2);

        // let plugin = BABYLON.SceneLoader.GetPluginForExtension('babylon');
        // plugin.extensions = ".json";
        // BABYLON.SceneLoader.RegisterPlugin(plugin);

        let speed = 5;
        let starPos = null;
        let endPos = null;

        let sound = new BABYLON.Sound("move", "sounds/move.mp3", scene);

        scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case BABYLON.KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "w":
                        case "W":
                            // box.position.z += speed;
                            starPos = box.position.z;
                            endPos = box.position.z + speed;
                            moveBox(starPos, endPos, "position.z");
                            sound.play();
                            break

                        case "s":
                        case "S":
                            // box.position.z -= speed;
                            starPos = box.position.z;
                            endPos = box.position.z - speed;
                            moveBox(starPos, endPos, "position.z");
                            sound.play();
                            break

                        case "a":
                        case "A":
                            // box.position.x -= speed;
                            starPos = box.position.x;
                            endPos = box.position.x - speed;
                            moveBox(starPos, endPos, "position.x");
                            sound.play();
                            break

                        case "d":
                        case "D":
                            // box.position.x += speed;
                            starPos = box.position.x;
                            endPos = box.position.x + speed;
                            moveBox(starPos, endPos, "position.x");
                            sound.play();
                            break

                        case "q":
                        case "Q":
                            // shape.rotation.y = shape.rotation.y + BABYLON.Tools.ToRadians(90);
                            starPos = box.rotation.y;
                            endPos = box.rotation.y + BABYLON.Tools.ToRadians(90);
                            moveBox(starPos, endPos, "rotation.y");
                            sound.play();
                            break

                        case "e":
                        case "E":
                            // shape.rotation.y = shape.rotation.y + BABYLON.Tools.ToRadians(-90);
                            starPos = box.rotation.y;
                            endPos = box.rotation.y + BABYLON.Tools.ToRadians(-90);
                            moveBox(starPos, endPos, "rotation.y");
                            sound.play();
                            break

                        case "ArrowUp":
                            // console.log("Arrow up pressed");
                            forwardConstant = true - forwardConstant;
                            break

                        case "ArrowLeft":
                            // console.log("Arrow left pressed");
                            leftConstant = true - leftConstant;
                            break

                        case "ArrowRight":
                            // console.log("Arrow right pressed");
                            rightConstant = true - rightConstant;
                            break

                        case "ArrowDown":
                            // console.log("Arrow down pressed");
                            backwardsConstant = true - backwardsConstant;
                            break

                        case " ":
                            // shape.position.y = shape.position.y + 1;
                            starPos = box.position.y;
                            endPos = box.position.y + speed;
                            moveBox(starPos, endPos, "position.y");
                            sound.play();
                            break

                        case "Control":
                            // shape.position.y = shape.position.y + 1;
                            starPos = box.position.y;
                            endPos = box.position.y - speed;
                            moveBox(starPos, endPos, "position.y");
                            sound.play();
                            break

                        case "Enter":
                            // console.log("ENTER");
                            break

                        case "o":
                        case "O":
                            console.log("free camera");
                            switchCam("free camera");
                            break

                        case "p":
                        case "P":
                            console.log("arc camera");
                            switchCam("arc camera");
                            break

                        case "1":
                            toggleConstantSpeed = true - toggleConstantSpeed;
                            break
                        case "2":
                            constantSpeed += constantSpeed;
                            break
                        case "3":
                            constantSpeed = constantSpeed / 2;
                            break

                        case ".":
                            advancedTexture.removeControl(text1);
                            break
                        case ",":
                            advancedTexture.addControl(text1);
                            break
                        case "r":
                        case "R":
                            box.position.x = 0;
                            box.position.y = 0;
                            box.position.z = 0;
                    }
                    break;
            }
        });

        engine.hideLoadingUI();

        return scene;
    }

    function moveBox(start, end, direction) {
        const animBox = new BABYLON.Animation(
            "Animation",
            direction,
            50,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
        );

        const boxKeys = [];
        boxKeys.push({
            frame: 0,
            value: start
        });

        boxKeys.push({
            frame: 30,
            value: end
        });

        boxKeys.push({
            frame: 60,
            value: end
        });
        animBox.setKeys(boxKeys);

        shape.animations = [];
        shape.animations.push(animBox);

        scene.beginDirectAnimation(shape, [animBox], 0, 60, false, 2);

        console.log(shape.position.x, shape.position.y, shape.position.z);
    }

    function switchCam(cameraType) {
        if (cameraType == "arc camera") {
            freeCamera.detachControl(canvas);
            arcCamera.lockedTarget = shape;
            scene.activeCamera = arcCamera;
            arcCamera.attachControl(canvas, false);
            return arcCamera;
        }
        if (cameraType == "free camera")
            arcCamera.detachControl(canvas);
        // arcCamera.inputs.remove(arcCamera.inputs.attached.keyboard);
        scene.activeCamera = freeCamera;
        freeCamera.attachControl(canvas, false);
        return freeCamera;
    }

    function moveConstanty() {
        if (forwardConstant == true) {
            shape.position.z = shape.position.z + constantSpeed;
        }
        if (backwardsConstant == true) {
            shape.position.z = shape.position.z - constantSpeed;
        }
        if (leftConstant == true) {
            shape.position.x = shape.position.x - constantSpeed;
        }
        if (rightConstant == true) {
            shape.position.x = shape.position.x + constantSpeed;
        }
    }

    var scene = createScene();
    let toggleConstantSpeed = false;
    let constantSpeed = 0.1;

    BABYLON.SceneLoader.ImportMesh("", "textures/", "city2.glb", scene, function(newMeshes) {
        let city = newMeshes[0];
        city.position.y = 2;
        city.position.x = -485;
        city.position.z = 100;
    });

    // let options = new BABYLON.SceneOptimizerOptions(60, 500);
    // // options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1));
    // options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1.5));
    // options.addCustomOptimization(function() {
    //     environment.ground.setEnabled(false);
    //     return true;
    // }, function() {
    //     return "Turning ground off";
    // });

    // let optimizer = new BABYLON.SceneOptimizer(scene, options);
    // optimizer.start();

    engine.runRenderLoop(function() {
        if (toggleConstantSpeed == true) {
            moveConstanty();
        }

        //border limit
        if (shape.position.z > 15000) {
            shape.position.z = 0;
        }

        // divFps.innerHTML = engine.getFps().toFixed() + " fps";
        scene.render();
    });

    window.addEventListener("resize", function() {
        engine.resize();
    });

});