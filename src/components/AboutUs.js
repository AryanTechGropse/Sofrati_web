import React, { useContext } from 'react'
import Banner from '../assets/img/aboutUs-banner.png'
import AboutUsimag from '../assets/img/about_us.png'
import { LanguageContext } from '../App';

const AboutUs = () => {
    const { languageType } = useContext(LanguageContext);

    return (
        <>
            <div className='about-us-wrapper'>
                <div className='banner-height'>
                    <div className='banner-img-wrapper'>
                        <img src={Banner} className="w-100 h-100" />
                    </div>
                </div>
                <div className='mb-5'>
                    <div>
                        <h2 className='comman-heading'>{languageType === "Eng" ? "Sofrati" : "سوفراتي"}</h2>
                    </div>
                    <div>
                        <p className='text'>
                            {languageType === "Eng" ? "Welcome to our platform—your trusted partner in seamless event planning. Specializing in buffet, flower, and manpower bookings, we are dedicated to simplifying the process of bringing your events to life. With a commitment to quality, convenience, and exceptional service, we aim to provide a one-stop solution for all your event needs. Let us help you create moments that matter."
                                : "مرحبًا بك في منصتنا - شريكك الموثوق به في التخطيط السلس للفعاليات. نحن متخصصون في حجوزات البوفيه والزهور والقوى العاملة، ونحن ملتزمون بتبسيط عملية إحياء الأحداث الخاصة بك. مع الالتزام بالجودة والراحة والخدمة الاستثنائية، نهدف إلى توفير حل شامل لجميع احتياجات الحدث الخاص بك. دعنا نساعدك على خلق لحظات مهمة."}
                        </p>
                        <p className='text'>
                            {languageType === "Eng" ? "With a user-friendly interface, personalized services, and a network of trusted partners, we ensure that every aspect of your event is handled with care and precision. Whether it's a grand celebration, a corporate event, or a small gathering, our team is dedicated to delivering exceptional experiences tailored to your vision." :
                                "من خلال واجهة سهلة الاستخدام، وخدمات مخصصة، وشبكة من الشركاء الموثوقين، نضمن التعامل مع كل جانب من جوانب الحدث الخاص بك بعناية ودقة. سواء كان احتفالًا كبيرًا، أو حدثًا مؤسسيًا، أو تجمعًا صغيرًا، فإن فريقنا ملتزم بتقديم تجارب استثنائية مصممة خصيصًا وفقًا لرؤيتك."}
                        </p>
                        <p className='text'>
                            {languageType === "Eng" ? " Driven by passion and a commitment to excellence, we aim to take the stress out of planning, so you can focus on what truly matters—enjoying the moment. Let us be your partner in creating unforgettable memories." :
                                "انطلاقًا من الشغف والالتزام بالتميز، نهدف إلى التخلص من الضغط الناتج عن التخطيط، حتى تتمكن من التركيز على ما يهم حقًا - الاستمتاع باللحظة. دعونا نكون شريكك في خلق ذكريات لا تنسى."}
                        </p>
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col-md-5'>
                        <div className='about-us-banner'>
                            <img src={AboutUsimag} className='w-100 h-100' />
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <h2 className='comman-heading'>{languageType === "Eng" ? "Who we are" : "من نحن"}</h2>
                        <div className='mt-4 about-us-text-wrapper'>
                            <p className='text'> {languageType === "Eng" ? "Eliot & I met in NYC after undergrad and built our relationship around restaurants in the city. We were constantly looking for the very best places, but we struggled to find reliable reviews and a good place to track our adventures." :
                                "التقيت أنا وإليوت في مدينة نيويورك بعد التخرج من الجامعة وقمنا ببناء علاقتنا حول المطاعم في المدينة. كنا نبحث باستمرار عن أفضل الأماكن، لكننا ناضلنا للعثور على تقييمات موثوقة ومكان جيد لتتبع مغامراتنا."}</p>
                            <p className='text'>
                                {languageType === "Eng" ? "Our journey brought us to Harvard Business School where we were determined to build a solution that allowed food lovers to consistently find and track the best restaurants. We envisioned a product where you no longer had to search--one that knew your tastes and told you the places that you would love at the click of a button! From a simple idea to revolutionizing event planning, our story is one of passion and dedication. We created a platform to simplify buffet, flower, and manpower bookings, empowering you to craft unforgettable moments effortlessly. At the heart of our journey is the belief that organizing events should be stress-free, enjoyable, and personalized to your unique vision."
                                    : "قادتنا رحلتنا إلى كلية هارفارد للأعمال حيث كنا مصممين على بناء حل يسمح لمحبي الطعام بالعثور على أفضل المطاعم وتتبعها باستمرار. لقد تصورنا منتجًا لم تعد بحاجة إلى البحث فيه - منتج يعرف أذواقك ويخبرك بالأماكن التي تحبها بنقرة زر واحدة! من فكرة بسيطة إلى إحداث ثورة في تخطيط الأحداث، قصتنا هي قصة شغف وتفاني. لقد أنشأنا منصة لتبسيط حجوزات البوفيه والزهور والقوى العاملة، مما يمكّنك من صياغة لحظات لا تنسى دون عناء. الإيمان هو جوهر رحلتنا أن تنظيم الأحداث يجب أن يكون خاليًا من التوتر وممتعًا ومخصصًا لرؤيتك الفريدة."}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2 className='q_and_a-heading text-center'> {languageType === "Eng" ? "Frequently Asked Questions" : "الأسئلة المتداولة"}</h2>
                    <div className='q_and_a-wrapper mt-5'>
                        <div>
                            <div className="accordion" id="accordionExample">
                                {/* Item 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            {languageType === "Eng" ? "What services can I book on this platform?" : "ما هي الخدمات التي يمكنني حجزها على هذه المنصة؟"}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {languageType === "Eng" ?
                                                (
                                                    <>
                                                        You can reach us through our contact form on our website or by emailing us at <b>hello@sofrati</b>. We typically respond within 24 hours.
                                                    </>
                                                )
                                                : (
                                                    <>
                                                        يمكنك التواصل معنا من خلال نموذج الاتصال الخاص بنا الموجود على موقعنا الإلكتروني أو عن طريق مراسلتنا عبر البريد الإلكتروني على <b>hello@sofrati</b>. نرد عادةً خلال 24 ساعة.
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            {languageType === "Eng" ? " How do I create an account?" : "كيف أقوم بإنشاء حساب؟"}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {languageType === "Eng" ?
                                                (
                                                    <>
                                                        You can reach us through our contact form on our website or by emailing us at <b>hello@sofrati</b>. We typically respond within 24 hours.
                                                    </>
                                                )
                                                : (
                                                    <>
                                                        يمكنك التواصل معنا من خلال نموذج الاتصال الخاص بنا الموجود على موقعنا الإلكتروني أو عن طريق مراسلتنا عبر البريد الإلكتروني على <b>hello@sofrati</b>. نرد عادةً خلال 24 ساعة.
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                             {languageType === "Eng" ? "What payment methods are available?" : "ما هي طرق الدفع المتاحة؟"}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {languageType === "Eng" ?
                                                (
                                                    <>
                                                        You can reach us through our contact form on our website or by emailing us at <b>hello@sofrati</b>. We typically respond within 24 hours.
                                                    </>
                                                )
                                                : (
                                                    <>
                                                        يمكنك التواصل معنا من خلال نموذج الاتصال الخاص بنا الموجود على موقعنا الإلكتروني أو عن طريق مراسلتنا عبر البريد الإلكتروني على <b>hello@sofrati</b>. نرد عادةً خلال 24 ساعة.
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                </div>

                                {/* Item 4 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                             {languageType === "Eng" ? "Can I leave reviews for the services I booked?" : "هل يمكنني ترك تعليقات عن الخدمات التي حجزتها؟"}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {languageType === "Eng" ?
                                                (
                                                    <>
                                                        You can reach us through our contact form on our website or by emailing us at <b>hello@sofrati</b>. We typically respond within 24 hours.
                                                    </>
                                                )
                                                : (
                                                    <>
                                                        يمكنك التواصل معنا من خلال نموذج الاتصال الخاص بنا الموجود على موقعنا الإلكتروني أو عن طريق مراسلتنا عبر البريد الإلكتروني على <b>hello@sofrati</b>. نرد عادةً خلال 24 ساعة.
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                </div>

                                {/* Item 5 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                             {languageType === "Eng" ? "How can I contact customer support?" : "كيف يمكنني الاتصال بدعم العملاء؟"}
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {languageType === "Eng" ?
                                                (
                                                    <>
                                                        You can reach us through our contact form on our website or by emailing us at <b>hello@sofrati</b>. We typically respond within 24 hours.
                                                    </>
                                                )
                                                : (
                                                    <>
                                                        يمكنك التواصل معنا من خلال نموذج الاتصال الخاص بنا الموجود على موقعنا الإلكتروني أو عن طريق مراسلتنا عبر البريد الإلكتروني على <b>hello@sofrati</b>. نرد عادةً خلال 24 ساعة.
                                                    </>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
