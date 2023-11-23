import { NavLink } from "react-router-dom";
import { useI18nMode } from "../context/I18nModeContext";
import { useEffect, useState } from "react";
import { Route } from "../types/Route";



async function getLinks(lang:string): Promise<Route[]>{
  if(lang === 'EN'){
    const tempo = await import('../data/en/routes');
    return tempo.links
  }
  else {
    const tempo = await import('../data/fr/routes');
    return tempo.links
  }
}

const Navbar = () => {
  const {lang, setLangMode} = useI18nMode()
  const [links, setLinks] = useState([] as Route[])
  useEffect(
    function(){
      getLinks(lang).then((data: Route[]) => setLinks(data));
    }

  , [lang]);

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">LFA</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {
          links.map((link, index) => (
            <NavLink
              to={link.route}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              key={index}
            >
               {link.label}
            </NavLink>
          ))
        }

        | 
        <p>
        <a onClick={() => setLangMode('FR')}
            className={`${lang === 'FR' ? "text-blue-500" : "text-black"} cursor-pointer`}>
          FR
        </a> -{' '}
        <a onClick={() => setLangMode('EN')} 
            className={`${lang === 'EN' ? "text-blue-500" : "text-black"} cursor-pointer`}
        >
            EN
          </a>

        </p>
      </nav>
    </header>
  );
};

export default Navbar;
