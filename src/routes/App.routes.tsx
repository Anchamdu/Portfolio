import { Routes, Route } from "react-router-dom";
import App from '../App';
import { Login } from "../Pages/Login";
import AboutMe from "../Pages/AboutMe";
import { PageNotFound } from "../Pages/PageNotFound";
import { Contact2 } from "../Pages/Contact2";
import Currency from "../components/moleculis/Currency";




//<Route path="*" element={<NotFound/>}/>
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pnf" element={<PageNotFound />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact2 />} />
            <Route path="/home" element={<App />} />
            <Route path="/misc" element={<Currency />} />
            
            
           

        </Routes>
    )
}