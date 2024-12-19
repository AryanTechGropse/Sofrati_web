import React, { useContext } from 'react'
import { LanguageContext } from '../App';

const Help_and_Support = () => {
    const { languageType } = useContext(LanguageContext);
    return (
        <>
            <div className='help-and-support-wrapper mt-5 mb-5'>
                <div>
                    <div className='row justify-content-between w-100'>
                        <div className='col-md-10 col-10'>
                            <h1 className='heading'>
                                {languageType === "Eng" ?
                                    (
                                    <>
                                        Get in touch with us.
                                        We’re here to assist you.
                                    </>
                                    )
                                    :
                                    (
                                    <>
                                        تواصل معنا.
                                        نحن هنا لمساعدتك.
                                    </>
                                )}
                            </h1>
                        </div>
                        <div className='col-md-2 col-2'>
                            <div className="social-link-icon-wrapper">
                                <i class="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className="social-link-icon-wrapper">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div className="social-link-icon-wrapper">
                                <i class="fa-brands fa-x-twitter"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 w-100'>
                    <div className='col-md-4 col-12'>
                        <input className='custom-form-control' placeholder='Your Name' />
                    </div>
                    <div className='col-md-4 col-12'>
                        <input className='custom-form-control' placeholder='Email Address' />
                    </div>
                    <div className='col-md-4 col-12'>
                        <input className='custom-form-control' placeholder='Phone Number (optional)' />
                    </div>
                    <div className='col-12'>
                        <input className='custom-form-control' placeholder='Message' />
                    </div>
                    <div className='col-12 mt-5 ps-5'>
                        <button className='custom-btn'>Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help_and_Support
