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

                //Camera
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
                scene.add(camera)
                //camera.position.z = 3
                camera.position.set(0, 2, 5);

                /**
                 * Lights
                 */
                //Ambient Light
                const ambientLight = new THREE.AmbientLight(0xffffff, 1);
                scene.add(ambientLight);

                //Directional Light
                const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
                scene.add(directionalLight);
                directionalLight.position.set(-2, 2, 2);
                directionalLight.castShadow = true;

                const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
                scene.add(directionalLightHelper);

                /**
                 * Objects
                 */

                //object-01 
                const geometry = new THREE.BoxGeometry(1, 1, 1);

                const material = new THREE.MeshStandardMaterial({
                    color: 0xff0000
                })

                const mesh = new THREE.Mesh(geometry, material);
                mesh.castShadow = true;
                group.add(mesh);

                //object-02
                const mesh2 = new THREE.Mesh(geometry, material)
                mesh2.castShadow = true;
                group.add(mesh2)
                mesh2.position.x = 2
                mesh2.position.y = 1

                //Floor

                const floorGeometry = new THREE.PlaneGeometry(10, 10);
                const floorMaterial = new THREE.MeshStandardMaterial({
                    color : 0x808080
                });
                const floor = new THREE.Mesh(floorGeometry, floorMaterial);
                floor.receiveShadow = true;
                scene.add(floor);
                floor.rotation.x = -Math.PI * 0.5
                floor.position.y = -1;

                const renderer = new THREE.WebGLRenderer({
                    canvas: canvasRef.current,
            });
            renderer.shadowMap.enabled = true;
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
                //group.position.x = Math.sin(elapsedTime)
                mesh2.rotation.y += deltaTime * 0.5;

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