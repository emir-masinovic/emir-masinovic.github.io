/// <reference path='babylon.d.ts' />

window.addEventListener('DOMContentLoaded', function()
{
	var canvas = document.getElementById('canvas');
	var engine = new BABYLON.Engine(canvas, true);

	var arcCamera;
	var freeCamera;
	var scene;
	var shape;

	function switchCam(cameraType) {
		if (cameraType == "arc camera"){
			freeCamera.detachControl(canvas);
			arcCamera.lockedTarget = shape;
			scene.activeCamera = arcCamera;
			arcCamera.attachControl(canvas, true);
			return arcCamera;
		}
		if (cameraType == "free camera")
			arcCamera.detachControl(canvas);
			// freeCamera.lockedTarget = shape;
			scene.activeCamera = freeCamera;
			freeCamera.attachControl(canvas, true);
			return freeCamera;
	}

	function moveBox(start, end, direct){
		const animBox = new BABYLON.Animation("Animation", direct, 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
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

		scene.beginDirectAnimation(shape, [animBox], 0, 30, false, 2);
		
	}

	var createScene = function(){
		scene = new BABYLON.Scene(engine);
		var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
		light.intensity = 0.9;

		var sound = new BABYLON.Sound("move", "sounds/move.mp3", scene);

		freeCamera = new BABYLON.FreeCamera(
			"freeCamera", 
			new BABYLON.Vector3(0, 5, -10), 
			scene);
			freeCamera.keysUp.push(38);
			freeCamera.keysRight.push(39);
			freeCamera.keysDown.push(40);
			freeCamera.keysLeft.push(37);

		arcCamera = new BABYLON.ArcRotateCamera(
			"arcCamera",
			BABYLON.Tools.ToRadians(-90),
			BABYLON.Tools.ToRadians(80),
			10.0, 
			new BABYLON.Vector3(0, 0, 0),
			scene);
			arcCamera.keysUp.push(38);
			arcCamera.keysRight.push(39);
			arcCamera.keysDown.push(40);
			arcCamera.keysLeft.push(37);

		var box = BABYLON.Mesh.CreateBox("Box", 2.0, scene);
		let boxMaterial = new BABYLON.StandardMaterial("Box Material", scene);
		boxMaterial.diffuseTexture = new BABYLON.Texture("textures/box.jpg", scene);
		box.material = boxMaterial;
		box.position.y = 1
		shape = box;

		arcCamera.lockedTarget = shape;
		arcCamera.attachControl(canvas, true);
		scene.activeCamera = arcCamera;
	
		var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 10, height: 666}, scene);
		ground.position.z = 50;
		ground.position.y = 0;

		let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
		groundMaterial.diffuseTexture = new BABYLON.Texture("textures/cobblestone.jpg", scene);
		groundMaterial.diffuseTexture.uScale = 1;
		groundMaterial.diffuseTexture.vScale = 40;
		ground.material = groundMaterial;

		var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
		skyboxMaterial.backFaceCulling = false;
		skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
		skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
		skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
		skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
		var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:100.0}, scene);
		skybox.material = skyboxMaterial;
		// camera.upperBetaLimit = Math.PI / 2.2;

		// var outerBoxMaterial = new BABYLON.StandardMaterial("outerbox", scene);
		// outerBoxMaterial.backFaceCulling = false;
		// outerBoxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/redbox", scene);
		// outerBoxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
		// outerBoxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
		// outerBoxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
		// var outerBox = BABYLON.MeshBuilder.CreateBox("outerbox", {size:1000.0}, scene);
		// outerBox.material = outerBoxMaterial;

		var wideBoxMaterial = new BABYLON.StandardMaterial("wideBox", scene);
		wideBoxMaterial.backFaceCulling = false;
		wideBoxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/widebox", scene);
		wideBoxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
		wideBoxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
		wideBoxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
		var wideBox = BABYLON.MeshBuilder.CreateBox("wideBox", {size:1000.0}, scene);
		wideBox.material = wideBoxMaterial;

		var speed = 10;
		var starPos;
		var endPos;

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
							

						case "o":
						case "O":
							switchCam("free camera");
							break

						case "p":
						case "P":
							switchCam("arc camera");
							break
				}
				break;
			}
		});

		var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
		var text1 = new BABYLON.GUI.TextBlock();
		text1.text = "Move Box - WSAD\n Move Camera - Arrow keys and mouse\n o - free camera\n p - locked arc camera";
		// text1.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
		text1.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
		// text1.width = "50%";
		text1.color = "white";
		text1.fontSize = 15;
		advancedTexture.addControl(text1);
		
		return scene;
	}
	
	var scene = createScene();

	engine.runRenderLoop(function(){
		scene.render();
	});

});