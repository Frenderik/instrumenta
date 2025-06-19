
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <i className="fas fa-hands text-6xl text-cyan-600 mb-6 animate-pulse"></i>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-cyan-600">Instrumate</span> Africa
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Educational toolkit that assists learners with hearing disabilities, 
          bringing <span className="text-cyan-600 font-semibold">inclusivity</span> to the education sector
        </p>
        
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Button 
            size="lg" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <i className="fas fa-rocket mr-2"></i>
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            <i className="fas fa-info-circle mr-2"></i>
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <i className="fas fa-chevron-down text-cyan-600 text-2xl"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
