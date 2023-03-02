import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Vector from './components/Vector';
import Hero from './components/Hero'
import Services from './components/page/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Client from './components/common/Client';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Vector />
        <NavBar />
        <Hero />
        <div className='container'>
          <About />
          <Services />
          <Team />
          <Projects />
          <Client />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
