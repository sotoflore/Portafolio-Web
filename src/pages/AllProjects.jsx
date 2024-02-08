import React from 'react'
import CardProject from '../components/projects/CardProject';
import CallToAction from '../components/home/CallToAction';

const AllProjects = () => {
  return (
    <section>
        <div className="bg-center bg-no-repeat bg-[url('./assets/background-section-projects.jpg')] bg-gray-400 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-16">
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl pt-24">Mis Proyectos</h1>
                <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">
                  Cada proyecto representa un desafío único y una oportunidad para aprender y crecer. Desde desarrollo web hasta diseño de interfaces.
                </p>
            </div>
        </div>
        <div className="text-gray-600 body-font md:px-20">
            <div className="container px-5 py-16 mx-auto text-center">
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
                  <CardProject
                      imageUrl="https://i.postimg.cc/fLsMkWj5/proyecto-inversiones.png"
                      title="Website Inversiones SG"
                      description="Sitio web que ofrece servicios para la compra y venta de madera, esta implementado con HTML5, CSS3, Bootstrap y JavaScript."
                      projectLink="https://sotoflore.github.io/WebSite-InversionesSG/" 
                  />
                  <CardProject
                      imageUrl="https://i.postimg.cc/FK399kc7/proyecto-fiduto.png"
                      title="Website Fiduto"
                      description="Sitio web con experiencia en el mundo inmobiliario aliado en procesos de cartera y trámites de escrituración. Mediante procesos, operación y tecnología, administran cada uno de tus negocios automatizando, integrando y brindando una atención al cliente de calidad."
                      projectLink="https://sotoflore.github.io/Website-Fiduto/" 
                  />
              </div>
            </div>
        </div>
        <CallToAction/>  
    </section>
  )
}

export default AllProjects