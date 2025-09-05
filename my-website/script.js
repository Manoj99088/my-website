// --- Three.js 3D Universe ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("universe").appendChild(renderer.domElement);

// Create particles
const particlesCount = 1500;
const particlesGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 100;
}
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positions, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.2,
});
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

camera.position.z = 50;

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.001;
  particles.rotation.x += 0.0005;
  renderer.render(scene, camera);
}
animate();

// --- GSAP Morphing Logo ---
const logo = document.getElementById("logo");
logo.addEventListener("mouseenter", () => {
  gsap.to(logo, { scale: 1.3, rotation: 360, duration: 1 });
});
logo.addEventListener("mouseleave", () => {
  gsap.to(logo, { scale: 1, rotation: 0, duration: 1 });
});
