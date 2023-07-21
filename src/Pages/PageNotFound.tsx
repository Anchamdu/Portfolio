import { NavBar } from "../components/moleculis/NavBar";

export const PageNotFound = () => {

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-8xl font-bold text-gray-800">404 ERROR</h1>
        <p className="text-xl text-gray-600 my-4">The page you're looking for is lost in <span className="font-bold italic text-blue-300">cyberspace</span>.</p>
        <p className="text-xl text-gray-600 my-4">We've sent out a search party, but in the meantime, why not explore some of our <span className="font-bold italic text-red-400">other pages</span>?</p>

      </div>
    </div>
  );
};


