import React,{ useEffect } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Model13D = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth*3 / (window.innerHeight*3), 0.1, 100);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);
    document.getElementById('background').appendChild(renderer.domElement);
    
    // create a the cube
    //const geometry = new THREE.BoxGeometry(2,2,2);
    //const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    //const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);

    const generateSpheres = () => {
      const geometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff}); 
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.x = Math.random() * 10 - 5;
      sphere.position.z = Math.random() * 10 - 5;
      sphere.position.y = Math.random() * 10 - 5;
      scene.add(sphere);

      const speed = Math.random() * 10 - 5;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const initialY = sphere.position.y;
      sphere.userData = {
        speed,
        direction,
        initialY,
      };
    };
    for(let i=0; i < 500; i++){
      generateSpheres();
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.rotateSpeed = 10;
    controls.enableZoom = false;
    controls.innerWidth = '100wh';
    controls.innerHeight = '300vh';
    //controls.enabled = false;

    function animate(){
      requestAnimationFrame(animate);


      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;
      
      controls.update();

      renderer.render(scene, camera);
    };
    
    animate();
    renderer.render(scene, camera);

    // Clean up, or this element repeat itself every time in the page.
    return () => {
      //document.body.removeChild(renderer.domElement);
    }
  }, []);

  return (<div id='background' style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        overflow: 'hidden',
      }}></div>
  )
};

export default Model13D;
