import { useState, useEffect } from "react";
import IconGitHub from "./icons/IconGitHub";
import IconLinkedin from "./icons/IconLinkedin";
import IconWhatsapp from "./icons/IconWhatsapp";
import imageFooter from "../assets/image-section-home.png";

const Footer = () => {

  const [annoActual, setAnnoActual] = useState(new Date().getFullYear());

    useEffect(() => {
        setAnnoActual(new Date().getFullYear());
    }, []);

  return (
      <footer className="text-gray-600 md:px-16 bg-gray-950">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={imageFooter} className="w-20" alt="imagen de francisco soto" />
            <span className="ml-3 text-white leading-3">
              Francisco Soto Flores <br />
              <span className="text-gray-400 italic text-sm">Desarrollador Web</span>
            </span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">&copy; {annoActual}  —
            <a href="https://www.linkedin.com/in/francisco-sf/" className="text-gray-400 ml-1" rel="noopener noreferrer" target="_blank">@franciscoSotoFlores</a>
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://wa.me/+573127393740" className="text-gray-500 text-2xl border rounded-lg p-2.5 bg-gray-800 border-gray-700 hover:bg-gray-700" rel="noopener noreferrer" target="_blank"><IconWhatsapp/></a>
            <a href="https://www.linkedin.com/in/francisco-sf/" className="ml-3 text-2xl border rounded-lg p-2.5 bg-gray-800 border-gray-700 hover:bg-gray-700" rel="noopener noreferrer" target="_blank"><IconLinkedin/></a>
            <a href="https://github.com/sotoflore?tab=repositories" className="ml-3 text-2xl text-white border rounded-lg p-2.5 bg-gray-800 border-gray-700 hover:bg-gray-700" rel="noopener noreferrer" target="_blank"><IconGitHub/></a>
          </div>
        </div>
      </footer>
  );
};
export default Footer;