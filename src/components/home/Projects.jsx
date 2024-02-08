import CardProject from '../projects/CardProject';
import { NavLink } from 'react-router-dom';
import IconArrow from '../icons/IconArrow';

const Projects = () => {
    return (
        <section className="md:px-20">
            <div className="container px-5 py-16 mx-auto text-center">
                <h2 className='text-3xl uppercase font-bold text-gray-50 mb-7'>últimos proyectos realizados</h2>
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
                        description="Sitio web que ofrece venta de libros de Ciencia de Datos, Ingeniería de Datos, Análisis de Datos y Data Management."
                        projectLink="https://catalogo-online.netlify.app/" 
                    />
                    <CardProject
                        imageUrl="https://i.postimg.cc/HkfYD9rq/proyecto-colibrotech.png"
                        title="Website Colibrotech"
                        description="Sitio web con experiencia en el mundo inmobiliario aliado en procesos de cartera y trámites de escrituración. Mediante procesos, operación y tecnología, administran cada uno de tus negocios automatizando, integrando y brindando una atención al cliente de calidad."
                        projectLink="https://sotoflore.github.io/WebSite-ColibroTech/"
                    />
                </div>
                <NavLink to="/proyectos" className="text-gray-50 border-2 border-purple-700 hover:shadow-purple-500/50 shadow-lg focus:outline-none rounded-lg px-5 py-2.5 text-center inline-flex items-center"><span className='pe-1'>Ver más proyectos</span><IconArrow/></NavLink>
            </div>
        </section>  
    );
};
export default Projects;