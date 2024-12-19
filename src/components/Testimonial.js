import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import User from "../assets/img/user.png"
import { useContext } from "react";
import { LanguageContext } from "../App";

const Testimonial = () => {
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
            <div className="testimonial-wrapper mt-5">
                <div className="mt-4">
                    <h2 className="comman-heading text-center">
                        {languageType === "Eng" ? "Testimonials" : "الشهادات"}</h2>
                </div>
                <div className="mt-5">
                    <div className="slider-container">
                        <div className="row">
                            <div className="col-md-12 mx-auto testimonial-slider-wrapper">
                                <Slider {...settings}>
                                    <div className="w-100">
                                        <div className="text-center mx-auto slider-items">
                                            <h2 className="testimonial-card-text">
                                            {languageType === "Eng" ? "With the help of Landify I have created a landing page for my startup. The UI kit is so intuitive and easy to use." : "بمساعدة Landify قمت بإنشاء صفحة مقصودة لشركتي الناشئة. مجموعة واجهة المستخدم بديهية للغاية وسهلة الاستخدام."}</h2>
                                            <div className="testimonial-user-wrapper mx-auto mt-5 p">
                                                <img className="w-100 h-100" src={User} alt="Slider 1" />
                                            </div>
                                            <div className="mt-2">
                                                <span className="fs-6 fw-semibold pe-2"> {languageType === "Eng" ? "Floyd Miles" : "فلويد مايلز"}</span>
                                                <span className="fs-6 fw-light">{languageType === "Eng" ? "Vice President" : "نائب الرئيس"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <div className="text-center mx-auto slider-items">
                                            <h2 className="testimonial-card-text">
                                            {languageType === "Eng" ? "With the help of Landify I have created a landing page for my startup. The UI kit is so intuitive and easy to use." : "بمساعدة Landify قمت بإنشاء صفحة مقصودة لشركتي الناشئة. مجموعة واجهة المستخدم بديهية للغاية وسهلة الاستخدام."}</h2>
                                            <div className="testimonial-user-wrapper mx-auto mt-5 p">
                                                <img className="w-100 h-100" src={User} alt="Slider 1" />
                                            </div>
                                            <div className="mt-2">
                                                <span className="fs-6 fw-semibold pe-2"> {languageType === "Eng" ? "Floyd Miles" : "فلويد مايلز"}</span>
                                                <span className="fs-6 fw-light">{languageType === "Eng" ? "Vice President" : "نائب الرئيس"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="custom-btn w-fit px-4">
                        <i className="fa-solid fa-paper-plane pe-2"></i>
                        {languageType === "Eng" ? "Send Your FeedBack" : "أرسل ملاحظاتك"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Testimonial