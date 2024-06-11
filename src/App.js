import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './Components/NavBar';
import { Home } from './Components/Home';
import Skills from './Components/Skills';
import Timeline from './Components/Education';
import Carausol from './Components/Carausol';
import Contact from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {

  

  return (
    <>
    <Navbar />
    <main className="main">
      <Home />
    <Skills />
    <Carausol />
    <Timeline />
    <Contact />
    <Footer />
    </main>
    </>
  );
}

export default App;
