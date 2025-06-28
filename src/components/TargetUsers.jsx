import AnimatedCard from "./ui/AnimatedCard";
import { motion } from "framer-motion";
import CountUpOnView from "./ui/CountUpOnView";

const TargetUsers = () => {
  const users = [
    {
      icon: "fas fa-deaf",
      title: "Deaf & Mute Learners",
      description: "Students who can benefit from enhanced communication tools and inclusive learning experiences",
      stats: "Primary Beneficiaries"
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Teachers",
      description: "Educators seeking to create more inclusive classrooms and effectively communicate with all students",
      stats: "Educational Partners"
    },
    {
      icon: "fas fa-school",
      title: "Educational Institutions",
      description: "Schools and organizations committed to providing equal learning opportunities for students with hearing disabilities",
      stats: "Institutional Support"
    }
  ];

  return (
    <section className="py-20 px-4 bg-cyan-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We <span className="text-cyan-300">Serve</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto mb-8"></div>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Empowering diverse communities in the education sector to create truly inclusive learning environments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {users.map((user, index) => (
            <AnimatedCard 
              key={index}
              className="text-center p-8 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              delay={index * 0.2}
            >
              <div className="bg-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i className={`${user.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{user.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{user.description}</p>
              
              <div className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {user.stats}
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <motion.div
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-white text-center shadow-2xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <i className="fas fa-users text-5xl mb-6"></i>
          <h3 className="text-3xl font-bold mb-4">Building an Inclusive Community</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            Our platform brings together learners, educators, and institutions in a collaborative 
            environment where communication barriers are eliminated and learning opportunities are maximized.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                <CountUpOnView target={100} />
              </div>
              <div className="text-cyan-100">Schools Interested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                <CountUpOnView target={500} />
              </div>
              <div className="text-cyan-100">Potential Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                <CountUpOnView target={50} />
              </div>
              <div className="text-cyan-100">Educators Engaged</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetUsers;
