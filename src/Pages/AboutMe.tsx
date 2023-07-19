import React from "react";

const AboutMe = () => {

    return (
      <div>
        <div>
          <NavBar />
        </div>
  
        <div className="container mx-auto text-center mt-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">About Me</h1>
          <p className="text-xl text-gray-700 mb-8">Welcome to my profile. Here you will find information about my projects, skills, and how to contact me.</p>
          <p className="text-xl text-gray-700 mb-8">Welcome to my profile. Here you will find information about my projects, skills, and how to contact me.</p>
          <p className="text-xl text-gray-700 mb-8">Welcome to my profile. Here you will find information about my projects, skills, and how to contact me.</p>
          <button className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700">Projects</button>
        </div>
        <div className="">
          <img src="./public/images/ProfileImage.jpg" alt="description of image" />
        </div>
        <div>
          <MediaBar />
        </div>
      </div>
    )
  }
  
  
  export default AboutMe;