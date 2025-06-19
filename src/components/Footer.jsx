const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <i className="fas fa-hands text-cyan-400 text-3xl mr-3"></i>
              <h3 className="text-2xl font-bold">Instrumate Africa</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering learners with hearing disabilities through innovative educational technology 
              and creating truly inclusive learning environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-cyan-700 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Feedback</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2024 Instrumate Africa. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-xl">
              <i className="fas fa-heart text-red-400 text-2xl mb-2"></i>
              <p className="text-white font-semibold">
                Built with passion for inclusive education and equal opportunities for all learners
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
