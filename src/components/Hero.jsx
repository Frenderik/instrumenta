import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from "@/components/ui/button";

const floatingIcons = [
  "fas fa-graduation-cap", "fas fa-book", "fas fa-hand-sparkles", "fas fa-heart",
  "fas fa-users", "fas fa-globe-africa", "fas fa-lightbulb", "fas fa-comments",
  "fas fa-chalkboard-teacher", "fas fa-universal-access", "fas fa-language", "fas fa-laptop-code"
];

const NUM_FLOATING = 20;

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- TIMELINE ANIMATION ---
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-bg-overlay", { opacity: 0, duration: 1.2 })
        .from(titleRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
        }, "-=0.5")
        .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(buttonsRef.current.children, { y: 20, opacity: 0, stagger: 0.2, duration: 0.7 }, "-=0.5")
        .from(".floating-icon", {
          opacity: 0,
          scale: 0.5,
          stagger: 0.05,
          duration: 0.6
        }, "-=1");

      // --- MOUSE MOVE PARALLAX ---
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 40;
        const y = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(".hero-content", {
          x: -x * 0.5,
          y: -y * 0.5,
          duration: 1,
          ease: "power3.out"
        });
        gsap.to(".floating-icon", {
          x: (i) => -x * (i % 2 === 0 ? 0.8 : 1.2),
          y: (i) => -y * (i % 2 === 0 ? 0.8 : 1.2),
          duration: 1.5,
          ease: "power3.out"
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const titleText = "Instrumate Africa".split('');

  // Handler for Learn More
  const handleLearnMore = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 bg-gray-800">
      <div className="hero-bg-overlay absolute inset-0 bg-gradient-to-br from-cyan-900/70 via-cyan-800/60 to-cyan-700/75"></div>
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: NUM_FLOATING }).map((_, i) => (
          <i
            key={i}
            className={`floating-icon ${floatingIcons[i % floatingIcons.length]}`}
            style={{
              position: 'absolute',
              left: `${getRandom(5, 95)}%`,
              top: `${getRandom(5, 95)}%`,
              fontSize: `${getRandom(20, 40)}px`,
              color: 'rgba(207, 250, 254, 0.4)',
            }}
          />
        ))}
      </div>
      <div className="hero-content relative z-10 max-w-6xl mx-auto text-center">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          {titleText.map((char, index) => (
            <span key={index} style={{ display: 'inline-block', color: char === 'I' || char === 'A' ? '#67e8f9' : 'white' }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-cyan-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Educational toolkit that assists learners with hearing disabilities, 
          bringing <span className="text-cyan-300 font-semibold">inclusivity</span> to the education sector.
        </p>
        <div ref={buttonsRef} className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Button size="lg" className="gsap-button bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 text-lg rounded-full shadow-2xl border-2 border-cyan-300/30" onClick={() => setShowModal(true)}>
            <i className="fas fa-rocket mr-2"></i>Get Started
          </Button>
          <Button variant="outline" size="lg" className="gsap-button border-2 border-cyan-300 text-cyan-800 hover:bg-cyan-300/20 backdrop-blur-sm px-8 py-4 text-lg rounded-full" onClick={handleLearnMore}>
            <i className="fas fa-info-circle mr-2"></i>Learn More
          </Button>
        </div>
      </div>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-cyan-800">App In Progress</h2>
            <p className="text-gray-700 mb-6">The app is currently in progress. Please check back soon!</p>
            <Button onClick={() => setShowModal(false)} className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 rounded-full">Close</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
