window.addEventListener('DOMContentLoaded', async function() {
    let canvas = document.getElementById('canvas');
    let engine = new BABYLON.Engine(canvas, false);

    engine.displayLoadingUI();

    let shape = null;

    let createScene = async function() {

        scene = new BABYLON.Scene(engine);
        scene.enablePhysics(new BABYLON.Vector3(0, -9.81, 0), new BABYLON.CannonJSPlugin());

        // let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        // light.intensity = 2;

        let freeCamera = new BABYLON.FreeCamera(
            "freeCamera",
            new BABYLON.Vector3(0, 5, -10),
            scene);
        // freeCamera.inputs.remove(freeCamera.inputs.attached.keyboard);
        freeCamera.inputs.addMouseWheel();

        let arcCamera = new BABYLON.ArcRotateCamera(
            "arcCamera",
            BABYLON.Tools.ToRadians(-90),
            BABYLON.Tools.ToRadians(80),
            10.0,
            new BABYLON.Vector3(0, 0, 0),
            scene);
        // arcCamera.inputs.remove(arcCamera.inputs.attached.keyboard);


        let gridBox = BABYLON.Mesh.CreateBox("Box", 1.0, scene);
        gridBox.physicsImpostor = new BABYLON.PhysicsImpostor(
            gridBox,
            BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, friction: 0.02, restitution: 0.2 },
            scene);
        gridBox.checkCollisions = true;
        shape = gridBox; //For setting boundries in renderloop
        // const localAxes = new BABYLON.AxesViewer(scene, 1);
        // localAxes.zAxis.parent = gridBox;

        let gridBoxMaterial = new BABYLON.GridMaterial("gridBoxMaterial", scene);
        gridBoxMaterial.gridRatio = 0.3;
        // gridBoxMaterial.lineColor = new BABYLON.Color3(1, 1, 0);
        gridBoxMaterial.lineColor = new BABYLON.Color3.FromHexString("#01FE0A");
        gridBox.material = gridBoxMaterial;

        arcCamera.angularSensibilityX = 3000;
        arcCamera.angularSensibilityY = 3000;
        arcCamera.lockedTarget = shape;
        arcCamera.attachControl(canvas, false);
        scene.activeCamera = arcCamera;

        // front image = half the whole image along the width
        let frontUV = new BABYLON.Vector4(0, 0, 0.5, 1);
        let backUV = new BABYLON.Vector4(0.5, 0, 1, 1);
        let gridPlane = BABYLON.MeshBuilder.CreatePlane(
            "gridPlane", {
                width: 1000,
                height: 1000,
                sideOrientation: BABYLON.Mesh.DOUBLESIDE,
                frontUVs: frontUV,
                backUVs: backUV
            },
            scene);
        gridPlane.position.x = 0;
        gridPlane.position.y = -0.5;
        gridPlane.rotation.x = BABYLON.Tools.ToRadians(90);
        gridPlane.physicsImpostor = new BABYLON.PhysicsImpostor(
            gridPlane,
            BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.08, restitution: 0 },
            scene);
        gridPlane.checkCollisions = true;

        let gridPlaneMaterial = new BABYLON.GridMaterial("gridPlaneMaterial", scene);
        gridPlaneMaterial.gridRatio = 3;
        gridPlaneMaterial.majorUnitFrequency = 30;
        // gridPlaneMaterial.lineColor = new BABYLON.Color3(0.65, 0.27, 0.68, 0.62);
        // gridPlaneMaterial.lineColor = new BABYLON.Color3.FromHexString("#F9C80E");
        gridPlaneMaterial.lineColor = new BABYLON.Color3.FromHexString("#fe01f5");

        gridPlane.material = gridPlaneMaterial;

        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        };

        function isOdd(num) { return num % 2; }

        const maxCount = 100;
        for (let i = 0; i < maxCount; i++) {
            let gridClone = gridBox.createInstance("gridBox: " + i);
            // let gridClone = gridBox.clone("gridClone" + i);
            // let gridCloneMaterial = new BABYLON.GridMaterial("gridCloneMaterial" + i, scene);
            // gridCloneMaterial.gridRatio = Math.random() * Math.random();
            // gridCloneMaterial.lineColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
            // gridClone.material = gridCloneMaterial;

            let scale = Math.random() * 10 + 1;
            gridClone.scaling = gridClone.scaling.scale(scale);

            // gridClone.position = new BABYLON.Vector3(
            //     randomIntFromInterval(-100, 100),
            //     0,
            //     randomIntFromInterval(-100, 100)
            // );

            let radius = Math.random() * 400;
            let angle = Math.PI * 2 * Math.random();

            gridClone.position = new BABYLON.Vector3(
                Math.cos(angle) * radius,
                Math.random() * 20,
                Math.sin(angle) * radius
            );
            gridClone.rotation.x = Math.random() * Math.PI;
            gridClone.rotation.y = Math.random() * Math.PI;
            gridClone.rotation.z = Math.random() * Math.PI;
            gridClone.rotationQuaternion = null;

            gridClone.physicsImpostor = new BABYLON.PhysicsImpostor(gridClone, BABYLON.PhysicsImpostor.BoxImpostor, { mass: scale, friction: 1, restitution: 0.1 }, scene);
            gridClone.checkCollisions = true;
        };


        let skyBox = BABYLON.Mesh.CreateBox("skyBox", 10000.0, scene);
        let skyBoxMaterial = new BABYLON.SkyMaterial("skyBoxMaterial", scene);
        // skyBoxMaterial.rayleigh = 0;
        skyBoxMaterial.backFaceCulling = false;
        skyBoxMaterial.inclination = -0.5;
        skyBox.material = skyBoxMaterial;
        // skyBoxMaterial.turbidity = 40;

        /*
         * Keys:
         * - 1: Day
         * - 2: Evening
         * - 3: Increase Luminance
         * - 4: Decrease Luminance
         * - 5: Increase Turbidity
         * - 6: Decrease Turbidity
         * - 7: Move horizon to -300
         * - 8: Restore horizon to 0
         * - 9: Rayleigh to 0
         * - 0: Rayleigh to -0.1
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
                case 57:
                    setSkyConfig("material.rayleigh", skyBoxMaterial.rayleigh, 0);
                    break; // 9
                case 48:
                    setSkyConfig("material.rayleigh", skyBoxMaterial.rayleigh, -0.1);
                    break; // 0
                default:
                    break;
            }
        });
        setSkyConfig("material.inclination", skyBoxMaterial.inclination, -0.5);

        let translate = function(mesh, direction, power) {
            // console.log(mesh.physicsImpostor.getLinearVelocity().z)
            let speedLimit = 50;
            if (mesh.physicsImpostor.getLinearVelocity().z > speedLimit) {
                return;
            }
            if (-mesh.physicsImpostor.getLinearVelocity().z > speedLimit) {
                return;
            }
            if (mesh.physicsImpostor.getLinearVelocity().x > speedLimit) {
                return;
            }
            if (-mesh.physicsImpostor.getLinearVelocity().x > speedLimit) {
                return;
            }
            if (mesh.physicsImpostor.getLinearVelocity().y > speedLimit) {
                return;
            }
            if (-mesh.physicsImpostor.getLinearVelocity().y > speedLimit) {
                return;
            }

            // if (mesh.physicsImpostor.getLinearVelocity().y > 10) {
            //     mesh.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(
            //         mesh.physicsImpostor.getLinearVelocity().z,
            //         0,
            //         mesh.physicsImpostor.getLinearVelocity().x
            //     ));
            //     return;
            // }

            // mesh.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 1 + mesh.physicsImpostor.getLinearVelocity().z));

            mesh.physicsImpostor.setLinearVelocity(
                mesh.physicsImpostor.getLinearVelocity().add(
                    transformForce(mesh, direction.scale(power))
                )
            );
        }

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
            )
        };



        let moveForward, moveBackward, moveLeft, moveRight, moveUp, rotateLeft, rotateRight = false;

        // let song = new BABYLON.Sound("Blade Runner 2049", "sounds/Blade Runner 2049.mp3", scene, null, { loop: true, autoplay: true });
        // song.setVolume(0.2);
        // let moveSound = new BABYLON.Sound("moveSound", "sounds/move.mp3", scene);
        // moveSound.setVolume(0.1);

        let acceleration = 1;
        let speedLimit = 50;
        window.addEventListener('keydown', function(e) {
            switch (e.keyCode) {
                case 87: //w
                    // moveForward = true;
                    // translate(gridBox, new BABYLON.Vector3(0, 0, 1), 2);
                    // console.log(gridBox.physicsImpostor.getLinearVelocity().z)
                    if (gridBox.physicsImpostor.getLinearVelocity().z >= speedLimit) {
                        // gridBox.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(gridBox.physicsImpostor.getLinearVelocity().x, 0, speedLimit));
                        break
                    }
                    gridBox.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(gridBox.physicsImpostor.getLinearVelocity().x, 0, acceleration + gridBox.physicsImpostor.getLinearVelocity().z));
                    break;
                case 83: //s
                    // moveBackward = true;
                    // translate(gridBox, new BABYLON.Vector3(0, 0, -1), 2);
                    if (gridBox.physicsImpostor.getLinearVelocity().z <= -speedLimit) {
                        // gridBox.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(gridBox.physicsImpostor.getLinearVelocity().x, 0, -speedLimit));
                        break
                    }
                    gridBox.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(gridBox.physicsImpostor.getLinearVelocity().x, 0, -(acceleration + -(gridBox.physicsImpostor.getLinearVelocity().z))));
                    break;
                case 65: //a
                    // moveLeft = true;
                    // translate(gridBox, new BABYLON.Vector3(-1, 0, 0), 2);
                    if (gridBox.physicsImpostor.getLinearVelocity().x <= -speedLimit) {
                        // gridBox.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-speedLimit, 0, gridBox.physicsImpostor.getLinearVelocity().z));
                        break
                    }
                    gridBox.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(-(acceleration + -(gridBox.physicsImpostor.getLinearVelocity().x)), 0, gridBox.physicsImpostor.getLinearVelocity().z));
                    break;
                case 68: //d
                    // moveRight = true;
                    // translate(gridBox, new BABYLON.Vector3(1, 0, 0), 2);
                    if (gridBox.physicsImpostor.getLinearVelocity().x >= speedLimit) {
                        // gridBox.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(speedLimit, 0, gridBox.physicsImpostor.getLinearVelocity().z));
                        break
                    }
                    gridBox.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(acceleration + gridBox.physicsImpostor.getLinearVelocity().x, 0, gridBox.physicsImpostor.getLinearVelocity().z));
                    break;
                case 81: //q
                    rotateLeft = true;
                    // rotate(gridBox, new BABYLON.Vector3(0, -1, 0), 1);
                    break;
                case 69: //e
                    rotateRight = true;
                    // rotate(gridBox, new BABYLON.Vector3(0, 1, 0), 1);
                    break;
                case 70: //f
                    // gridBox.physicsImpostor.applyImpulse(new BABYLON.Vector3(0, 10, 0), new BABYLON.Vector3(0, 1, 0));
                    // moveUp = true;
                    break;

                case 79:
                    console.log("Free camera active");
                    switchCam("free camera", arcCamera, freeCamera);
                    break
                case 80:
                    console.log("Arc camera active");
                    switchCam("arc camera", arcCamera, freeCamera);
                    break
            }
        });
        window.addEventListener('keyup', function(e) {
            switch (e.keyCode) {
                case 87: //w
                    moveForward = false;
                    break;
                case 83: //s
                    moveBackward = false;
                    break;
                case 65: //a
                    moveLeft = false;
                    break;
                case 68: //d
                    moveRight = false;
                    break;
                case 81: //q
                    rotateLeft = false;
                    break;
                case 69: //e
                    rotateRight = false;
                    break;
                case 70: //f
                    moveUp = false;
                    break;
            }
        });

        function update() {
            let acceleration = 0.3;
            if (moveForward == true) {
                translate(gridBox, new BABYLON.Vector3(0, 0, 1), acceleration);
            }
            if (moveBackward == true) {
                translate(gridBox, new BABYLON.Vector3(0, 0, -1), acceleration);
            }
            if (moveLeft == true) {
                translate(gridBox, new BABYLON.Vector3(-1, 0, 0), acceleration);
            }
            if (moveRight == true) {
                translate(gridBox, new BABYLON.Vector3(1, 0, 0), acceleration);
            }
            // if (moveUp == true) {
            //     setTimeout(() => {
            //         translate(gridBox, new BABYLON.Vector3(0, 5, 0), 0.1);
            //     }, -1000)
            //     return
            // }
            if (rotateLeft == true) {
                rotate(gridBox, new BABYLON.Vector3(0, -1, 0), 0.4);
            }
            if (rotateRight == true) {
                rotate(gridBox, new BABYLON.Vector3(0, 1, 0), 0.4);
            }
        }

        let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI", true, scene);
        let loadedGUI = await advancedTexture.parseFromURLAsync("/json/desktopGUI.json");

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            let loadedGUI = await advancedTexture.parseFromURLAsync("/json/mobileGUI.json");

            const localAxes = new BABYLON.AxesViewer(scene, 1);
            localAxes.zAxis.parent = gridBox;

            let sunButton, upButton, moonButton, leftButton, downButton, rightButton;
            sunButton = advancedTexture.getControlByName("sunButton");
            upButton = advancedTexture.getControlByName("upButton");
            moonButton = advancedTexture.getControlByName("moonButton");
            leftButton = advancedTexture.getControlByName("leftButton");
            downButton = advancedTexture.getControlByName("downButton");
            rightButton = advancedTexture.getControlByName("rightButton");

            sunButton.onPointerDownObservable.add(() => {
                setSkyConfig("material.inclination", skyBoxMaterial.inclination, 0);
            });
            upButton.onPointerDownObservable.add(() => {
                moveForward = true;
            });
            moonButton.onPointerDownObservable.add(() => {
                setSkyConfig("material.inclination", skyBoxMaterial.inclination, -0.5);
            });
            leftButton.onPointerDownObservable.add(() => {
                moveLeft = true;
            });
            downButton.onPointerDownObservable.add(() => {
                moveBackward = true;
            });
            rightButton.onPointerDownObservable.add(() => {
                moveRight = true;
            });

            upButton.onPointerUpObservable.add(() => {
                moveForward = false;
            });
            leftButton.onPointerUpObservable.add(() => {
                moveLeft = false;
            });
            downButton.onPointerUpObservable.add(() => {
                moveBackward = false;
            });
            rightButton.onPointerUpObservable.add(() => {
                moveRight = false;
            });

        };


        // function setupPointerLock() {
        //     canvas.onclick = function() {
        //         canvas.requestPointerLock =
        //             canvas.requestPointerLock ||
        //             canvas.mozRequestPointerLock ||
        //             canvas.webkitRequestPointerLock;
        //         canvas.requestPointerLock();
        //     };
        // }
        // setupPointerLock();


        scene.registerBeforeRender(function() {
            update();
        });

        return scene;
    };

    function switchCam(cameraType, arcCamera, freeCamera) {
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
        if (shape.position.y < -1) {
            shape.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));
            shape.position.x = 0;
            shape.position.y = 0.1;
            shape.position.z = 0;
        }
        scene.render();
    });

    window.addEventListener("resize", function() {
        engine.resize();
    });

});