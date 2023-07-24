import Button from "../components/atoms/Button/Button.component";
import { NavBar } from "../components/moleculis/NavBar";
import { MediaBar } from "../components/moleculis/MediaBar";


export const Login = () => {


  return (

    <div>
      <div>
        <NavBar />
      </div>
      <div className="max-w-md mx-auto mt-7">
        <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Login</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="Last Name">
              Last name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="apellidos"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button text="Login" variant="home" />
          </div>
        </form>
      </div>
      <div>
        <MediaBar />
      </div>
    </div>
  );
};
