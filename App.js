import './App.css';
import { About, Projects, Contact, Skills, Testimonials } from './components';

function App() {
  return (
    <div className="App">
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact />
    </div>
  );
}

export default App;
