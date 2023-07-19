import React from "react";
import { MediaBar } from "./MediaBar";
import { NavBar } from "./NavBar";


const Login2 = () => {
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
        <button className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">Projects</button>
      </div>

      <div>
        <MediaBar />
      </div>
      </div>
    );
  };
  
  export default Login2;