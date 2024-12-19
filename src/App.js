import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fontsource/poppins';
import '@fontsource/poppins/300.css'; // Light
import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/700.css'; // Bold
// import "@fontsource/montserrat"; // Defaults to weight 400
// import "@fontsource/montserrat/400.css"; // Specify weight
// import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import './App.css';
import './responsive.css';
import Header from './SheardCompoents/Header';
import Footer from './SheardCompoents/Footer';
import AllRoutes from './AllRoutes';
import { createContext, useEffect, useState } from 'react';

// Create the context outside of the component function
export const LanguageContext = createContext();

function App() {
  const [languageType, setLanguageType] = useState('');

  useEffect(() => {
    const updateLanguageType = () => {
      const bodyClassList = document.body.classList;
      if (bodyClassList.contains('Eng')) {
        setLanguageType('Eng');
      } else {
        setLanguageType('');
      }
    };
    const observer = new MutationObserver(updateLanguageType);

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    updateLanguageType();

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageContext.Provider value={{ languageType, setLanguageType }}>
      <div className="container">
        <Header />
        <AllRoutes />
      </div>
      <Footer />
    </LanguageContext.Provider>
  );
}

export default App;
