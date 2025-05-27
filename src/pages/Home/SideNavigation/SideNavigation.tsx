
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {  Events, scrollSpy, scroller } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface MousePosition {
  x: number;
  y: number;
}

interface NavItem {
  name: string;
  id: string;
  offset: number;
}

interface TiltEffect {
  x: number;
  y: number;
}

const SideNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});
  
  // Using useMemo to avoid unnecessary re-creations
  const navItems = useMemo<NavItem[]>(() => [
    // { name: 'hero', id: 'hero', offset: -50 },
    { name: 'Expertise', id: 'about', offset: -50 },
    { name: 'Gallery', id: 'people', offset: -50 },
    { name: 'Thought Leadership', id: 'news', offset: -50 },
    { name: 'Legacy', id: 'legacy', offset: -50 }
  ], []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
    });

    // Register scroll events with rest parameters
    Events.scrollEvent.register('begin', (...params) => {
      console.log("begin", params);
    });

    Events.scrollEvent.register('end', (...params) => {
      console.log("end", params);
    });

    // Add scrollspy
    scrollSpy.update();
    
    // Show navigation after a short delay for entrance animation
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    // Cache section refs
    navItems.forEach(item => {
      sectionRefs.current[item.id] = document.getElementById(item.id);
    });

    // Setup listeners for scroll sections
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      
      // Find which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    // Mouse move handler for 3D effect
    const handleMouseMove = (e: MouseEvent): void => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setMousePosition({ x, y });
      }
    };

    // Resize handler with proper type
    const handleResize = (): void => {
      AOS.refresh();
      scrollSpy.update();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleScroll();

    // Cleanup event listeners
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [navItems]); // Added navItems to dependency array

  const scrollToSection = (id: string): void => {
    // Add a visual pulse effect to the target section
    const targetSection = sectionRefs.current[id];
    if (targetSection) {
      targetSection.classList.add('pulse-highlight');
      setTimeout(() => {
        targetSection.classList.remove('pulse-highlight');
      }, 1500);
    }
    
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50
    });
    
    // Refresh AOS animations in the target section
    setTimeout(() => {
      AOS.refresh();
    }, 810);
  };

  // Calculate 3D tilt effect based on mouse position
  const calculateTilt = (): TiltEffect => {
    if (!navRef.current || !isHovering) return { x: 0, y: 0 };
    
    const rect = navRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt based on mouse position relative to center
    const tiltX = ((mousePosition.y - centerY) / centerY) * 5; // Max 5 degrees
    const tiltY = ((centerX - mousePosition.x) / centerX) * 5; // Max 5 degrees
    
    return { x: tiltX, y: tiltY };
  };
  
  const tilt = calculateTilt();

  return (
    <div 
      ref={navRef}
      className={`fixed right-12 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        perspective: '1000px'
      }}
    >
      {/* 3D Tilt Container */}
      <div 
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Glass effect background */}
        <div 
          className={`absolute -inset-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-500 ${isHovering ? 'opacity-80 scale-105' : 'opacity-0'}`}
          style={{ transform: 'translateZ(-10px)' }}
        ></div>
        
        {/* Glowing accent line */}
        <div 
          className={`absolute -left-4 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            background: 'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
            transform: 'translateZ(5px)'
          }}
        ></div>
        
        <div className="flex flex-col items-end space-y-8 py-4">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center cursor-pointer group transition-all duration-500 ease-out
                ${activeSection === item.id ? 'scale-110' : 'hover:scale-105'}`}
              onClick={() => scrollToSection(item.id)}
              style={{
                transform: `translateZ(${activeSection === item.id ? 20 : 10}px)`,
                opacity: 0,
                animation: isVisible ? `fadeSlideIn 0.6s ${1200 + (index * 150)}ms forwards` : 'none'
              }}
            >
              <span 
                className={`mr-3 text-lg font-medium transition-all duration-300 relative
                  ${activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-orange-400 group-hover:text-gray-900'}`}
              >
                {item.name}
                
                {/* Animated underline effect */}
                <span 
                  className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-500 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ 
                    boxShadow: activeSection === item.id ? '0 0 5px rgba(59, 130, 246, 0.7)' : 'none',
                    transform: 'translateZ(5px)'
                  }}
                ></span>
              </span>
              
              <div className="relative" style={{ transform: 'translateZ(15px)' }}>
                <div 
                  className={`h-4 w-4 rounded-full border-2 transition-all duration-300
                    ${activeSection === item.id 
                      ? 'border-blue-600 bg-blue-600' 
                      : 'border-pink-400 group-hover:border-gray-600'}`}
                >
                  {activeSection === item.id && (
                    <>
                      {/* Inner dot with pulse animation */}
                      <div className="absolute inset-0.5 rounded-full bg-white"></div>
                      
                      {/* Pulse effect for active dot */}
                      <span className="absolute -inset-2 rounded-full border border-blue-400 scale-0 animate-ping opacity-70"></span>
                      <span className="absolute -inset-3 rounded-full border border-blue-300 scale-0 animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></span>
                      
                      {/* Glow effect */}
                      <span className="absolute -inset-2 rounded-full opacity-70" style={{ 
                        boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.6)',
                        animation: 'glowing 2s infinite alternate' 
                      }}></span>
                    </>
                  )}
                </div>
                
                {/* Connection line with animated gradient */}
                {index < navItems.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-px h-8 -translate-x-1/2 overflow-hidden">
                    <div className={`w-full h-full ${activeSection === item.id || activeSection === navItems[index + 1].id ? 'animate-gradientFlow' : ''}`} style={{
                      background: activeSection === item.id || activeSection === navItems[index + 1].id
                        ? 'linear-gradient(to bottom, rgba(59, 130, 246, 0.8), rgba(209, 213, 219, 0.3))'
                        : 'linear-gradient(to bottom, rgba(209, 213, 219, 0.8), rgba(209, 213, 219, 0.3))'
                    }}></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick scroll to top button */}
      <div 
        className="mt-12 flex justify-center cursor-pointer transition-all duration-300 hover:scale-110"
        onClick={() => scrollToSection('hero')}
        style={{
          opacity: 0,
          animation: isVisible ? 'fadeSlideIn 0.6s 1800ms forwards' : 'none',
          transform: 'translateZ(5px)'
        }}
      >
        {/* Scroll to top button is commented out in the original code */}
        {/* <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center group hover:bg-blue-600 transition-colors duration-300 relative overflow-hidden">
          <div className="absolute inset-0 scale-0 rounded-full bg-blue-200 opacity-30 group-hover:animate-ripple"></div>
          
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19L12 5M12 5L5 12M12 5L19 12" stroke="#004580" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
          </svg>
        </div> */}
      </div>
      
      {/* Custom animation styles */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes glowing {
          0% { opacity: 0.4; }
          100% { opacity: 0.8; }
        }
        
        @keyframes gradientFlow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .animate-ripple {
          animation: ripple 0.8s ease-out;
        }
        
        .animate-gradientFlow {
          animation: gradientFlow 2s infinite linear;
        }
        
        .pulse-highlight {
          animation: sectionPulse 1.5s ease-out;
        }
        
        @keyframes sectionPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.2);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default SideNavigation;