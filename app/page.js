import Experience from "./components/Experience";
import About3d from "./components/About3D"

export default function Home(){
  return(
    <main>
      <Experience/>

      <section id = "about">
        <h2>About Me</h2>
        
        <div className="about-content">
          <p>
            I'm a developer passionate about building interactive,
            creative and immersive web experiences.
          </p>
          <div className="about-3d">
            <About3d/>
          </div>
        </div>
        
      </section>
    </main>
  )
}