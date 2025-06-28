import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import TargetUsers from '../components/TargetUsers';
import Team from '../components/Team';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Hero />
      <About />
      <Features />
      <TargetUsers />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
