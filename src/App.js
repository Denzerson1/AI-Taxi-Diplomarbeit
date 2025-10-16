
import './App.css'; // Assuming Tailwind is configured in index.css or via PostCSS

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Milestones from './components/Milestones';
import Progress from './components/Progress';
import Media from './components/Media';
import Imprint from './components/Imprint';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Milestones />
      <Progress />
      <Media />
      <Imprint />
      <Footer />
    </div>
  );
}

export default App;