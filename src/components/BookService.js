import React, { useContext } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { LanguageContext } from '../App';
import mobileImg4 from "../assets/img/mobile-img-4.png"
import buffetMobile from "../assets/img/buffet-mobile.png"
import mainfestMobile from "../assets/img/mainfest-mobile.png"

const BookService = () => {
    const { languageType } = useContext(LanguageContext);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="banner-section banner4 mt-5">
                <Slider {...settings}>
                    <div>
                        <div className="row">
                            <div className="col-lg-6 col-md-4">
                                <div className="">
                                    <div>
                                        <div className="banner-img-wrapper">
                                            <img src={mobileImg4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8">
                                <div className="banner-Heading-wrapper">
                                    <h3 className="heading-2 text-end">
                                        {languageType == "Eng"
                                            ? " Effortless Flower Booking"
                                            : "تنسيق الزهور بسهولة"
                                        }

                                    </h3>
                                    <p className="para-2 text-end w-100">
                                        {languageType == "Eng"
                                            ? (
                                                <>
                                                    Book stunning flower arrangements for any <br className="d-lg-block d-none" />occasion with ease and instant confirmation."
                                                </>
                                            )
                                            : "البوفيهات والزهور والقوى العاملة - من خلال خدمة واحدة مريحة."
                                        }
                                    </p>
                                    <div className="mt-md-0 mt-4">
                                        <button className="custom-btn">
                                            {languageType == "Eng"
                                                ? "Book Now"
                                                : "احجز الآن"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-lg-6 col-md-4">
                                <div className="">
                                    <div>
                                        <div className="banner-img-wrapper">
                                            <img src={buffetMobile} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8">
                                <div className="banner-Heading-wrapper">
                                    <h3 className="heading-2 text-end">
                                        {languageType == "Eng"
                                            ? " Effortless Buffet Booking"
                                            : "حجز البوفيه بسهولة."
                                        }

                                    </h3>
                                    <p className="para-2 text-end w-100">
                                        {languageType == "Eng"
                                            ? (
                                                <>
                                                    Book your buffet effortlessly for any event <br className="d-lg-block d-none" />with customizable menus  and instant confirmation."
                                                </>
                                            )
                                            : "احجز بوفيهك بسهولة لأي فعالية مع قوائم مخصصة وتأكيد فوري."
                                        }
                                    </p>
                                    <div className="mt-md-0 mt-4">
                                        <button className="custom-btn">
                                            {languageType == "Eng"
                                                ? "Book Now"
                                                : "احجز الآن"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-lg-6 col-md-4">
                                <div className="">
                                    <div>
                                        <div className="banner-img-wrapper">
                                            <img src={mainfestMobile} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8">
                                <div className="banner-Heading-wrapper">
                                    <h3 className="heading-2 text-end">
                                        {languageType == "Eng"
                                            ? "Hire Skilled Manpower Instantly"
                                            : "توظيف القوى العاملة الماهرة فوراً"
                                        }

                                    </h3>
                                    <p className="para-2 text-end w-100">
                                        {languageType == "Eng"
                                            ? (
                                                <>
                                                    Book skilled manpower for any event quickly <br className="d-lg-block d-none" />and efficiently, with instant confirmation."
                                                </>
                                            )
                                            : "احجز القوى العاملة الماهرة لأي فعالية بسرعة وكفاءة مع تأكيد فوري"
                                        }
                                    </p>
                                    <div className="mt-md-0 mt-4">
                                        <button className="custom-btn">
                                            {languageType == "Eng"
                                                ? "Book Now"
                                                : "احجز الآن"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default BookService
