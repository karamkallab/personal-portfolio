import {Hero} from "@/sections/Hero";
import {Navbar} from "@/layout/Navbar";
import {Footer} from "@/layout/Footer";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Contact} from "@/sections/Contact";
import {Projects} from "@/sections/Projects";
import {Education} from "@/sections/Education";

function App() {
  return (

  <div className= "min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
  <Hero />
  <About />
  <Projects />
  <Experience />
  <Education />
  <Contact />
    </main>
    <Footer />
    </div>
    );
}

export default App
