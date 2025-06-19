
const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our <span className="text-cyan-600">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-cyan-50 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <i className="fas fa-bullseye text-cyan-600 text-3xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To bridge the communication gap in education by providing innovative, 
                accessible tools that empower learners with hearing disabilities to 
                fully participate in their educational journey.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-8 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-all duration-300">
              <i className="fas fa-graduation-cap text-white text-3xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">SDG 4 Alignment</h3>
              <p className="leading-relaxed">
                <strong>Quality Education:</strong> We're committed to ensuring inclusive 
                and equitable quality education and promoting lifelong learning 
                opportunities for all, especially those with hearing disabilities.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <i className="fas fa-heart text-red-500 text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact & Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Through technology and innovation, we envision a world where every learner, 
              regardless of their hearing ability, has access to quality education and 
              can communicate effectively in their learning environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
