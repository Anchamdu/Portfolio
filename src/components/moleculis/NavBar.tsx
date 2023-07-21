import { useNavigate } from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate();


    return (

        <div className="navbar bg-gray-900 text-white py-4 flex justify-center">
            <button onClick={() => navigate('/home')} className="px-4 hover:text-blue-400 uppercase">Home</button>
            <button onClick={() => navigate('/pnf')}className="px-4 hover:text-blue-400 uppercase">Skills</button>
            <button onClick={() => navigate('/aboutme')} className="px-4 hover:text-blue-400 uppercase">About me</button>
            <button onClick={() => navigate('/contact')} className="px-4 hover:text-blue-400 uppercase">Contact</button>
            <button onClick={() => navigate('/login')} className="px-4 hover:text-blue-400 uppercase">Login</button>
        </div>


    );
};
