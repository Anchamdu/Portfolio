
import Button from '../components/atoms/Button/Button.component';
import { NavBar } from '../components/moleculis/NavBar';


export const Contact2 = () => {
  return (
    <div className="max-w-md mx-auto">
      <NavBar />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 mx-auto">Contact me</h1>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Full name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name goes here"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Write whatever you want here"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <Button />
        </div>
      </form>
    </div>

  );
};