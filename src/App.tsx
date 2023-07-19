import Button from "./components/atoms/Button/Button.component";
import Input from "./components/atoms/Input/Input.component";
import Input2 from "./components/atoms/Input/Input2.component";
import Table from "./components/atoms/Table";
import LandingPage from "./Pages/LandingPage";
import Register from "./components/moleculis/Register";
import { NavBar } from "./components/moleculis/NavBar";
import { MediaBar } from "./components/moleculis/MediaBar";
import Login from "./components/moleculis/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import bg from './assets/images/BG3.jpg';
import img from './assets/images/ProfileImage.png';




const App = () => {

  return (
    <div>
      <div className="fixed h-screen w-screen -z-10">
        <img className="h-full w-full" src={bg} alt="description of image" />
      </div>
      <div>
        <NavBar />
      </div>
      <div className="flex items-center justify-center mt-8">
      <img className="w-60 h-60 rounded-full" src={img} alt="description of image" />
 
      </div>

      <div className="container mx-auto text-center mt-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Angel Chamorro's Profile</h1>
        <p className="text-xl text-gray-700 mb-8">Welcome to my humble profile! Here you will find information about my projects, skills, and how to contact me.</p>
        <p className="text-xl text-gray-700 mb-8">Enjoy!</p>
        <p className="text-xl text-gray-700 mb-8">If you want to check my current projects please click the button below</p>
        <Button />
      </div>

      <div>
        <MediaBar />
      </div>
    </div>
  )
}


export default App;