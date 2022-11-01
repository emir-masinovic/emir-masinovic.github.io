window.addEventListener('DOMContentLoaded', function()
			{
				
				var canvas = document.getElementById('canvas');
				var engine = new BABYLON.Engine(canvas, true);

				var createScene = function(){
					var scene = new BABYLON.Scene(engine);
					// scene.clearColor = new BABYLON.Color3.White();

					var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
					light.intensity = 0.9;

					var box = BABYLON.Mesh.CreateBox("Box",2.0,scene);
					let boxMaterial = new BABYLON.StandardMaterial("Box Material", scene);
					boxMaterial.diffuseTexture = new BABYLON.Texture("textures/box.jpg", scene);
					box.material = boxMaterial;
					box.position.y = 1

					var followCamera = new BABYLON.ArcRotateCamera("FollowCam", 
						BABYLON.Tools.ToRadians(-90),
						BABYLON.Tools.ToRadians(70),
						10.0, box.position, scene);
					followCamera.attachControl(canvas,true);
					followCamera.lockedTarget = box;
				
					// camera.keysUp.push(87);
					// camera.keysDown.push(83);
					followCamera.keysLeft.push(81); //Q
					followCamera.keysRight.push(69); //E

					// TODO toggle between cameras
					// var freeCamera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0,0,-10), scene);
					// freeCamera.setTarget(BABYLON.Vector3.Zero());              
					// freeCamera.attachControl(canvas,true);              
					// freeCamera.keysUp.push(87);    //W
					// freeCamera.keysRight.push(68); //S
					// freeCamera.keysDown.push(83)   //D
					// freeCamera.keysLeft.push(65);  //A			

					var sound = new BABYLON.Sound("move", "sounds/move.mp3", scene);
					const speed = 5;

					scene.onKeyboardObservable.add((kbInfo) => {
						switch (kbInfo.type) {
							case BABYLON.KeyboardEventTypes.KEYDOWN:
								switch (kbInfo.event.key) {
									case "a":
									case "A":
										box.position.x -= speed;
										sound.play();
									break

									case "d":
									case "D":
										box.position.x += speed;
										sound.play();
									break

									case "w":
									case "W":
										box.position.z += speed;
										sound.play();
									break

									case "s":
									case "S":
										box.position.z -= speed;
										sound.play();
									break

									case "o":
									case "O":
									// toggleCamera = true;
									console.log("Toggle camera = true");
							}
							break;
						}
					});			
					

					var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 100}, scene);
					ground.position.z = 50;
					ground.position.y = 0;

					let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
					groundMaterial.diffuseTexture = new BABYLON.Texture("textures/cobblestone.jpg", scene);
					groundMaterial.diffuseTexture.uScale = 1;
					groundMaterial.diffuseTexture.vScale = 7;
					ground.material = groundMaterial;

					var ground2 = BABYLON.MeshBuilder.CreateGround("ground2", {width: 100, height: 10}, scene);
					ground2.position.z = 105;
					ground2.position.y = 0;
					
					let ground2Material = new BABYLON.StandardMaterial("Ground2 Material", scene);
					ground2Material.diffuseTexture = new BABYLON.Texture("textures/cobblestone.jpg", scene);
					ground2Material.diffuseTexture.uScale = 7;
					ground2Material.diffuseTexture.vScale = 1;
					ground2.material = ground2Material;

					var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
					skyboxMaterial.backFaceCulling = false;
					skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
					skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
					skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
					skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
					var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:100.0}, scene);
					skybox.material = skyboxMaterial;
					// camera.upperBetaLimit = Math.PI / 2.2;

					var outerBoxMaterial = new BABYLON.StandardMaterial("outerbox", scene);
					outerBoxMaterial.backFaceCulling = false;
					outerBoxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/redbox", scene);
					outerBoxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
					outerBoxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
					outerBoxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
					var outerBox = BABYLON.MeshBuilder.CreateBox("outerbox", {size:1000.0}, scene);
					outerBox.material = outerBoxMaterial;
										
					// TODO Bind box with animation... somehow
					// const animBox = new BABYLON.Animation("Animation", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
					// const boxKeys = []; 

					// boxKeys.push({
					// 	frame: 0,
					// 	value: -4
					// });

					// boxKeys.push({
					// 	frame: 150,
					// 	value: 4
					// });

					// boxKeys.push({
					// 	frame: 210,
					// 	value: 4
					// });

					// animBox.setKeys(boxKeys);

					// box.animations = [];
					// box.animations.push(animBox);

					// scene.beginAnimation(box, 0, 210, true);
					
					return scene;
				}

				var scene = createScene();

				engine.runRenderLoop(function(){
					//Need 2 scenes for cameras
					scene.render();
				});
	  
			});