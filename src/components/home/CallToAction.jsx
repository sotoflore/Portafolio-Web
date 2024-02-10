import IconArrow from '../icons/IconArrow'
import { NavLink } from 'react-router-dom'

const CallToAction = () => {
  return (
    <article className='text-center mx-5 md:mx-7 lg:mx-0'>
        <div className='w-full'>
            <div className='bg-cyan-100 border-2 border-cyan-700 transition duration-500 hover:border-cyan-900 py-8 mb-14 rounded-lg md:px-3 lg:px-0'>
              <h2 className='text-xl md:text-4xl text-cyan-700 font-bold'>¿Tienes algún proyecto en mente?</h2>
              <p className='text-lg md:text-2xl py-2 text-gray-800'>
                  ¡Solicita una cotización ahora!
              </p>
              <NavLink to="/contacto" className="inline-flex items-center text-white py-2 px-10 rounded text-lg  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none"><span className='pe-1'>Contactar</span><IconArrow/></NavLink>
            </div>
        </div>
    </article>
  )
}
export default CallToAction;