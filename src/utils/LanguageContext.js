import { createContext, useContext, useState, useEffect} from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if(!context){
       throw new Error ('useLanguage must be used with in Language Provider');
    }
    return context;
}

export const LanguageProvider = ({children}) => {

    const storedLanguage = localStorage.getItem('selectedLanguage');
    const [language, setLanguage] = useState(storedLanguage || 'en');

    const changeLanguage = (newlang) => {
         setLanguage(newlang);
    };
    
    useEffect(() => {
        localStorage.setItem('selectedLanguage', language);
      }, [language]);

    return (
        <LanguageContext.Provider value={{language,changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );

}