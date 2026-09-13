"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";


export default function Experience(){
    const canvasRef = useRef(null);

    useEffect(()=>{
                const scene = new THREE.Scene();
                scene.background = new THREE.Color(0x111111);

                //Creating a group
                const group = new THREE.Group();
                scene.add(group);

                const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
                scene.add(camera)
                camera.position.z = 3

                /**
                 * Objects
                 */

                //object-01 
                const geometry = new THREE.BoxGeometry(1, 1, 1);

                const material = new THREE.MeshBasicMaterial({
                    color: 0xff0000
                })

                const mesh = new THREE.Mesh(geometry, material);

                group.add(mesh);

                //object-02
                const mesh2 = new THREE.Mesh(geometry, material)
                group.add(mesh2)
                mesh2.position.x = 2
                mesh2.position.y = 1

                const renderer = new THREE.WebGLRenderer({
                    canvas: canvasRef.current,
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.render(scene, camera)

            //Background resize
            function handleResize(){
                camera.aspect = window.innerWidth/window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize(window.innerWidth, window.innerHeight);
                //renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }
            window.addEventListener('resize', handleResize);


            //Clock
            const clock = new THREE.Clock();

            let requestAnimationFrameId;

            function tick(){
                const deltaTime = clock.getDelta();
                const elapsedTime = clock.getElapsedTime();

                mesh.position.y = Math.sin(elapsedTime)

                group.rotation.y += deltaTime * 0.5;

                renderer.render(scene, camera);

                requestAnimationFrameId = window.requestAnimationFrame(tick)
            }

            tick();

            return ()=>{
                window.cancelAnimationFrame(requestAnimationFrameId);
                window.removeEventListener('resize', handleResize);
            }


        }, []);



    return(
        <div className="experience">
            <canvas ref={canvasRef} className="webgl"/>
        </div>
    )

}