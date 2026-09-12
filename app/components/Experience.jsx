"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";


export default function Experience(){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const scene = new THREE.Scene();

                const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
                scene.add(camera)
                camera.position.z = 3

                //Object
                const geometry = new THREE.BoxGeometry(1, 1, 1);

                const material = new THREE.MeshBasicMaterial({
                    color: 0xff0000
                })

                const mesh = new THREE.Mesh(geometry, material);

                scene.add(mesh);

                const renderer = new THREE.WebGLRenderer({
                    canvas: canvasRef.current,
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera)
            //Clock

            const clock = new THREE.Clock();

            function tick(){
                const deltaTime = clock.getDelta();
                const elapsedTime = clock.getElapsedTime();

                mesh.position.y = Math.sin(elapsedTime)

                mesh.rotation.y += deltaTime * 0.5;

                renderer.render(scene, camera);

                window.requestAnimationFrame(tick)
            }

            tick();


        }, []);



    return(
        <div className="experience">
            <canvas ref={canvasRef} className="webgl"/>
        </div>
    )

}