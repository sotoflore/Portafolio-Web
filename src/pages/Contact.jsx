import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore/lite';
import Swal from "sweetalert2";
import ImageContact from '../assets/imagen-section-contact.png'

const Contact = () => {

      const handleSubmit = async (e) =>{
        e.preventDefault();
        const userRef = collection(db, "users");
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const asunto = e.target.asunto.value;
        const message = e.target.message.value;

        try {
          await addDoc(userRef, {
            nombre: nombre,
            email: email,
            asunto: asunto,
            message: message
          });
          Swal.fire({
            titleText: "Datos Enviados correctamente",
            text: "Pronto nos comunicaremos con usted",
            icon: "success",
            position:"center",
            heightAuto:"false",
          });
      } catch (error) {
        console.error("Error writing document: ", error);
      }
      e.target.reset();
    };

  return (
    <section className="py-10 md:mt-32 my-20 flex items-center justify-center flex-col mx-6 md:mx-7 lg:mx-0">
        <h1 className="w-full mb-10 py-4 text-2xl font-bold text-cyan-800 md:text-5xl text-center bg-cyan-100 border-2 border-cyan-600 rounded-lg">Hablemos 🖐️</h1>
        <form onSubmit={handleSubmit} className="w-full bg-white shadow-3xl rounded-xl p-10">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name='nombre' id="nombre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                <label htmlFor="nombre" className="peer-focus:font-medium absolute text-gray-900 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre y Apellidos</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name='email' id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-gray-900 font-bold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Corre Electrónico</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name='asunto' id="asunto" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="asunto" className="peer-focus:font-medium absolute  text-gray-900 font-bold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Asunto</label>
            </div>
            <div className="mx-auto">
              <label htmlFor="message" className="block mb-2 text-gray-900 font-bold">Mensaje</label>
              <textarea name='message' id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500" placeholder="Escribe un mensaje..." required></textarea>
            </div>
            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none rounded-lg text-sm w-full px-5 py-2.5 text-center mt-5">Enviar</button>
        </form>
    </section>
  )
}
export default Contact;
