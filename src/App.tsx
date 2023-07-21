import Button from "./components/atoms/Button/Button.component";
import { NavBar } from "./components/moleculis/NavBar";
import { MediaBar } from "./components/moleculis/MediaBar";
import bg from './assets/images/BG3.jpg';
import img from './assets/images/ProfileImage.png';
import { useNavigate } from 'react-router-dom';




const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="fixed h-screen w-screen -z-10">
        <img className="h-full w-full object-cover" src={bg} alt="Background image" />
      </div>
      <div>
        <NavBar />
      </div>
      <div className="flex items-center justify-center mt-8">
        <img className="w-60 h-60 rounded-full" src={img} alt="Profile Image" />
      </div>

      <div className="container mx-auto text-center mt-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Angel Chamorro's Profile</h1>
        <p className="text-xl text-gray-700 mb-10">Welcome to my humble profile! Here you will find information about my projects, skills, and how to contact me.</p>
        <p className="text-xl text-gray-700 mb-8">
          If you want to check my current <span className="text-red-600 uppercase">projects</span> please click the button below
        </p>

        <Button />
        <p className="text-xl text-gray-700 mb-8">
          <p className="text-5xl text-gray-700 mb-20">
            
          </p>
        </p>

        
      </div>

      <div>
        <MediaBar />
        
      </div>

    </div>
  )
}


export default App;