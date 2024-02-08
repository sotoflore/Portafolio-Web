import IconGoogle from '../icons/IconGoogle';

const CardProject = ({ imageUrl, title, description, projectLink }) => {
    return (
        <div className='p-4 md:w-1/2 lg:w-1/3 group'>
            <div className="h-full bg-gradient-to-r from-indigo-500 border-indigo-900 transition duration-400 hover:bg-indigo-900 rounded-2xl overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center rounded-b-xl transition duration-300 transform group-hover:scale-105" src={imageUrl} alt="imagen de los proyectos" />
                <div className="p-6">
                    <h3 className="text-start text-lg font-bold text-white mb-3 transition duration-500 group-hover:text-white group-hover:font-bold">{title}</h3>
                    <p className="text-start leading-relaxed mb-3 text-gray-200">{description}</p>
                    <a href={projectLink} className="text-gray-50 md:mb-2 lg:mb-0 bg-gray-900 hover:bg-gray-800 rounded-lg px-5 py-1.5 inline-flex items-center justify-center border border-gray-600 w-full" target="_blank" rel="noopener noreferrer"><IconGoogle/><span className='ps-1'> ver proyecto</span></a>
                </div>
            </div>
        </div>
    );
};
export default CardProject;