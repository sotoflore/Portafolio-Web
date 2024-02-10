import CardProject from '../projects/CardProject';
import { NavLink } from 'react-router-dom';
import IconArrow from '../icons/IconArrow';

const Projects = () => {
    return (
        <section>
            <div className=" py-16 mx-auto text-center">
                <h2 className='text-3xl uppercase bg-clip-text md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-purple-700 mb-7'>últimos proyectos realizados</h2>
                <div className="flex flex-wrap mb-10">
                    <CardProject
                        imageUrl="https://i.postimg.cc/G2jdD0XR/proyecto-analytikacore.png"
                        title="Website AnalytikaCore"
                        description="Sitio web que ofrece servicios de consultoría en Data Analítica y brinda Desarrollo de Software."
                        projectLink="https://sotoflore.github.io/WebSite-AnalytikaCore/"
                    />
                    <CardProject
                        imageUrl="https://i.postimg.cc/Gh0C6YH9/proyecto-catalogo-en-linea.png"
                        title="Website Catálogo de Productos"
                        description="Tienda en línea de variedad de productos, esta implementado con React, Bootstrap, html5 y un archivo json para el almacenamiento de los productos."
                        projectLink="https://catalogo-online.netlify.app/" 
                    />
                    <CardProject
                        imageUrl="https://i.postimg.cc/HkfYD9rq/proyecto-colibrotech.png"
                        title="Website Colibrotech"
                        description="Sitio web que ofrece venta de libros de Ciencia de Datos, Ingeniería de Datos, Análisis de Datos y Data Management."
                        projectLink="https://sotoflore.github.io/WebSite-ColibroTech/"
                    />
                </div>
                <NavLink to="/proyectos" className="text-gray-50 font-bold bg-cyan-500 shadow-cyan-500/50 shadow-3xl focus:outline-none rounded-lg px-5 py-2.5 inline-flex items-center justify-center md:w-1/3"><span className='pe-1'>Ver más proyectos</span><IconArrow/></NavLink>
            </div>
        </section>  
    );
};
export default Projects;