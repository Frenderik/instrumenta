
const Features = () => {
  const features = [
    {
      icon: "fas fa-hand-paper",
      title: "Sign-to-Text",
      description: "Advanced recognition technology that converts sign language gestures into readable text in real-time.",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: "fas fa-volume-up",
      title: "Sign-to-Speech",
      description: "Seamlessly transform sign language into spoken words, enabling clear communication across different mediums.",
      color: "from-cyan-600 to-purple-500"
    },
    {
      icon: "fas fa-user-friends",
      title: "KSL Avatars",
      description: "Interactive Kenyan Sign Language avatars that demonstrate proper signing techniques and provide visual learning support.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-cyan-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful <span className="text-cyan-300">Features</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto mb-8"></div>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Cutting-edge technology designed to break down communication barriers and create an inclusive learning environment
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group"
            >
              <div className={`bg-gradient-to-r ${feature.color} p-8 text-center`}>
                <i className={`${feature.icon} text-white text-5xl mb-4 group-hover:animate-bounce`}></i>
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed text-center">
                  {feature.description}
                </p>
                
                <div className="mt-6 text-center">
                  <button className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-300">
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-cyan-600 text-white p-8 rounded-2xl shadow-lg">
            <i className="fas fa-lightbulb text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Innovation at Its Core</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Our features are built with the latest AI and machine learning technologies, 
              ensuring accurate, fast, and reliable assistance for all users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
