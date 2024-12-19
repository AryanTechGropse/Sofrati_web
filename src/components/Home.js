import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";
import mobileImg1 from "../assets/img/mobile-img-1.png";
import mobileImg2 from "../assets/img/mobile-img-2.png";
import mobileImg3 from "../assets/img/mobile-img-3.png";
import downloadPlay from "../assets/img/play-button.png";
import downloadApple from "../assets/img/apple-button.png";
import BookService from "./BookService";
import { useContext } from "react";
import { LanguageContext } from "../App.js";

const Home = () => {
    const { languageType } = useContext(LanguageContext);

    return (
        <>
            <div className="banner-section banner1 mt-md-5">
                <div className="row">
                    <div className="col-lg-8 col-md-8 order-md-1 order-2">
                        <div className="banner-Heading-wrapper">
                            <h2>
                                {languageType === "Eng" ? "Your all-in-one platform for effortless bookings" : "منصتك الشاملة للحجوزات السهلة"}
                            </h2>
                            <p>{languageType === "Eng" ? "DOWNLOAD NOW ON THE APP STORE AND PLAY STORE" : "قم بالتنزيل الآن على متجر التطبيقات ومتجر Play"}</p>
                            <div className="download-btn-wrapper">
                                <div className="d-flex gap-3">
                                    <Link>
                                        <div className="download-btn">
                                            <img src={downloadPlay} alt="Download on Play Store" />
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className="download-btn">
                                            <img src={downloadApple} alt="Download on Apple Store" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 order-md-2 order-1">
                        <div className="d-md-flex justify-content-end">
                            <div>
                                <div className="banner-img-wrapper">
                                    <img src={mobileImg1} alt="Mobile Image 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-section banner2 mt-md-5">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <div className="banner-img-wrapper">
                                <img src={mobileImg2} alt="Mobile Image 2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="banner-Heading-wrapper">
                            <h3 className="heading-2 text-end">
                                {languageType === "Eng" ? "Manage all booking needs" : "إدارة جميع احتياجات الحجز"}
                            </h3>
                            <p className="para-2 text-end w-100">
                                {languageType === "Eng" ? (
                                    <>
                                        Buffets, flowers, and manpower—
                                        <br className="d-md-block d-none" /> convenient service.
                                    </>
                                ) :
                                    "البوفيهات والزهور والقوى العاملة - من خلال خدمة واحدة مريحة."}

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-section banner3 mt-5">
                <div className="row">
                    <div className="col-md-8 order-md-1 order-2">
                        <div className="banner-Heading-wrapper">
                            <h3 className="heading-2">
                                {languageType === "Eng" ?
                                    "Instantly connect with us" :
                                    "تواصل معنا على الفور"
                                }
                            </h3>
                            <p className="para-2 para-3">
                                {languageType === "Eng" ?
                                    "Your personalized chat support for all booking inquiries and assistance" :
                                    "دعم الدردشة الشخصي الخاص بك لجميع استفسارات الحجز والمساعدة"
                                }
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 order-md-2 order-1">
                        <div className="d-md-flex justify-content-end">
                            <div>
                                <div className="banner-img-wrapper">
                                    <img src={mobileImg3} alt="Mobile Image 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BookService />
            <div>
                <Testimonial />
            </div>
        </>
    );
};

export default Home;
