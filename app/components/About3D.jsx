"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function About3D(){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);

        camera.position.z = 3;

        //Objects
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({
            color: 0x4274d9
        })
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        //Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        });

        renderer.setSize(400, 400);

        function animate(){
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <div className="about-3d">
            <canvas ref={canvasRef}></canvas>
        </div>
    )
        
}