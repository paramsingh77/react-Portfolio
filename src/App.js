import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Work from './components/Work';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
