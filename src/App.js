
import './App.css';
import Aim from './components/Aim';
import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Jobs from './components/Jobs';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='' exact element={<Home />} />
        <Route path='aim' element={<Aim />} />
        <Route path='services' element={<Services />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='terms' element={<Terms />} />
        <Route path='privacy' element={<Privacy />} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
