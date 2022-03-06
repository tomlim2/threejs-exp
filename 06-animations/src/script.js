import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//Time  >> traditional way to control animation!
// let time = Date.now();

//Clock
// const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 });

const tick = () => {
  //Time >> traditional way to control animation
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - time;
  //   time = currentTime;
  // Play same speed regardless of the framerate
  //   mesh.rotation.y += 0.01 * deltaTime

  // Clock
  //   const elapsedTime = clock.getElapsedTime();
  //   console.log(elapsedTime);

  //gsap
  

  //Update objects
//   mesh.rotation.y = elapsedTime * Math.PI * 2;
//   mesh.position.y = Math.sin(elapsedTime);
//   mesh.position.x = Math.cos(elapsedTime);
  //Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();

// Another of Clock method is getDelta(...), but do not use it

//GSAP
//npm install --save gsap@3.5.1
