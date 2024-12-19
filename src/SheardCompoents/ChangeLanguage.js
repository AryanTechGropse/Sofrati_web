import React, { createContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import USA from "../assets/img/us.png";
import SaudiArabia from "../assets/img/sa.png";

const ChangeLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState({
        label: "Eng",
        flag: USA,
        dir: "ltr",
    });

    useEffect(() => {
        const LocalDataLanguage = JSON.parse(localStorage.getItem("selectedLanguage"));
        document.documentElement.lang = LocalDataLanguage.label;
        document.body.dir = LocalDataLanguage.dir;
        document.body.classList.add(LocalDataLanguage.label);
        setSelectedLanguage(LocalDataLanguage);
    }, [])

    const handleLanguageChange = (language, flag, dir) => {
        const NewLanguage = { label: language, flag, dir };
        setSelectedLanguage(NewLanguage);

        if (language === "Ar") {
            document.documentElement.lang = "ar";
            document.body.dir = "rtl";
            document.body.classList.remove('Eng');
            document.body.classList.add('Ar');
        } else {
            document.documentElement.lang = "en";
            document.body.dir = "ltr";
            document.body.classList.remove('Ar');
            document.body.classList.add('Eng');
        }
        localStorage.setItem("selectedLanguage", JSON.stringify(NewLanguage));
    };

    return (
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="d-flex align-items-center">
                    <img src={selectedLanguage.flag} alt={selectedLanguage.label} className="lang-img" />
                    {selectedLanguage.label}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-content">
                    <Dropdown.Item onClick={() => handleLanguageChange("Eng", USA, "ltr")}
                        className="d-flex align-items-center">
                        <img src={USA} alt="USA" className="lang-img" />
                        Eng
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLanguageChange("Ar", SaudiArabia, "rtl")}
                        className="d-flex align-items-center">
                        <img src={SaudiArabia} alt="Saudi Arabia" className="lang-img" />
                        Ar
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
};

export default ChangeLanguage;
