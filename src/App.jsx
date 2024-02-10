import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavigationBar from './components/navbar/NavigationBar';
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import ScrollToTop from './components/scrollTo/ScrollToTop';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';

const App = () => {

  return (
    <>
      <NavigationBar/>
      <main className='lg:w-9/12 mx-auto'>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='/about' element={ <AboutMe/> }/>
          <Route path='/proyectos' element={ <AllProjects/> }/>
          <Route path='/blog' element={ <Blog/> }/>
          <Route path='/contacto' element={ <Contact/> }/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}
export default App;
