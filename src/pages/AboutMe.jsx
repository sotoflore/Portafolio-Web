import imageFoto from '../assets/image-francisco-soto.jpg';
import CardSkill from '../components/About/CardSkill';
import ContactIcon from '../components/About/ContactIcon';
import ImageCerti from '../components/About/ImageCerti';
import LineStep from '../components/About/LineStep';
import SkillIcon from '../components/About/SkillIcon';
import StepNumber from '../components/About/StepNumber';
import TitleSkill from '../components/About/TitleSkill';
import IconEducation from '../components/icons/IconEducation';
import IconEmail from '../components/icons/IconEmail';
import IconSkill from '../components/icons/IconSkill';
import IconTelephone from '../components/icons/IconTelephone';
import IconWork from '../components/icons/IconWork';

import ImageCertificado1 from '../assets/certificaciones/imagen.jpg';
import ImageCertificado2 from '../assets/certificaciones/imagen1.jpg';
import ImageCertificado3 from '../assets/certificaciones/imagen2.jpg';
import ImageCertificado4 from '../assets/certificaciones/imagen3.jpg';
import ImageCertificado5 from '../assets/certificaciones/imagen4.jpg';
import ImageCertificado6 from '../assets/certificaciones/imagen5.jpg';

const AboutMe = () => {
    const listWebDevelopment = [
    {
      title: "Desarrollo Web",
      items: ["HTML5, CSS3, JavaScript","Sass, Bootstrap, Tailwind CSS, Material UI", "React"]
    }
  ];
  const listDataBase = [{ title: "Bases de Datos", items: ["SQL", "MySQl"] }];
  const listDesign = [{ title: "Diseño", items: ["Figma", "Canva"] }];
  const listVersionControl = [{ title: "Control de Versiones", items: ["Git", "GitHub"] }];

  return (
        <section className="mt-16">
            <div className="container py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex items-center justify-center rounded-lg h-64 bg-center bg-cover bg-[url('/src/assets/image-section-about.jpg')]">
                        <h1 className='text-2xl font-bold md:text-5xl uppercase bg-custom-background backdrop-blur py-5 px-10 text-white rounded-lg'>francisco soto flores</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 sm:pr-8 sm:py-8 px-10 md:px-10">
                        <img src={imageFoto} className='rounded-lg' alt="foto de francisco soto" />
                        <div className="flex flex-col text-center justify-center">
                            <h2 className="text-center font-bold mt-4 text-gray-50 text-lg">Desarrollador Web</h2>
                            <div className="self-center w-20 h-1 bg-purple-600 rounded mt-2 mb-4"></div>
                            <ContactIcon text="sotofloresfrancisco@gmail.com"><IconEmail/></ContactIcon>
                            <ContactIcon text="+57 3127393740"><IconTelephone/></ContactIcon>
                        </div>
                        </div>
                        <div className="sm:w-2/3  sm:py-8 pt-4 px-10 md:px-0 sm:mt-0 sm:text-left">
                            <p className="leading-relaxed text-lg mb-4 ps-1 text-white">
                                Soy Ingeniero de Telecomunicaciones
                                especializado en desarrollo web.
                                Mi enfoque se centra en la creación de soluciones web robustas, 
                                eficientes y elegantes que satisfagan las necesidades específicas 
                                de mis clientes. Desde el diseño hasta la implementación, estoy 
                                comprometido con la excelencia técnica y la satisfacción del cliente en 
                                cada paso del proceso.Además, estoy constantemente actualizando mis habilidades 
                                y explorando nuevas tecnologías para mantenerme al tanto de las últimas tendencias y 
                                mejores prácticas en el desarrollo web.
                            </p>
                            <div className="mt-20 lg:mt-10 md:px-10 lg:px-0">
                                <div className="flex relative py-10 sm:items-center">
                                    <LineStep/>
                                    <StepNumber number="1"/>
                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <SkillIcon>
                                        <IconEducation/>
                                    </SkillIcon>
                                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <TitleSkill title="educación"/>
                                        <p className="leading-relaxed text-white">Ingeniería de Telecomunicaciones</p>
                                        <p className="leading-relaxed text-gray-400">Universidad Pontificia Bolivariana</p>
                                        <p className="leading-relaxed text-gray-400">2018 - 2023 | Medellín, Colombia</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex relative pb-10 sm:items-center">
                                    <LineStep/>
                                    <StepNumber number="2"/>
                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <SkillIcon>
                                        <IconWork/>
                                    </SkillIcon>
                                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <TitleSkill title="experiencia"/>
                                        <p className="leading-relaxed text-white">Soporte Técnico 1° Nivel - Practicante TI | Arintia Group</p>
                                        <ul className='list-disc ps-5'>
                                            <li className='text-gray-400'>Diagnosticar y resolver problemas de hardware y software.</li>
                                            <li className='text-gray-400'>Instalar y configurar software.</li>
                                            <li className='text-gray-400'>Realizar mantenimiento preventivo de equipos cómputo.</li>
                                            <li className='text-gray-400'>Garantizar la seguridad de la información de la empresa.</li>
                                            <li className='text-gray-400'>Documentar los problemas comunes y las soluciones.</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="flex relative pb-10 sm:items-center">
                                    <LineStep/>
                                    <StepNumber number="3"/>
                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <SkillIcon>
                                        <IconSkill/>
                                    </SkillIcon>
                                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <TitleSkill title="conocimientos"/>
                                        <CardSkill lists={listWebDevelopment} />
                                        <CardSkill lists={listDataBase} />
                                        <CardSkill lists={listDesign } />
                                        <CardSkill lists={listVersionControl} />
                                    </div>
                                    </div>
                                </div>
                                <div className="flex relative pb-10 sm:items-center">
                                    <LineStep/>
                                    <StepNumber number="4"/>
                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                        <SkillIcon>
                                            <IconSkill/>
                                        </SkillIcon>
                                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                            <TitleSkill title="certificaciones"/>
                                            <div className='grid grid-cols-2 gap-4 mt-4'>
                                                <ImageCerti ImageCertificado={ImageCertificado1} href="https://www.udemy.com/certificate/UC-05415145-01b7-4b76-af2d-e2af9ecb4fa6/"/>
                                                <ImageCerti ImageCertificado={ImageCertificado2} href="https://www.udemy.com/certificate/UC-ce6c730e-0a74-49eb-a1f2-db2df5da66ae/"/>
                                                <ImageCerti ImageCertificado={ImageCertificado3} href="https://www.udemy.com/certificate/UC-3e2a9203-73a9-49ca-8198-ed83fab0aec4/"/>
                                                <ImageCerti ImageCertificado={ImageCertificado4} href="https://www.udemy.com/certificate/UC-3e11af2f-bbe6-47f9-80d8-d0ccbbe0c89c/"/>
                                                <ImageCerti ImageCertificado={ImageCertificado5} href="https://www.udemy.com/certificate/UC-280e8030-a6af-4083-b8a7-4b618fa6e83c/"/>
                                                <ImageCerti ImageCertificado={ImageCertificado6} href="https://www.udemy.com/certificate/UC-734cde36-ec7f-4b02-8fc3-d9617940bf0c/"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};
export default AboutMe;