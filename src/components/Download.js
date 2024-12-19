import React, { useContext } from 'react'
import logoWhite from '../assets/img/logo-white.png'
import PlayIcon from '../assets/img/google-play.png'
import AppleIcon from '../assets/img/apple-icon.png'
import { LanguageContext } from '../App'

const Download = () => {
    const { languageType } = useContext(LanguageContext);

  return (
    <>
      <div className='download-wrapper'>
        <div className='text-center'>
            <div className='logo-wrapper mt-md-5 mx-auto mb-md-5'>
                <img src={logoWhite} className='w-100 h-100'/>
            </div>
            <div className='mt-5'>
                <button className='download-btn-full'>
                    <img src={AppleIcon}/>
                    {languageType === "Eng" ? "Download on the App Store" : "قم بالتنزيل على متجر التطبيقات"}
                </button>
                <button className='download-btn-full'>
                    <img src={PlayIcon} />
                    {languageType === "Eng" ? "Download on Google Play" : "تحميل على جوجل بلاي"}
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Download
