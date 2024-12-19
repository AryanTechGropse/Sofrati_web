import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./SheardCompoents/Footer";
import Meet from "./components/Meet";
import Download from "./components/Download";
import AboutUs from "./components/AboutUs";
import Help_and_Support from "./components/Help_and_Support";


const AllRoutes = () => {
    const Allroutes = [
        { path: "/", element: <Home /> },
        { path: "/meet_the_team", element: <Meet /> },
        { path: "/download", element: <Download /> },
        { path: "/about_us", element: <AboutUs /> },
        { path: "/help_and_support", element: <Help_and_Support /> },
    ];
    return (
        <>
             <Routes>
                    {Allroutes.map((item, index) => (
                        <Route key={index} path={item.path} element={item.element} />
                    ))}
                </Routes>
        </>
    )
}
export default AllRoutes;