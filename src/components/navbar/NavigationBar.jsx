import { useState } from 'react';
import 'flowbite';
import { NavLink } from 'react-router-dom';
import LogoWebsite from '/src/assets/image-logo.png';
import IconMenu from '../icons/IconMenu';
import IconTelephone from '../icons/IconTelephone';
import NavLinkItem from './NavLinkItem';

const NavigationBar = () => {

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
      <nav className="fixed w-full z-20 top-0 start-0 backdrop-blur">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:py-4 lg:px-20">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={LogoWebsite} className="h-16" alt="logo del sitio web" />
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="flex items-center text-white  focus:outline-none font-bold rounded-lg text-sm  text-center border border-purple-600 p-1">
                <span className='bg-violet-700 hover:bg-violet-800 px-4 py-2 rounded-md text-white'><IconTelephone/></span><span className='px-2'>+57 3127393740</span>
              </button>
              <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-black focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <IconMenu/>
              </button>
          </div>
          <div className={`per items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuVisible ? '' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit text-black">
              <NavLinkItem to="/" text="Inicio" />
              <NavLinkItem to="/about" text="Sobre Mí"  />
              <NavLinkItem to="/proyectos" text="Proyectos" />
              <NavLinkItem to="/blog" text="Blog" />
              <NavLinkItem to="/contacto" text="contacto" />
            </ul>
          </div>
        </div>
      </nav>
  );
}
export default NavigationBar;