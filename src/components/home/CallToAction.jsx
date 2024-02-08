import IconArrow from '../icons/IconArrow'
import { NavLink } from 'react-router-dom'

const CallToAction = () => {
  return (
    <article className='text-center'>
        <div className='mx-10 md:mx-8 lg:px-20'>
            <div className='bg-gray-800 border border-gray-700 transition duration-500 hover:border-yellow-400 py-8 mb-14 rounded-lg md:px-3 lg:px-0'>
              <h2 className='text-2xl md:text-4xl text-white font-bold'>¿Tienes algún proyecto en mente?</h2>
              <p className='text-xl md:text-2xl py-2 text-white'>
                  ¡Solicita una cotización ahora!
              </p>
              <NavLink to="/contacto" className="inline-flex items-center text-black border-0 py-2 px-6 rounded text-lg bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-yellow-500/50 "><span className='pe-1'>Contactar</span><IconArrow/></NavLink>
            </div>
        </div>
    </article>
  )
}
export default CallToAction;