import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SkillCard = ({ icon, title, skills }: { icon: string; title: string; skills: string[] }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-dark-navy p-6 rounded-xl border border-slate-700 card-hover"
  >
    <div className="flex items-center mb-4">
      <i className={`${icon} text-2xl mr-3`}></i>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">
          {skill}
        </Badge>
      ))}
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
  const fullText = 'B Sharan Goutham';

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
  };

  return (
    <div className="bg-deep-dark text-slate-100 font-inter min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-navy/90 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">B Sharan Goutham</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-slate-gray to-deep-dark opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="gradient-text">
                  {displayedText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="text-xl md:text-2xl text-slate-300 mb-6"
              >
                Full Stack Developer & Innovation Engineer
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
              >
                Transforming ideas into powerful digital solutions with cutting-edge technologies. 
                Specialized in full-stack development, AI integration, and scalable applications.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8"
            >
              <a href="mailto:sharan1114411@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                <i className="fas fa-envelope"></i>
                sharan1114411@gmail.com
              </a>
              <a href="tel:+917013123744" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors">
                <i className="fas fa-phone"></i>
                +91 7013123744
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.6 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 font-semibold">
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-3 font-semibold"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <i className="fas fa-chevron-down text-2xl text-slate-400"></i>
        </motion.div>
      </section>

      {/* About & Education Section */}
      <section id="about" className="py-20 bg-slate-gray/20">
        <div className="container mx-auto px-6">
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
            
            <AnimatedSection>
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
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive expertise across multiple technologies and frameworks
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection>
              <SkillCard
                icon="fas fa-code text-blue-500"
                title="Programming Languages"
                skills={["C", "C++", "Java", "Python", "JavaScript", "C#.NET", "Kotlin"]}
              />
            </AnimatedSection>
            
            <AnimatedSection>
              <SkillCard
                icon="fas fa-globe text-emerald-500"
                title="Web Technologies"
                skills={["HTML/CSS", "TailwindCSS", "Alpine.js", "Flask", "PHP"]}
              />
            </AnimatedSection>
            
            <AnimatedSection>
              <SkillCard
                icon="fas fa-database text-purple-500"
                title="Database & Tools"
                skills={["SQL/PL-SQL", "Playwright", "Web Scraping", "Telegram API"]}
              />
            </AnimatedSection>
            
            <AnimatedSection className="lg:col-span-2">
              <SkillCard
                icon="fas fa-cogs text-yellow-500"
                title="Concepts & Specializations"
                skills={["Data Structures", "Full-Stack Development", "WebRTC", "Firebase", "RAG Implementation", "AI/ML Integration"]}
              />
            </AnimatedSection>
            
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-dark-navy p-6 rounded-xl border border-slate-700 card-hover"
              >
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                  alt="Software development workflow illustration" 
                  className="rounded-lg w-full h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-center">Continuous Learning</h3>
                <p className="text-slate-400 text-sm text-center mt-2">
                  Always exploring new technologies and methodologies
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-gray/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Innovative solutions that demonstrate technical expertise and creative problem-solving
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8">
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
                title="Quizmaker Application"
                description="Dynamic quiz application for TGECET and APECET preparations with personalized dashboard, integrated chatbot, and dynamic quiz generation based on historical data."
                image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                technologies={["Educational", "Chatbot", "Analytics", "Adaptive"]}
                features={["Personalized learning dashboard", "AI-powered question generation", "Performance analytics"]}
                status="COMMERCIAL"
                statusColor="bg-green-500/20 text-green-400"
                buttonText="Try Demo"
                buttonColor="bg-purple-500 hover:bg-purple-600"
              />
            </AnimatedSection>
          </div>
          
          {/* Additional Projects Grid */}
          <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="bg-dark-navy border-slate-700 card-hover">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">College Management System</h4>
                <p className="text-slate-400 text-sm mb-3">Java-based system with attendance tracking, results management, and integrated chatbot</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="bg-orange-500/20 text-orange-400">Java</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400">JavaFX</Badge>
                </div>
                <div className="text-xs text-emerald-400">🏆 Institute & District Winner</div>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-navy border-slate-700 card-hover">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">RAG Chatbot for KMIT</h4>
                <p className="text-slate-400 text-sm mb-3">Intelligent chatbot with web scraping, attendance tracking, and mental health support</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="bg-purple-500/20 text-purple-400">RAG</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400">Scraping</Badge>
                </div>
                <div className="text-xs text-blue-400">🤖 AI-Powered</div>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-navy border-slate-700 card-hover">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Twitter Monitor Pro</h4>
                <p className="text-slate-400 text-sm mb-3">Real-time Twitter monitoring tool with instant notifications, avoiding API costs</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge className="bg-cyan-500/20 text-cyan-400">Real-time</Badge>
                  <Badge className="bg-red-500/20 text-red-400">Scraping</Badge>
                </div>
                <div className="text-xs text-yellow-400">💰 Cost-Effective Solution</div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
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
              
              <AnimatedSection>
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
