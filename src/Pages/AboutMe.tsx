
import { NavBar } from "../components/moleculis/NavBar";
import { MediaBar } from "../components/moleculis/MediaBar";


const AboutMe = () => {

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="container mx-auto text-center mt-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">About Me</h1>
        <p className="text-xl text-gray-700 mb-8">Born in Madrid and adopted by Extremadura.</p>
        <p className="text-xl text-gray-700 mb-8">Always willing to learn.</p>
        <p className="text-xl text-gray-700 font-bold italic mb-8">“When the going gets tough, the tough get going”.</p>

      </div>

      <div className="">

      </div>
      <div>
        <MediaBar />
      </div>
    </div>
  )
}


export default AboutMe;