import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png"
import ChangeLanguage from './ChangeLanguage';
import { LanguageContext } from '../App';


const Header = () => {
    const { languageType } = useContext(LanguageContext);
    const [MobileHeader, setMobileHeader] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    const openMobileHeader = () => {
        setMobileHeader(true)
    }

    const closeMobileHeader = () => {
        setMobileHeader(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div>
                <div className={`header-wrapper ${isScrolled ? 'fixed-header' : ''}`}>
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-2 col-6">
                            <div className="logo-wrapper">
                                <img src={logo} width="79px" height="44.87px" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-10 d-md-block d-none">
                            <div className="">
                                <ul className="list-unstyled p-0 navbar mb-0">
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/"
                                        >
                                            {languageType === "Eng" ? "Home" : "بيت"}
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/meet_the_team"
                                        >
                                             {languageType === "Eng" ? " Meet the Team"  : "تعرف على الفريق" }
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/download"
                                        > {languageType === "Eng" ? " Download"  : "تحميل" }
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/about_us"
                                        >
                                             {languageType === "Eng" ? " About Us"  : "معلومات عنا" }
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                            to="/help_and_support"
                                        >
                                              {languageType === "Eng" ? " Help & Support"  : "المساعدة والدعم" }
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <ChangeLanguage/>
                                    </li>   
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 text-end d-md-none">
                            <button className="toogle-btn" onClick={openMobileHeader}>
                                <i className="fa fa-align-right"></i>
                            </button>
                            <div className={`mobile-header ${MobileHeader ? "show" : ""}`}>
                                <div className="pb-4 ps-4 pe-2 mb-5 border-bottom">
                                    <div className="d-flex justify-content-between w-100">
                                        <div className="col-4">
                                            <div className="logo-wrapper">
                                                <img src="/./assets/img/logo.png" width="79px" height="44.87px" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className="toogle-btn" onClick={closeMobileHeader}>
                                                <i className="fa fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <ul className="list-unstyled p-0 navbar flex-column justify-content-start align-items-start">
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                                to="/"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                                to="/meet_the_team"
                                            >
                                                Meet the Team
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                                to="/download"
                                            >
                                                Download
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                                to="/about_us"
                                            >
                                                About Us
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                                to="/help_and_support"
                                            >
                                                Help & Support
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;