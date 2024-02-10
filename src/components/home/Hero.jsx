import { NavLink } from 'react-router-dom';
import ImageHome from '/src/assets/image-section-home.png';
import IconArrow from '../icons/IconArrow';
import IconDownload from '../icons/IconDownload';

const Hero = () => {
    const downloadCv = window.location.origin + '/CV_Francisco-Soto-Flores.pdf';

    return (
        <section className="mt-20 md:mt-10">
            <div className="mx-auto flex pl-5 py-24 md:flex-row flex-col items-center justify-center">
                <div className="lg:flex-grow w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start lg:text-left mb-16 md:mb-0 items-center">
                    <h1 className='text-gray-600 text-xl'>
                        Hola, soy Francisco Soto 🖐️<br/>
                        <span className='uppercase bg-clip-text text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-purple-700 sm:text-5xl'>desarrollador frontend</span>
                    </h1>
                    <p className="mt-3 mb-8 leading-relaxed text-gray-600">
                        Soy Ingeniero de Telecomunicaciones especializado en el
                        Diseño y Desarrollo de Interfaces de Usuario atractivas 
                        y funcionales para Aplicaciones Web.
                    </p>
                    <div className="flex justify-center">
                        <NavLink to="/contacto" className="inline-flex items-center text-white border-0 py-2 px-1.5 rounded text-sm bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none shadow-3xl shadow-cyan-800/80 sm:px-6 sm:text-lg"><span className='pe-1'>Contáctame</span><IconArrow/></NavLink>
                        <a href={downloadCv} download="/CV_Francisco-Soto-Flores.pdf" className="ml-4 inline-flex items-center text-gray-600 shadow-lg shadow-cyan-800/80 border-2 border-cyan-800 py-2 px-1.5 focus:outline-none rounded text-sm sm:px-6 sm:text-lg"><span className='pe-1'>Descargar CV</span><IconDownload/></a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full relative">
                    <div className='bg-custom rounded-full absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 blur-[130px]'></div>
                    <img className="object-cover object-center relative" alt="hero" src={ImageHome}/>
                </div>
            </div>
        </section>
    );
};
export default Hero;