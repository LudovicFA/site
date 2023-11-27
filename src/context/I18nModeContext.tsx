import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";


type I18nContextType = {lang: "FR" | "EN", setLangMode: (lang:string) => void };
type PostsContextProviderProps = {
  children: JSX.Element | JSX.Element[]
}


const I18nContext = createContext<I18nContextType>({lang:'FR', setLangMode : () => {return}});

function I18nModeProvider({ children } : PostsContextProviderProps) {
  const [lang, setLang] = useLocalStorageState("FR", "lang");

  function setLangMode(lang:string) {
    setLang(lang);
  }

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLangMode,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

function useI18nMode() {
  const context = useContext(I18nContext);
  if (context === undefined)
    throw new Error("I18nContext was used outside of I18nModeProvider");
  return context;
}

export { I18nModeProvider, useI18nMode };
