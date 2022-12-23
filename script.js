import * as THREE from './three.module.js'
import {GLTFLoader} from "./gltfloader.js"
import {OrbitControls} from "./OrbitControls.js"

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 1000;

var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var hlight = new THREE.AmbientLight (0x404040, 2);
scene.add(hlight);

var directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);

var light = new THREE.PointLight(0xc4c4c4, 2);
light.position.set(0, 300, 500);
scene.add(light);

var light2 = new THREE.PointLight(0xc4c4c4, 2);
light2.position.set(500, 100, 0);
scene.add(light2);

var light3 = new THREE.PointLight(0xc4c4c4, 2);
light3.position.set(0, 100, -500);
scene.add(light3);

var light4 = new THREE.PointLight(0xc4c4c4, 2);
light4.position.set(-500, 300, 500);
scene.add(light4);

let loader = new GLTFLoader();
loader.load('voyager_1/scene.gltf', function(gltf) {
    var car = gltf.scene;
    car.scale.set(50, 50, 50);
    scene.add(car);
    animate()
});

let controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener('change', renderer);

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}