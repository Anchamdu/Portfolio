import { NavBar } from "../components/moleculis/NavBar";
import { MediaBar } from "../components/moleculis/MediaBar";

export const PageNotFound = () => {

  return (
    <div>
      <NavBar />
      <div className="container mx-auto text-center mt-20">
        <h1 className="text-8xl font-bold text-gray-800">404 ERROR</h1>
        <p className="text-xl text-gray-600 mt-20 my-12">The site you're looking for is lost in <span className="font-bold italic text-blue-300">cyberspace</span>.</p>
        <p className="text-xl text-gray-600 my-4">We've sent out a search party, but in the meantime, why not explore some of my <span className="font-bold italic text-red-400">other sites</span>?</p>
      </div>
      <MediaBar />
    </div>
  );
};


