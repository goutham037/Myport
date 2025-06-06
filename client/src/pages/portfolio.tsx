import { useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SkillCard = ({ icon, title, skills }: { icon: string; title: string; skills: string[] }) => (
  <motion.div
    whileHover={{ y: -12, scale: 1.03, rotateY: 5 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-gradient-to-br from-dark-navy via-slate-gray to-dark-navy p-6 rounded-2xl border border-slate-700/50 card-hover backdrop-blur-sm relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 mr-4">
          <i className={`${icon} text-2xl`}></i>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/20 transition-all duration-300 hover:scale-105">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  features, 
  status, 
  statusColor,
  buttonText,
  buttonColor 
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
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-dark-navy rounded-xl border border-slate-700 overflow-hidden card-hover"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-blue-400">{title}</h3>
        <Badge className={`${statusColor} text-xs`}>{status}</Badge>
      </div>
      <p className="text-slate-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
      <ul className="text-sm text-slate-400 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <Button className={`w-full ${buttonColor} transition-colors`}>
        {buttonText}
      </Button>
    </div>
  </motion.div>
);

export default function Portfolio() {
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fullText = 'B Sharan Goutham';
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
    }, 100);

    return () => clearInterval(timer);
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
    <div className="bg-deep-dark text-slate-100 font-inter min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-dark-navy/95 backdrop-blur-xl z-50 border-b border-slate-700/50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold gradient-text cursor-pointer"
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
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative hover:text-blue-400 transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
            >
              <div className="space-y-1">
                <motion.div 
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-white"
                ></motion.div>
                <motion.div 
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-white"
                ></motion.div>
                <motion.div 
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-white"
                ></motion.div>
              </div>
            </motion.button>
          </div>
          
          {/* Mobile Menu */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 px-4 rounded-lg hover:bg-slate-700/30 hover:text-blue-400 transition-all duration-300"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        id="home" 
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-slate-gray to-deep-dark"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="mb-8">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="gradient-text block">
                  {displayedText}
                  {isTyping && <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-blue-400"
                  >|</motion.span>}
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4">
                  Full Stack Developer & Innovation Engineer
                </p>
                <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                  Transforming ideas into powerful digital solutions with cutting-edge technologies. 
                  Specialized in full-stack development, AI integration, and scalable applications.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 px-4"
            >
              <motion.a 
                href="mailto:sharan1114411@gmail.com" 
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="p-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <i className="fas fa-envelope text-sm"></i>
                </div>
                <span className="text-sm sm:text-base">sharan1114411@gmail.com</span>
              </motion.a>
              <motion.a 
                href="tel:+917013123744" 
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-all duration-300 group"
              >
                <div className="p-2 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                  <i className="fas fa-phone text-sm"></i>
                </div>
                <span className="text-sm sm:text-base">+91 7013123744</span>
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 font-semibold rounded-xl shadow-2xl shadow-blue-500/25 transition-all duration-300">
                  <i className="fas fa-download mr-2"></i>
                  Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-3 font-semibold rounded-xl transition-all duration-300"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="p-2 rounded-full bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
            <i className="fas fa-chevron-down text-xl text-slate-400"></i>
          </div>
        </motion.div>
      </motion.section>

      {/* About & Education Section */}
      <section id="about" className="py-16 sm:py-20 bg-slate-gray/20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace with multiple monitors" 
                className="rounded-xl shadow-2xl w-full"
              />
            </AnimatedSection>
            
            <AnimatedSection className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-6">Education & Achievements</h3>
              
              <div className="space-y-6">
                <Card className="bg-dark-navy border-slate-700">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-blue-400 mb-2">Diploma in Computer Science & Engineering</h4>
                    <p className="text-slate-300 mb-2">Govt Polytechnic Nalgonda</p>
                    <p className="text-slate-400 mb-2">2022 – 2025</p>
                    <Badge className="bg-emerald-500/20 text-emerald-400">GPA: 9.5 / 10.0</Badge>
                  </CardContent>
                </Card>
                
                <Card className="bg-dark-navy border-slate-700">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-blue-400 mb-2">Class 10</h4>
                    <p className="text-slate-400 mb-2">2022</p>
                    <Badge className="bg-emerald-500/20 text-emerald-400">CGPA: 10.0</Badge>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-emerald-400">Key Achievements</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-trophy text-yellow-500"></i>
                    Twice Winner at Institute & District Levels (Srujana Tech Fest)
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-medal text-orange-500"></i>
                    Top 5 & Top 10 placements at State Level competitions
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-book text-blue-500"></i>
                    Published research in International Journal (IJARST)
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive expertise across multiple technologies and frameworks
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatedSection delay={0.1}>
              <SkillCard
                icon="fas fa-code text-blue-500"
                title="Programming Languages"
                skills={["C", "C++", "Java", "Python", "JavaScript", "C#.NET", "Kotlin"]}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <SkillCard
                icon="fas fa-globe text-emerald-500"
                title="Web Technologies"
                skills={["HTML/CSS", "TailwindCSS", "Alpine.js", "Flask", "PHP"]}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <SkillCard
                icon="fas fa-database text-purple-500"
                title="Database & Tools"
                skills={["SQL/PL-SQL", "Playwright", "Web Scraping", "Telegram API"]}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.4} className="md:col-span-2 lg:col-span-2">
              <SkillCard
                icon="fas fa-cogs text-yellow-500"
                title="Concepts & Specializations"
                skills={["Data Structures", "Full-Stack Development", "WebRTC", "Firebase", "RAG Implementation", "AI/ML Integration"]}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} className="md:col-span-2 lg:col-span-1">
              <motion.div
                whileHover={{ y: -12, scale: 1.03, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-br from-dark-navy via-slate-gray to-dark-navy p-6 rounded-2xl border border-slate-700/50 card-hover backdrop-blur-sm relative overflow-hidden group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                    alt="Software development workflow illustration" 
                    className="rounded-xl w-full h-32 object-cover mb-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">Continuous Learning</h3>
                  <p className="text-slate-400 text-sm text-center">
                    Always exploring new technologies and methodologies
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-slate-gray/20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Innovative solutions that demonstrate technical expertise and creative problem-solving
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatedSection>
              <ProjectCard
                title="NexMeet"
                description="Web-based platform connecting users for one-on-one video and text chats with strangers. Built using WebRTC and Firebase with real-time communication and smart session handling."
                image="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                technologies={["WebRTC", "Firebase", "JavaScript", "Real-time"]}
                features={["Anonymous login and privacy-focused design", "Interest-based matching (planned feature)", "Content moderation system"]}
                status="ACTIVE"
                statusColor="bg-emerald-500/20 text-emerald-400"
                buttonText="View Project"
                buttonColor="bg-blue-500 hover:bg-blue-600"
              />
            </AnimatedSection>

            <AnimatedSection>
              <ProjectCard
                title="Smart Holovision"
                description="Revolutionary 2D to 3D reconstruction system redefining visual communication. Features EdTech integration with interactive 3D models for presentations."
                image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                technologies={["Python", "Android", "3D Reconstruction", "EdTech"]}
                features={["Winner at Institute & District Levels", "Top 5 at State Level Competition", "Published research paper in IJARST"]}
                status="AWARDED"
                statusColor="bg-yellow-500/20 text-yellow-400"
                buttonText="View Research"
                buttonColor="bg-emerald-500 hover:bg-emerald-600"
              />
            </AnimatedSection>

            <AnimatedSection>
              <ProjectCard
                title="GreenBridge"
                description="Multilingual rice e-commerce platform connecting buyers with local farmers. Features location-based discovery, interactive maps, and comprehensive farmer support."
                image="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                technologies={["Full-Stack", "Multilingual", "E-commerce", "Maps API"]}
                features={["Plant disease detection with AI", "Government scheme integration", "Support in English, Hindi, Telugu"]}
                status="FULL-STACK"
                statusColor="bg-blue-500/20 text-blue-400"
                buttonText="Explore Platform"
                buttonColor="bg-green-500 hover:bg-green-600"
              />
            </AnimatedSection>

            <AnimatedSection>
              <ProjectCard
                title="SBTET RAG Implementation + Telegram Bot"
                description="Advanced educational system with dynamic attendance and results fetching, featuring dashboards for students and teachers, automated messaging, and quiz modules for competitive exam preparation."
                image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                technologies={["Python", "JavaScript", "Telegram API", "RAG", "Educational AI"]}
                features={["Dynamic attendance & results fetching with dashboards", "Automated messaging & dynamic assessment evaluations", "Interactive quizzes for competitive exam preparation"]}
                status="ADVANCED"
                statusColor="bg-purple-500/20 text-purple-400"
                buttonText="View System"
                buttonColor="bg-purple-500 hover:bg-purple-600"
              />
            </AnimatedSection>

            <AnimatedSection>
              <ProjectCard
                title="Quizmaker Application"
                description="Dynamic quiz application for TGECET and APECET preparations with personalized dashboard, integrated chatbot, and dynamic quiz generation based on historical data."
                image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                technologies={["Educational", "Chatbot", "Analytics", "Adaptive"]}
                features={["Personalized learning dashboard", "AI-powered question generation", "Performance analytics"]}
                status="COMMERCIAL"
                statusColor="bg-green-500/20 text-green-400"
                buttonText="Try Demo"
                buttonColor="bg-orange-500 hover:bg-orange-600"
              />
            </AnimatedSection>
          </div>
          
          {/* Additional Projects Grid */}
          <AnimatedSection className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-dark-navy to-slate-gray border-slate-700/50 card-hover h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-blue-500/20 mr-3">
                      <i className="fas fa-graduation-cap text-blue-400"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-400">College Management System</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">Java-based system with attendance tracking, results management, and integrated chatbot</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500/20">Java</Badge>
                    <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/20">JavaFX</Badge>
                  </div>
                  <div className="flex items-center text-xs text-emerald-400">
                    <i className="fas fa-trophy mr-2"></i>
                    Institute & District Winner
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-dark-navy to-slate-gray border-slate-700/50 card-hover h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 mr-3">
                      <i className="fas fa-robot text-emerald-400"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-emerald-400">RAG Chatbot for KMIT</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">Intelligent chatbot with web scraping, attendance tracking, and mental health support</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/20">RAG</Badge>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">Scraping</Badge>
                  </div>
                  <div className="flex items-center text-xs text-blue-400">
                    <i className="fas fa-brain mr-2"></i>
                    AI-Powered Solution
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-dark-navy to-slate-gray border-slate-700/50 card-hover h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20 mr-3">
                      <i className="fab fa-twitter text-cyan-400"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-cyan-400">Twitter Monitor Pro</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">Real-time Twitter monitoring tool with instant notifications, avoiding API costs</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">Real-time</Badge>
                    <Badge className="bg-red-500/20 text-red-400 border border-red-500/20">Scraping</Badge>
                  </div>
                  <div className="flex items-center text-xs text-yellow-400">
                    <i className="fas fa-dollar-sign mr-2"></i>
                    Cost-Effective Solution
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional business meeting and networking environment" 
                  className="rounded-xl shadow-2xl w-full"
                />
              </AnimatedSection>
              
              <AnimatedSection className="order-1 md:order-2">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <motion.a 
                      href="mailto:sharan1114411@gmail.com" 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-dark-navy rounded-lg border border-slate-700 hover:border-blue-500 transition-colors group"
                    >
                      <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <i className="fas fa-envelope text-blue-400 text-xl"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200">Email</div>
                        <div className="text-slate-400">sharan1114411@gmail.com</div>
                      </div>
                    </motion.a>
                    
                    <motion.a 
                      href="tel:+917013123744" 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-dark-navy rounded-lg border border-slate-700 hover:border-emerald-500 transition-colors group"
                    >
                      <div className="bg-emerald-500/20 p-3 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                        <i className="fas fa-phone text-emerald-400 text-xl"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200">Phone</div>
                        <div className="text-slate-400">+91 7013123744</div>
                      </div>
                    </motion.a>
                    
                    <div className="flex items-center gap-4 p-4 bg-dark-navy rounded-lg border border-slate-700">
                      <div className="bg-purple-500/20 p-3 rounded-lg">
                        <i className="fas fa-map-marker-alt text-purple-400 text-xl"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200">Location</div>
                        <div className="text-slate-400">Nalgonda, Telangana, India</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-6">
                    <Button className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl">
                      <i className="fas fa-download mr-2"></i>
                      Download Resume
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-deep-dark border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-2xl font-bold gradient-text">B Sharan Goutham</h3>
              <p className="text-slate-400 mt-2">Full Stack Developer & Innovation Engineer</p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:sharan1114411@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a href="tel:+917013123744" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <i className="fas fa-phone text-2xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-gray-400 transition-colors">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
            
            <div className="text-slate-500 text-sm">
              <p>&copy; 2024 B Sharan Goutham. All rights reserved.</p>
              <p className="mt-1">Crafted with passion for innovation and excellence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
