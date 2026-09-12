"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";


export default function Experience(){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
        scene.add(camera)

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
    });
        }, []);



    return(
        <div className="experience">
            <canvas ref={canvasRef} className="webgl"/>
        </div>
    )

}