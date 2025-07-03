import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Enhanced Animation Components
const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 0.8 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    up: {
      initial: { opacity: 0, y: 80, scale: 0.9 },
      animate: { opacity: 1, y: 0, scale: 1 }
    },
    left: {
      initial: { opacity: 0, x: -80, rotateY: -15 },
      animate: { opacity: 1, x: 0, rotateY: 0 }
    },
    right: {
      initial: { opacity: 0, x: 80, rotateY: 15 },
      animate: { opacity: 1, x: 0, rotateY: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.5, rotate: -10 },
      animate: { opacity: 1, scale: 1, rotate: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction].initial}
      animate={isInView ? variants[direction].animate : variants[direction].initial}
      transition={{ 
        duration, 
        ease: [0.25, 0.25, 0, 1], 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enhanced Skill Card Component
const SkillCard = ({ 
  icon, 
  title, 
  skills, 
  color = "blue",
  delay = 0 
}: { 
  icon: string; 
  title: string; 
  skills: string[]; 
  color?: string;
  delay?: number;
}) => {
  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
    emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30",
    purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
    yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",
    pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        y: -15, 
        scale: 1.05, 
        rotateY: 8,
        rotateX: 5,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative perspective-1000"
    >
      <div className={`
        relative bg-gradient-to-br from-dark-navy via-slate-gray to-dark-navy 
        p-8 rounded-3xl border ${colorClasses[color as keyof typeof colorClasses]} 
        skill-card-hover backdrop-blur-sm overflow-hidden transform-style-3d
      `}>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <motion.div 
            className="flex items-center mb-8"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} mr-5 group-hover:scale-110 transition-transform duration-300`}>
              <i className={`${icon} text-3xl`}></i>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: delay + (index * 0.1), 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30 transition-all duration-300 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  features, 
  status, 
  statusColor,
  buttonText,
  buttonColor,
  delay = 0
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  status: string;
  statusColor: string;
  buttonText: string;
  buttonColor: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    whileHover={{ 
      y: -12, 
      scale: 1.03,
      rotateY: 5,
      rotateX: 5,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }}
    className="group project-card-hover perspective-1000"
  >
    <div className="relative bg-gradient-to-br from-dark-navy to-slate-gray rounded-2xl border border-slate-700/50 overflow-hidden transform-style-3d">
      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Status Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
          className="absolute top-4 right-4"
        >
          <Badge className={`${statusColor} text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm`}>
            {status}
          </Badge>
        </motion.div>
      </div>
      
      <div className="p-8">
        <motion.h3 
          className="text-2xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.4 + (index * 0.1) }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Badge 
                variant="outline" 
                className="text-xs border-slate-600 text-slate-400 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 px-3 py-1 rounded-full"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
        
        {/* Features */}
        <ul className="text-sm text-slate-400 space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.5 + (index * 0.1) }}
              className="flex items-start gap-2 group-hover:text-slate-300 transition-colors duration-300"
            >
              <span className="text-blue-400 mt-1">•</span>
              {feature}
            </motion.li>
          ))}
        </ul>
        
        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className={`w-full ${buttonColor} transition-all duration-300 rounded-xl py-3 font-semibold relative overflow-hidden group`}>
            <span className="relative z-10">{buttonText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

// Floating Elements Component
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.1, 0.6, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut"
        }}
      >
        <div 
          className={`w-2 h-2 rounded-full ${
            i % 3 === 0 ? 'bg-blue-500/30' : 
            i % 3 === 1 ? 'bg-emerald-500/30' : 
            'bg-purple-500/30'
          }`}
        />
      </motion.div>
    ))}
  </div>
);

// Main Portfolio Component
export default function Portfolio() {
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const fullText = 'B Sharan Goutham';
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(heroY, springConfig);
  const opacity = useSpring(heroOpacity, springConfig);
  const scale = useSpring(heroScale, springConfig);

  useEffect(() => {
    setIsTyping(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  // Section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-deep-dark text-slate-100 font-inter min-h-screen overflow-x-hidden">
      {/* Enhanced Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 w-full glass-effect z-50 border-b border-slate-700/50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              B Sharan Goutham
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative hover:text-blue-400 transition-all duration-300 group px-4 py-2 rounded-lg ${
                    currentSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: currentSection === item.toLowerCase() ? '100%' : 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-xl glass-effect hover:bg-slate-700/30 transition-colors"
            >
              <div className="space-y-1.5">
                <motion.div 
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-white rounded-full"
                />
                <motion.div 
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-white rounded-full"
                />
                <motion.div 
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-white rounded-full"
                />
              </div>
            </motion.button>
          </div>
          
          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-6 space-y-4">
                  {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left py-3 px-6 rounded-xl hover:bg-slate-700/30 hover:text-blue-400 transition-all duration-300"
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <motion.section 
        ref={heroRef}
        id="home" 
        style={{ y, opacity, scale }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-slate-gray to-deep-dark"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-10"></div>
          
          {/* Animated Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1), rgba(16,185,129,0.1))",
                "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
                "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(16,185,129,0.1), rgba(59,130,246,0.1))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          <FloatingElements />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            {/* Main Heading */}
            <div className="mb-12">
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-shadow"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <span className="gradient-text block leading-tight">
                  {displayedText}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [1, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-blue-400"
                      >
                        |
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="space-y-6"
              >
                <motion.p 
                  className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-6 font-light"
                  whileInView={{ scale: [0.9, 1.05, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  Full Stack Developer & Innovation Engineer
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1 }}
                >
                  Transforming ideas into powerful digital solutions with cutting-edge technologies. 
                  Specialized in full-stack development, AI integration, and scalable applications that make a difference.
                </motion.p>
              </motion.div>
            </div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12 px-4"
            >
              <motion.a 
                href="mailto:sharan1114411@gmail.com" 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-all duration-300 group glass-effect px-6 py-3 rounded-2xl"
              >
                <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors neon-glow">
                  <i className="fas fa-envelope text-lg"></i>
                </div>
                <span className="text-sm sm:text-base font-medium">sharan1114411@gmail.com</span>
              </motion.a>
              
              <motion.a 
                href="tel:+917013123744" 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-all duration-300 group glass-effect px-6 py-3 rounded-2xl"
              >
                <div className="p-3 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors neon-glow-green">
                  <i className="fas fa-phone text-lg"></i>
                </div>
                <span className="text-sm sm:text-base font-medium">+91 7013123744</span>
              </motion.a>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center px-4"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-primary text-lg px-10 py-4 neon-glow">
                  <i className="fas fa-download mr-3"></i>
                  Download Resume
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="btn-secondary text-lg px-10 py-4"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="p-3 rounded-full glass-effect hover:bg-slate-700/30 transition-colors neon-glow">
            <i className="fas fa-chevron-down text-xl text-slate-400"></i>
          </div>
        </motion.div>
      </motion.section>

      {/* Enhanced About & Education Section */}
      <section id="about" className="py-20 sm:py-32 bg-slate-gray/20 relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="text-center mb-20" direction="scale">
            <h2 className="text-5xl font-bold gradient-text mb-6">About Me</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
              Passionate about creating innovative solutions that bridge technology and human needs
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative group">
                <motion.img 
                  src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern developer workspace with multiple monitors" 
                  className="rounded-3xl shadow-2xl w-full group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.4}>
              <h3 className="text-3xl font-bold mb-8 gradient-text">Education & Achievements</h3>
              
              <div className="space-y-8">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass-effect border-slate-700/50 card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-500/20 neon-glow">
                          <i className="fas fa-graduation-cap text-blue-400 text-xl"></i>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-blue-400 mb-2">
                            Diploma in Computer Science & Engineering
                          </h4>
                          <p className="text-slate-300 mb-2 font-medium">Govt Polytechnic Nalgonda</p>
                          <p className="text-slate-400 mb-3">2022 – 2025</p>
                          <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1">
                            GPA: 9.5 / 10.0
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass-effect border-slate-700/50 card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-emerald-500/20 neon-glow-green">
                          <i className="fas fa-school text-emerald-400 text-xl"></i>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-emerald-400 mb-2">Class 10</h4>
                          <p className="text-slate-400 mb-3">2022</p>
                          <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1">
                            CGPA: 10.0
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-2xl font-semibold mb-6 text-emerald-400">Key Achievements</h4>
                <div className="space-y-4">
                  {[
                    { icon: "fas fa-trophy", color: "text-yellow-500", text: "Twice Winner at Institute & District Levels (Srujana Tech Fest)" },
                    { icon: "fas fa-medal", color: "text-orange-500", text: "Top 5 & Top 10 placements at State Level competitions" },
                    { icon: "fas fa-book", color: "text-blue-500", text: "Published research in International Journal (IJARST)" }
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl glass-effect hover:bg-slate-700/30 transition-all duration-300"
                    >
                      <i className={`${achievement.icon} ${achievement.color} text-xl`}></i>
                      <span className="text-slate-300">{achievement.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="text-center mb-20" direction="scale">
            <h2 className="text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Comprehensive expertise across multiple technologies and frameworks, constantly evolving with industry trends
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <SkillCard
              icon="fas fa-code text-blue-500"
              title="Programming Languages"
              skills={["C", "C++", "Java", "Python", "JavaScript", "C#.NET", "Kotlin"]}
              color="blue"
              delay={0.1}
            />
            
            <SkillCard
              icon="fas fa-globe text-emerald-500"
              title="Web Technologies"
              skills={["HTML/CSS", "TailwindCSS", "Alpine.js", "Flask", "PHP"]}
              color="emerald"
              delay={0.2}
            />
            
            <SkillCard
              icon="fas fa-database text-purple-500"
              title="Database & Tools"
              skills={["SQL/PL-SQL", "Playwright", "Web Scraping", "Telegram API"]}
              color="purple"
              delay={0.3}
            />
            
            <div className="md:col-span-2 lg:col-span-2">
              <SkillCard
                icon="fas fa-cogs text-yellow-500"
                title="Concepts & Specializations"
                skills={["Data Structures", "Full-Stack Development", "WebRTC", "Firebase", "RAG Implementation", "AI/ML Integration"]}
                color="yellow"
                delay={0.4}
              />
            </div>
            
            <div className="md:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05, 
                  rotateY: 8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative h-full"
              >
                <div className="bg-gradient-to-br from-dark-navy via-slate-gray to-dark-navy p-8 rounded-3xl border border-pink-500/30 skill-card-hover backdrop-blur-sm relative overflow-hidden h-full flex flex-col justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 text-center">
                    <motion.img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                      alt="Software development workflow illustration" 
                      className="rounded-2xl w-full h-40 object-cover mb-6 group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <h3 className="text-xl font-semibold mb-3 gradient-text">Continuous Learning</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Always exploring new technologies and methodologies to stay at the forefront of innovation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 sm:py-32 bg-slate-gray/20 relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="text-center mb-20" direction="scale">
            <h2 className="text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Innovative solutions that demonstrate technical expertise and creative problem-solving
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
            <ProjectCard
              title="NexMeet"
              description="Web-based platform connecting users for one-on-one video and text chats with strangers. Built using WebRTC and Firebase with real-time communication and smart session handling."
              image="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              technologies={["WebRTC", "Firebase", "JavaScript", "Real-time"]}
              features={["Anonymous login and privacy-focused design", "Interest-based matching (planned feature)", "Content moderation system"]}
              status="ACTIVE"
              statusColor="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              buttonText="View Project"
              buttonColor="bg-blue-500 hover:bg-blue-600"
              delay={0.1}
            />

            <ProjectCard
              title="Smart Holovision"
              description="Revolutionary 2D to 3D reconstruction system redefining visual communication. Features EdTech integration with interactive 3D models for presentations."
              image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              technologies={["Python", "Android", "3D Reconstruction", "EdTech"]}
              features={["Winner at Institute & District Levels", "Top 5 at State Level Competition", "Published research paper in IJARST"]}
              status="AWARDED"
              statusColor="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
              buttonText="View Research"
              buttonColor="bg-emerald-500 hover:bg-emerald-600"
              delay={0.2}
            />

            <ProjectCard
              title="GreenBridge"
              description="Multilingual rice e-commerce platform connecting buyers with local farmers. Features location-based discovery, interactive maps, and comprehensive farmer support."
              image="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              technologies={["Full-Stack", "Multilingual", "E-commerce", "Maps API"]}
              features={["Plant disease detection with AI", "Government scheme integration", "Support in English, Hindi, Telugu"]}
              status="FULL-STACK"
              statusColor="bg-blue-500/20 text-blue-400 border border-blue-500/30"
              buttonText="Explore Platform"
              buttonColor="bg-green-500 hover:bg-green-600"
              delay={0.3}
            />

            <ProjectCard
              title="SBTET RAG Implementation + Telegram Bot"
              description="Advanced educational system with dynamic attendance and results fetching, featuring dashboards for students and teachers, automated messaging, and quiz modules for competitive exam preparation."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              technologies={["Python", "JavaScript", "Telegram API", "RAG", "Educational AI"]}
              features={["Dynamic attendance & results fetching with dashboards", "Automated messaging & dynamic assessment evaluations", "Interactive quizzes for competitive exam preparation"]}
              status="ADVANCED"
              statusColor="bg-purple-500/20 text-purple-400 border border-purple-500/30"
              buttonText="View System"
              buttonColor="bg-purple-500 hover:bg-purple-600"
              delay={0.4}
            />

            <ProjectCard
              title="Quizmaker Application"
              description="Dynamic quiz application for TGECET and APECET preparations with personalized dashboard, integrated chatbot, and dynamic quiz generation based on historical data."
              image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              technologies={["Educational", "Chatbot", "Analytics", "Adaptive"]}
              features={["Personalized learning dashboard", "AI-powered question generation", "Performance analytics"]}
              status="COMMERCIAL"
              statusColor="bg-green-500/20 text-green-400 border border-green-500/30"
              buttonText="Try Demo"
              buttonColor="bg-orange-500 hover:bg-orange-600"
              delay={0.5}
            />
          </div>
          
          {/* Additional Projects Grid */}
          <AnimatedSection className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16" delay={0.6}>
            {[
              {
                title: "College Management System",
                description: "Java-based system with attendance tracking, results management, and integrated chatbot",
                icon: "fas fa-graduation-cap",
                iconColor: "text-blue-400",
                bgColor: "from-blue-500/10 to-blue-600/10",
                borderColor: "border-blue-500/30",
                technologies: ["Java", "JavaFX"],
                achievement: "Institute & District Winner"
              },
              {
                title: "RAG Chatbot for KMIT",
                description: "Intelligent chatbot with web scraping, attendance tracking, and mental health support",
                icon: "fas fa-robot",
                iconColor: "text-emerald-400",
                bgColor: "from-emerald-500/10 to-emerald-600/10",
                borderColor: "border-emerald-500/30",
                technologies: ["RAG", "Scraping"],
                achievement: "AI-Powered Solution"
              },
              {
                title: "Twitter Monitor Pro",
                description: "Real-time Twitter monitoring tool with instant notifications, avoiding API costs",
                icon: "fab fa-twitter",
                iconColor: "text-cyan-400",
                bgColor: "from-cyan-500/10 to-cyan-600/10",
                borderColor: "border-cyan-500/30",
                technologies: ["Real-time", "Scraping"],
                achievement: "Cost-Effective Solution"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card className={`glass-effect ${project.borderColor} card-hover h-full relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.bgColor} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${project.icon} ${project.iconColor} text-xl`}></i>
                      </div>
                      <h4 className={`text-lg font-semibold ${project.iconColor} group-hover:text-white transition-colors duration-300`}>
                        {project.title}
                      </h4>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          className={`${project.bgColor} ${project.iconColor} ${project.borderColor} border text-xs px-3 py-1 rounded-full`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className={`flex items-center text-xs ${project.iconColor} font-medium`}>
                      <i className="fas fa-star mr-2"></i>
                      {project.achievement}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <AnimatedSection className="text-center mb-20" direction="scale">
            <h2 className="text-5xl font-bold gradient-text mb-6">Let's Connect</h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Ready to collaborate on innovative projects or discuss opportunities? Let's create something amazing together.
            </p>
          </AnimatedSection>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left" delay={0.2}>
                <div className="relative group">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Professional business meeting and networking environment" 
                    className="rounded-3xl shadow-2xl w-full group-hover:scale-105 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.4}>
                <div className="space-y-10">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-6 gradient-text">Get In Touch</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      {
                        href: "mailto:sharan1114411@gmail.com",
                        icon: "fas fa-envelope",
                        iconColor: "text-blue-400",
                        bgColor: "bg-blue-500/20",
                        hoverBg: "group-hover:bg-blue-500/30",
                        borderColor: "hover:border-blue-500",
                        title: "Email",
                        subtitle: "sharan1114411@gmail.com"
                      },
                      {
                        href: "tel:+917013123744",
                        icon: "fas fa-phone",
                        iconColor: "text-emerald-400",
                        bgColor: "bg-emerald-500/20",
                        hoverBg: "group-hover:bg-emerald-500/30",
                        borderColor: "hover:border-emerald-500",
                        title: "Phone",
                        subtitle: "+91 7013123744"
                      },
                      {
                        href: "#",
                        icon: "fas fa-map-marker-alt",
                        iconColor: "text-purple-400",
                        bgColor: "bg-purple-500/20",
                        hoverBg: "group-hover:bg-purple-500/30",
                        borderColor: "hover:border-purple-500",
                        title: "Location",
                        subtitle: "Nalgonda, Telangana, India"
                      }
                    ].map((contact, index) => (
                      <motion.a 
                        key={index}
                        href={contact.href}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-6 p-6 glass-effect rounded-2xl border border-slate-700 ${contact.borderColor} transition-all duration-300 group`}
                      >
                        <div className={`${contact.bgColor} ${contact.hoverBg} p-4 rounded-2xl transition-colors duration-300 neon-glow`}>
                          <i className={`${contact.icon} ${contact.iconColor} text-2xl`}></i>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-200 text-lg group-hover:text-white transition-colors duration-300">
                            {contact.title}
                          </div>
                          <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                            {contact.subtitle}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                  
                  <div className="text-center pt-8">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="btn-primary text-lg px-10 py-4 neon-glow">
                        <i className="fas fa-download mr-3"></i>
                        Download Resume
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 bg-deep-dark border-t border-slate-800 relative overflow-hidden">
        <FloatingElements />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold gradient-text mb-3">B Sharan Goutham</h3>
              <p className="text-slate-400 text-lg">Full Stack Developer & Innovation Engineer</p>
              <p className="text-slate-500 mt-2">Crafting digital experiences that matter</p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { href: "mailto:sharan1114411@gmail.com", icon: "fas fa-envelope", color: "hover:text-blue-400" },
                { href: "tel:+917013123744", icon: "fas fa-phone", color: "hover:text-emerald-400" },
                { href: "#", icon: "fab fa-linkedin", color: "hover:text-blue-500" },
                { href: "#", icon: "fab fa-github", color: "hover:text-gray-400" },
                { href: "#", icon: "fab fa-twitter", color: "hover:text-cyan-400" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-slate-400 ${social.color} transition-all duration-300 p-3 rounded-full glass-effect`}
                >
                  <i className={`${social.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-slate-500 text-sm space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>&copy; 2024 B Sharan Goutham. All rights reserved.</p>
              <p>Designed with passion • Built with precision • Delivered with excellence</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}