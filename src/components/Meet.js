
import { useContext } from "react"
import meetUser1 from "../assets/img/meet-1.png"
import meetUser2 from "../assets/img/meet-2.png"
import meetUser3 from "../assets/img/meet-3.png"
import meetUser4 from "../assets/img/meet-4.png"
import meetUser5 from "../assets/img/meet-5.png"
import meetUser6 from "../assets/img/meet-6.png"
import ourStory from "../assets/img/our-story.png"
import { LanguageContext } from "../App"

const Meet = () => {
    const { languageType } = useContext(LanguageContext);
    
    return (
        <>
            <div className="mt-5 mb-5">
                <div className="text-center">
                    <h2 className="comman-heading mb-5">{languageType === "Eng" ? "Meet the Team" : "تعرف على الفريق"}</h2>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 meet-wrapper">
                        <div className="meet-img">
                            <img className="w-100 h-100" src={meetUser1} />
                        </div>
                        <h5 className="meet-heading">{languageType === "Eng" ? "JUDY THELEN" : "جودي ثيلين"}</h5>
                        <p className="meet-text">{languageType === "Eng" ? "CEO,CO- FOUNDER" : "الرئيس التنفيذي، المؤسس المشارك"}</p>
                    </div>
                    <div className="col-md-4 meet-wrapper">
                        <div className="meet-img">
                            <img className="w-100 h-100" src={meetUser2} />
                        </div>
                        <h5 className="meet-heading">{languageType === "Eng" ? "ELIOT FROST" : "إليوت فروست"}</h5>
                        <p className="meet-text">{languageType === "Eng" ? "CEO,CO- FOUNDER" : "الرئيس التنفيذي، المؤسس المشارك"}</p>
                    </div>
                    <div className="col-md-4 meet-wrapper">
                        <div className="meet-img">
                            <img className="w-100 h-100" src={meetUser3} />
                        </div>
                        <h5 className="meet-heading">{languageType === "Eng" ? "EMILY GINSBURG" : "إميلي جينسبيرغ"}</h5>
                        <p className="meet-text">{languageType === "Eng" ? "SOFTWARE ENGINEER" : "مهندس برمجيات"}</p>
                    </div>
                    <div className="col-md-4 meet-wrapper">
                        <div className="meet-img">
                            <img className="w-100 h-100" src={meetUser4} />
                        </div>
                        <h5 className="meet-heading">{languageType === "Eng" ? "JUDY THELEN" : "جودي ثيلين"}</h5>
                        <p className="meet-text">{languageType === "Eng" ? "CEO,CO- FOUNDER" : "الرئيس التنفيذي، المؤسس المشارك"}</p>
                    </div>
                    <div className="col-md-4 meet-wrapper">
                        <div className="meet-img">
                            <img className="w-100 h-100" src={meetUser5} />
                        </div>
                        <h5 className="meet-heading">{languageType === "Eng" ? "ELIOT FROST" : "إليوت فروست"}</h5>
                        <p className="meet-text">{languageType === "Eng" ? "CEO,CO- FOUNDER" : "الرئيس التنفيذي، المؤسس المشارك"}</p>
                    </div>
                    <div className="col-md-4 meet-wrapper">
                        <div className="meet-img">
                            <img className="w-100 h-100" src={meetUser6} />
                        </div>
                        <h5 className="meet-heading">{languageType === "Eng" ? "EMILY GINSBURG" : "إميلي جينسبيرغ"}</h5>
                        <p className="meet-text">{languageType === "Eng" ? "SOFTWARE ENGINEER" : "مهندس برمجيات"}</p>
                    </div>
                </div>
            </div>
            <div className="our-story mt-5 pt-5">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="img-wrapper pe-lg-5">
                            <img src={ourStory} className="w-100 h-100" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <h2>{languageType === "Eng" ? "OUR STORY" : "قصتنا"}</h2>
                        <div className="our-story-text-wrapper">
                            <p className="our-story-text">
                                {languageType === "Eng" ?
                                    "Eliot & I met in NYC after undergrad and built our relationship around restaurants in the city. We were constantly looking for the very best places, but we struggled to find reliable reviews and a good place to track our adventures."
                                    : "التقيت أنا وإليوت في مدينة نيويورك بعد التخرج من الجامعة وقمنا ببناء علاقتنا حول المطاعم في المدينة. كنا نبحث باستمرار عن أفضل الأماكن، لكننا ناضلنا للعثور على تقييمات موثوقة ومكان جيد لتتبع مغامراتنا."}
                            </p>
                            <p className="our-story-text">
                                {languageType === "Eng" ?
                                    "Our journey brought us to Harvard Business School where we were determined to build a solution that allowed food lovers to consistently find and track the best restaurants. We envisioned a product where you no longer had to search--one that knew your tastes and told you the places that you would love at the click of a button! From a simple idea to revolutionizing event planning, our story is one of passion and dedication. We created a platform to simplify buffet, flower, and manpower bookings, empowering you to craft unforgettable moments effortlessly. At the heart of our journey is the belief that organizing events should be stress-free, enjoyable, and personalized to your unique vision." :
                                    "قادتنا رحلتنا إلى كلية هارفارد للأعمال حيث كنا مصممين على بناء حل يسمح لمحبي الطعام بالعثور على أفضل المطاعم وتتبعها باستمرار. لقد تصورنا منتجًا لم تعد بحاجة إلى البحث فيه - منتج يعرف أذواقك ويخبرك بالأماكن التي تحبها بنقرة زر واحدة! من فكرة بسيطة إلى ثورة في تخطيط الأحداث، قصتنا هي قصة شغف وتفاني. لقد أنشأنا منصة لتبسيط حجوزات البوفيه والزهور والقوى العاملة، مما يمكّنك من صنع لحظات لا تنسى دون عناء. في قلب رحلتنا هو الإيمان بأن تنظيم الأحداث يجب أن يكون خاليًا من التوتر وممتعًا ومخصصًا لرؤيتك الفريدة." }
                            </p>
                            <p className="our-story-text">
                            {languageType === "Eng" ? 
                                "From a simple idea to revolutionizing event planning, our story is one of passion and dedication. We created a platform to simplify buffet, flower, and manpower bookings, empowering you to craft unforgettable moments effortlessly."
                                : "من فكرة بسيطة إلى ثورة في تخطيط الأحداث، قصتنا هي قصة شغف وتفاني. لقد أنشأنا منصة لتبسيط حجوزات البوفيه والزهور والقوى العاملة، مما يمكّنك من صنع لحظات لا تنسى دون عناء."
                            }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Meet;