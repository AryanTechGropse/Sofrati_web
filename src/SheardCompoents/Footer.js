import { Link } from "react-router-dom";
import logoWhite from '../assets/img/logo-white.png'
import { useContext } from "react";
import { LanguageContext } from "../App";

const Footer = () => {
    const { languageType } = useContext(LanguageContext);
    return (
        <>
            <div className="footer-wrapper">
                <div className="container">
                    <div className="footer-header">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="logo">
                                    <img src={logoWhite} />
                                </div>
                                <p className="footer-text">
                                    {languageType === "Eng" ? "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." : "إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة سوف يشتت انتباه القارئ عند النظر إلى تخطيطها."}
                                </p>
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled p-0">
                                    <li>
                                        <h2 className="footer-heading">{languageType === "Eng" ? "Customer Services" : "خدمات العملاء"}</h2>
                                    </li>
                                    <li>
                                        <Link className="footer-link" to="">{languageType === "Eng" ? "About US" : "معلومات عنا"}</Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link" to="">{languageType === "Eng" ? "Terms & Conditions" : "الشروط والأحكام"}</Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link" to="">{languageType === "Eng" ? "Privacy Policy" : "سياسة الخصوصية"}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-unstyled p-0">
                                    <li>
                                        <div className="d-flex gap-3 align-items-center">
                                            <div>
                                                <div className="footer-icon">
                                                    <i className="fa fa-envelope"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="footer-link m-0">Email:</p>
                                                <p className="footer-link fw-semibold m-0">contact@Sofrati.com</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex gap-3 align-items-center">
                                            <div>
                                                <div className="footer-icon">
                                                    <i className="fas">&#xf2a0;</i>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="footer-link m-0">Phone:</p>
                                                <p className="footer-link fw-semibold m-0">(345) 678 - 2345</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-social-link">
                        <ul className="list-unstyled p-0 d-flex justify-content-center">
                            <li>
                                <Link className="social-link active">{languageType === "Eng" ? "Facebook" : "فيسبوك"}</Link>
                            </li>
                            <li>
                                <Link className="social-link">{languageType === "Eng" ? "LinkedIn" : "ينكدين"}</Link>
                            </li>
                            <li>
                                <Link className="social-link">{languageType === "Eng" ? "Instagram" : "انستغرام"}</Link>
                            </li>
                            <li>
                                <Link className="social-link">{languageType === "Eng" ? "Twitter" : "تغريد"}</Link>
                            </li>
                            <li>
                                <Link className="social-link">{languageType === "Eng" ? "Youtube" : "يوتيوب"}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom text-center">
                        <Link className="footer-link-text">
                            {languageType === "Eng" ? "Copyright Sofrati | All Rights Reserved | Terms and Conditions | Privacy Policy" : "حقوق النشر سفراتي | جميع الحقوق محفوظة | الشروط والأحكام | سياسة الخصوصية"}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;