window.addEventListener('DOMContentLoaded', async function() {
    let canvas = document.getElementById('canvas');
    let engine = new BABYLON.Engine(canvas, false);

    engine.displayLoadingUI();

    let arcCamera = null;
    let freeCamera = null;
    let shape = null;

    let createScene = async function() {

        scene = new BABYLON.Scene(engine);
        scene.enablePhysics(new BABYLON.Vector3(0, -9.81, 0), new BABYLON.CannonJSPlugin());

        let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 2;

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

        let gridBox = BABYLON.Mesh.CreateBox("Box", 1.0, scene);
        gridBox.physicsImpostor = new BABYLON.PhysicsImpostor(gridBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 2, friction: 0.0, restitution: 0 }, scene);
        gridBox.checkCollisions = true;
        shape = gridBox;

        // let clone = gridBox.createInstance("gridBox copy")
        // clone.position = new BABYLON.Vector3(0, 20, 0);
        // clone.physicsImpostor = new BABYLON.PhysicsImpostor(clone, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 2, friction: 0.0, restitution: 0 }, scene);
        // clone.checkCollisions = true;


        let gridBoxMaterial = new BABYLON.GridMaterial("gridBoxMaterial", scene);
        gridBoxMaterial.gridRatio = 0.3
        gridBoxMaterial.lineColor = new BABYLON.Color3(1, 1, 0);
        gridBox.material = gridBoxMaterial;
        gridBox.position.y = 10

        const maxCount = 100;
        for (let i = 0; i < maxCount; i++) {
            let clone = gridBox.createInstance("gridBox: " + i);
            let scale = Math.random() * 10 + 0.3;
            clone.scaling = clone.scaling.scale(scale);
            let radius = Math.random() * 400;
            let angle = Math.PI * 2 * Math.random();
            clone.position = new BABYLON.Vector3(
                Math.cos(angle) * radius,
                Math.random() * 20,
                Math.sin(angle) * radius
            );
            clone.rotation.x = Math.random() * Math.PI;
            clone.rotation.y = Math.random() * Math.PI;
            clone.rotation.z = Math.random() * Math.PI;
            clone.rotationQuaternion = null;
            clone.physicsImpostor = new BABYLON.PhysicsImpostor(clone, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 2, friction: 0.0, restitution: 0 }, scene);
            clone.checkCollisions = true;
        }

        arcCamera.angularSensibilityX = 10000;
        arcCamera.angularSensibilityY = 10000;
        arcCamera.lockedTarget = shape;
        arcCamera.attachControl(canvas, false);
        scene.activeCamera = arcCamera;

        let frontUV = new BABYLON.Vector4(0, 0, 0.5, 1); // front image = half the whole image along the width 
        let backUV = new BABYLON.Vector4(0.5, 0, 1, 1);
        let gridPlane = BABYLON.MeshBuilder.CreatePlane(
            "gridPlane", {
                width: 2000,
                height: 2000,
                sideOrientation: BABYLON.Mesh.DOUBLESIDE,
                frontUVs: frontUV,
                backUVs: backUV
            },
            scene);
        // gridPlane.gridRatio = 100
        gridPlane.position.x = 0;
        gridPlane.position.y = -0.5;
        gridPlane.rotation.x = BABYLON.Tools.ToRadians(90)
        gridPlane.physicsImpostor = new BABYLON.PhysicsImpostor(gridPlane, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.0, restitution: 0.5 }, scene);
        gridPlane.checkCollisions = true;

        let gridPlaneMaterial = new BABYLON.GridMaterial("gridPlaneMaterial", scene);
        gridPlaneMaterial.gridRatio = 3
        gridPlaneMaterial.lineColor = new BABYLON.Color3(0.65, 0.27, 0.68, 0.62);
        // gridPlaneMaterial.lineColor = new BABYLON.Color3.FromHexString("#F9C80E");
        // gridPlaneMaterial.lineColor = new BABYLON.Color3(92, 0, 20);
        // gridPlaneMaterial.majorUnitFrequency = 100;
        gridPlane.material = gridPlaneMaterial;


        let skyBox = BABYLON.Mesh.CreateBox("skyBox", 10000.0, scene);
        let skyBoxMaterial = new BABYLON.SkyMaterial("skyBoxMaterial", scene);
        // skyBoxMaterial.rayleigh = 0;
        skyBoxMaterial.backFaceCulling = false;
        skyBoxMaterial.inclination = -0.5;
        skyBox.material = skyBoxMaterial;
        // skyBoxMaterial.turbidity = 40

        /*
         * Keys:
         * - 1: Day
         * - 2: Evening
         * - 3: Increase Luminance
         * - 4: Decrease Luminance
         * - 5: Increase Turbidity
         * - 6: Decrease Turbidity
         * - 7: Move horizon to -50
         * - 8: Restore horizon to 0
         */
        let setSkyConfig = function(property, from, to) {
            let keys = [
                { frame: 0, value: from },
                { frame: 100, value: to }
            ];

            let animation = new BABYLON.Animation("animation", property, 100, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            animation.setKeys(keys);

            scene.stopAnimation(skyBox);
            scene.beginDirectAnimation(skyBox, [animation], 0, 100, false, 1);
        };

        window.addEventListener("keydown", function(evt) {
            switch (evt.keyCode) {
                case 49:
                    setSkyConfig("material.inclination", skyBoxMaterial.inclination, 0);
                    break; // 1
                case 50:
                    setSkyConfig("material.inclination", skyBoxMaterial.inclination, -0.5);
                    break; // 2

                case 51:
                    setSkyConfig("material.luminance", skyBoxMaterial.luminance, 0.1);
                    break; // 3
                case 52:
                    setSkyConfig("material.luminance", skyBoxMaterial.luminance, 1.0);
                    break; // 4

                case 53:
                    setSkyConfig("material.turbidity", skyBoxMaterial.turbidity, 40);
                    break; // 5
                case 54:
                    setSkyConfig("material.turbidity", skyBoxMaterial.turbidity, 5);
                    break; // 6

                case 55:
                    setSkyConfig("material.cameraOffset.y", skyBoxMaterial.cameraOffset.y, 300);
                    break; // 7
                case 56:
                    setSkyConfig("material.cameraOffset.y", skyBoxMaterial.cameraOffset.y, 0);
                    break; // 8
                default:
                    break;
            }
        });

        // Set to Day
        setSkyConfig("material.inclination", skyBoxMaterial.inclination, -0.5);


        let transformForce = function(mesh, vec) {
            let mymatrix = new BABYLON.Matrix();
            mesh.rotationQuaternion.toRotationMatrix(mymatrix);
            return BABYLON.Vector3.TransformNormal(vec, mymatrix);
        };

        let rotate = function(mesh, direction, power) {
            // console.log("rotate happening", direction.scale(power));
            mesh.physicsImpostor.setAngularVelocity(
                mesh.physicsImpostor.getAngularVelocity().add(
                    direction.scale(power)
                )
            );
        }

        let translate = function(mesh, direction, power) {
            mesh.physicsImpostor.setLinearVelocity(
                mesh.physicsImpostor.getLinearVelocity().add(
                    transformForce(mesh, direction.scale(power))
                )
            );
        }

        let mf = false;
        let mb = false;
        let rl = false;
        let rr = false;
        let up = false;

        // let song = new BABYLON.Sound("Blade Runner 2049", "sounds/Blade Runner 2049.mp3", scene, null, { loop: true, autoplay: true });
        // song.setVolume(0.2);
        let moveSound = new BABYLON.Sound("moveSound", "sounds/move.mp3", scene);
        moveSound.setVolume(0.1);

        window.addEventListener('keydown', function(e) {
            switch (e.keyCode) {
                case 87: //w
                    mf = true;
                    break;
                case 83: //s
                    mb = true;
                    break;
                case 65: //a
                    rl = true;
                    break;
                case 68: //d
                    rr = true;
                    break;
                case 32: //d
                    up = true;
                    break;
                case 79:
                    console.log("free camera");
                    switchCam("free camera");
                    break
                case 80:
                    console.log("arc camera");
                    switchCam("arc camera");
                    break
            }
        });
        window.addEventListener('keyup', function(e) {
            switch (e.keyCode) {
                case 87: //w
                    mf = false;
                    break;
                case 83: //s
                    mb = false;
                    break;
                case 65: //a
                    rl = false;
                    break;
                case 68: //d
                    rr = false;
                    break;
            }
        });


        function update() {

            if (mf == true) {
                translate(gridBox, new BABYLON.Vector3(0, 0, 1), 0.1);
            }
            if (mb == true) {
                translate(gridBox, new BABYLON.Vector3(0, 0, -1), 0.1);
            }
            if (rl == true) {
                translate(gridBox, new BABYLON.Vector3(-1, 0, 0), 0.1);
            }
            if (rr == true) {
                translate(gridBox, new BABYLON.Vector3(1, 0, 0), 0.1);
            }
            // if (up == true) {
            //     translate(gridBox, new BABYLON.Vector3(0, 1, 0), 0.2);
            // }
        }

        function setupPointerLock() {

            canvas.onclick = function() {
                canvas.requestPointerLock =
                    canvas.requestPointerLock ||
                    canvas.mozRequestPointerLock ||
                    canvas.webkitRequestPointerLock;
                canvas.requestPointerLock();
            };

        }
        setupPointerLock();

        scene.registerBeforeRender(function() {
            update();
        });

        let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI", true, scene);
        let loadedGUI = await advancedTexture.parseFromURLAsync("/json/moveText.json");
        // let loadedGUI = await advancedTexture.parseFromURLAsync("http://127.0.0.1:5500/json/moveText.json");

        return scene;
    };

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


    var scene = await createScene()

    engine.hideLoadingUI();

    engine.runRenderLoop(function() {

        if (shape.position.y < -10) {
            shape.position.x = 1;
            shape.position.y = 1;
            shape.position.z = 1;
        }
        scene.render();
    });

    window.addEventListener("resize", function() {
        engine.resize();
    });

});