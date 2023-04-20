import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Background3D = () => {
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Generate 500 random spheres
    const generateSpheres = () => {
      const geometry = new THREE.SphereGeometry(Math.random() * 0.1 + 0.01, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.x = Math.random() * 10 - 5;
      sphere.position.y = Math.random() * 10 - 5;
      sphere.position.z = Math.random() * 10 - 5;
      scene.add(sphere);

      // Add vertical movement to spheres
      const speed = Math.random() * 0.01 + 0.005;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const initialY = sphere.position.y;
      sphere.userData = {
        speed,
        direction,
        initialY,
      };
    };

    for (let i = 0; i < 500; i++) {
      generateSpheres();
    }

    // Create orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Set auto-rotate
    controls.autoRotate = true;
    controls.autoRotateSpeed = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update sphere positions
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          const sphere = object;
          const { speed, direction, initialY } = sphere.userData;
          sphere.position.y += speed * direction;
          if (sphere.position.y > 5 || sphere.position.y < -5) {
            sphere.position.y = initialY;
          }
        }
      });

      // Update orbit controls
      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Background3D;

