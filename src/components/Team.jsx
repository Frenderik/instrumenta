import AnimatedCard from "./ui/AnimatedCard";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Lawrence Nderu",
      role: "Project PI",
      bio: "Passionate about inclusive technology and leading our technical vision",
      linkedin: "https://linkedin.com/in/dr-lawrence-nderu",
      github: "https://github.com/magvtv/39_Lawrence",
      avatar: "fas fa-user-tie"
    },
    {
      name: "Francis Mung'ang'u",
      role: "Team Lead & Full-Stack Developer",
      bio: "Expert in computer vision and sign language recognition algorithms",
      linkedin: "https://linkedin.com/in/francis-mung-ang-u-27b1272a6",
      github: "https://github.com/FRANCISMUNGANGU",
      avatar: "fas fa-brain"
    },
    {
      name: "Nevean Adhiambo",
      role: "UX/UI Designer",
      bio: "Creating intuitive and accessible user experiences for all learners",
      linkedin: "https://linkedin.com/in/nevean-adhiambo-37131b288",
      github: "https://github.com/neveanadhis",
      avatar: "fas fa-palette"
    },
    {
      name: "John Njuki",
      role: "Backend Developer",
      bio: "Expert in backend development and database management",
      linkedin: "https://linkedin.com/in/jay-njuqy-26b6b0295",
      github: "https://github.com/bitflaw",
      avatar: "fas fa-graduation-cap"
    },
    {
      name: "Mary Muragu",
      role: "Backend Developer",
      bio: "Building robust backend systems and APIs for our platform",
      linkedin: "https://linkedin.com/in/mary-muragu-016482309",
      github: "https://github.com/Mmuragu",
      avatar: "fas fa-mobile-alt"
    },
    {
      name: "Baruch Marambi",
      role: "Frontend Developer",
      bio: "Building intuitive and responsive user interfaces for our platform",
      linkedin: "https://linkedin.com/in/baruch-marambi",
      github: "https://github.com/Marambii",
      avatar: "fas fa-code"
    }
  ];

  return (
    <section className="py-20 px-4 bg-cyan-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-cyan-300">Team</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto mb-8"></div>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            A diverse group of passionate professionals united by our mission to make education accessible for everyone
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <AnimatedCard 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
              delay={index * 0.15}
              initialRotate={index % 2 === 0 ? -6 : 6}
            >
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-8 text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:animate-pulse">
                  <i className={`${member.avatar} text-cyan-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-100 font-semibold">{member.role}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 transform hover:scale-110"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
        >
          <div className="bg-cyan-600 text-white p-8 rounded-2xl shadow-lg">
            <i className="fas fa-handshake text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              We're always looking for passionate individuals who share our vision of inclusive education. 
              Whether you're a developer, educator, or advocate, there's a place for you in our community.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              <i className="fas fa-envelope mr-2"></i>
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
