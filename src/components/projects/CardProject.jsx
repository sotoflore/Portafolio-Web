import IconGoogle from '../icons/IconGoogle';

const CardProject = ({ imageUrl, title, description, projectLink }) => {
    return (
        <div className='md:w-1/2 lg:w-1/3 group p-3'>
            <div className="h-full bg-white shadow-3xl transition duration-400 rounded-2xl overflow-hidden">
                <img className="p-2.5 lg:h-48 md:h-36 w-full object-cover object-center rounded-2xl transition duration-300 transform group-hover:scale-110" src={imageUrl} alt="imagen de los proyectos" />
                <div className="p-6">
                    <h3 className="text-start text-lg font-bold text-cyan-700 mb-3 transition duration-500 group-hover:text-purple-600 group-hover:font-bold">{title}</h3>
                    <p className="text-start leading-relaxed mb-3 text-gray-600">{description}</p>
                    <a href={projectLink} className="text-white md:mb-2 lg:mb-0 bg-black shadow-3xl hover:bg-gray-800 rounded-lg px-5 py-1.5 inline-flex items-center justify-center border-0 w-full" target="_blank" rel="noopener noreferrer"><IconGoogle/><span className='ps-1'> ver proyecto</span></a>
                </div>
            </div>
        </div>
    );
};
export default CardProject;