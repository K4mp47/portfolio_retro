import './App.css';
import Model13D from './components/3DModel_2';
import About from './components/About';
import Projects from './components/Projects';
import Title from './components/Title';
import Face from './components/Face';

function App() {
  return (
    <div className="App">
      <Model13D/>
      <Title/> 
      <Face/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
