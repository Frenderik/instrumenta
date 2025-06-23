
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Create floating animation elements
    const createFloatingElements = () => {
      const container = document.querySelector('.floating-container');
      if (!container) return;

      // Clear existing elements
      container.innerHTML = '';

      // Create multiple floating elements
      for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        // Random positioning
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 3 + 's';
        element.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        // Random sizes
        const size = Math.random() * 40 + 20;
        element.style.width = size + 'px';
        element.style.height = size + 'px';
        
        container.appendChild(element);
      }
    };

    createFloatingElements();

    // Parallax scrolling effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.hero-bg');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      {/* Background Image with Overlay */}
      <div 
        className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      ></div>
      
      {/* Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-600/85"></div>
      
      {/* Floating Animation Container */}
      <div className="floating-container absolute inset-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <i className="fas fa-hands text-6xl text-blue-300 mb-6 animate-pulse drop-shadow-lg"></i>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          <span className="text-blue-300">Instrumate</span> Africa
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Educational toolkit that assists learners with hearing disabilities, 
          bringing <span className="text-blue-300 font-semibold">inclusivity</span> to the education sector
        </p>
        
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-blue-300/30"
          >
            <i className="fas fa-rocket mr-2"></i>
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-300 text-blue-100 hover:bg-blue-300/20 backdrop-blur-sm px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            <i className="fas fa-info-circle mr-2"></i>
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <i className="fas fa-chevron-down text-blue-300 text-2xl drop-shadow-lg"></i>
        </div>
      </div>

      <style jsx>{`
        .floating-element {
          position: absolute;
          background: rgba(147, 197, 253, 0.1);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
          backdrop-filter: blur(1px);
          border: 1px solid rgba(147, 197, 253, 0.2);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .hero-bg {
          transition: transform 0.1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
