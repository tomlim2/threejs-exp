import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
group.position.x = 1
group.scale.y = 1
group.rotation.y = 1
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

cube2.position.x = 2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

cube3.position.x = -2;
group.add(cube3);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

//POSITION

// mesh.position.x = 1
// mesh.position.y = 2
// mesh.position.z = 1

mesh.position.set(0.7, -0.6, 1);

// mesh.position.normalize()

scene.add(mesh);

// Axes helper

const axesHelper = new THREE.AxesHelper(2);

scene.add(axesHelper);

// distance from 0 0 0
console.log(mesh.position.length());

// distance from vector
console.log(mesh.position.distanceTo(new THREE.Vector3(0, 1, 2)));

//SCALE

// mesh.scale.x = 1;
// mesh.scale.y = 0.1;
// mesh.scale.z = 0.5;
mesh.scale.set(1, 0.2, 0.5);

//ROTATION
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.reorder("YXZ");

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(new THREE.Vector3(3,0,0));
camera.lookAt(cube1.position);

// distance from camera
console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
