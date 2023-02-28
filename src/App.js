import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import Vector from './components/Vector';
// import Hero from './components/Hero'

function App() {
  return (
    <>
      <div className="App">
        <Vector />
        <NavBar />
        {/* <Hero /> */}
        <div className='container mt-5'>
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
