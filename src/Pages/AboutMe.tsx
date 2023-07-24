
import { MediaBar } from "../components/moleculis/MediaBar";
import { NavBar } from "../components/moleculis/NavBar";



const AboutMe = () => {

  return (
    <div>
      
        <NavBar />
     

      <div className="container mx-auto text-center mt-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-20">About Me</h1>

        <p className="text-xl text-gray-700 mb-8">Born in Madrid and Raised in Extremadura, Spain, I'm passionate assionate about technology, music, and video games. Trained in <span className="font-bold italic text-red-400">English</span> and  <span className="font-bold italic text-red-400">Law</span>, with experience as an <span className="font-bold italic text-red-400">educator</span>.</p>
        <p className="text-xl text-gray-700 mb-8">Embarking on a journey into the world of <span className="font-bold italic text-red-400">programming. </span> Learning SQL, Java, Javascript, React, HTML5, CSS3... I aspire to become a <span className="font-bold italic text-red-400">Full Stack developer. </span></p>
        <p className="text-xl text-gray-700 mb-8">Creative, persevering, and focused on tackling <span className="font-bold italic text-red-400">challenges.</span></p>
        <p className="text-xl text-gray-700 mb-8">Sharing my progress and projects on this landing page.</p>
        <p className="text-xl text-gray-700 mb-8"><span className="font-bold italic text-red-400">Join me</span> on this exciting adventure into technological development.</p>

      </div>

      <div className="">

      </div>
<MediaBar/>
    </div>
  )
}


export default AboutMe;