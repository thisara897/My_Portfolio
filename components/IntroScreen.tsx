"use client"

import { useEffect, useState } from "react" ;

export default function IntroScreen(){
    const[isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (!isOpen) 
            return;

        function handleKeyDown(event: KeyboardEvent){
            if(event.key === "Enter" || event.key === " "){
                event.preventDefault();
                setIsOpen(false);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return ()=>{
            window.removeEventListener("keydown", handleKeyDown);
        };
    },[isOpen]);

    const characters = "Begin Your 3D Experience".split("");

    return(
        <div 
            onClick={()=> setIsOpen(false)}
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background transition-transform duration-700 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}
        >
            <h1 className="text-5xl font-bold text-foreground">Hi, I am Thisara Warshan</h1>

            <p className="text-4xl">{characters.map((char, index)=>(
                <span key={index} className="inline-block transition-transform duration-200 ease-out hover:scale-150 hover:text-highlight"> 
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
            </p>

            {/* <p className=" text-text-muted">
                press <span className="text-highlight">Enter</span> or {" "}
                <span className="text-highlight"> Space</span> to continue
            </p> */}
            
        </div>

    );
}