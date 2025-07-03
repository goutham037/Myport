import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Globe, 
  Smartphone,
  Award,
  Calendar,
  Users,
  Star,
  Zap,
  Target,
  Briefcase
} from 'lucide-react';

const Portfolio = () => {
  const skills = [
    { name: 'React', level: 95, icon: <Code className="w-5 h-5" />, color: 'bg-blue-500' },
    { name: 'Node.js', level: 90, icon: <Database className="w-5 h-5" />, color: 'bg-green-500' },
    { name: 'TypeScript', level: 88, icon: <Code className="w-5 h-5" />, color: 'bg-blue-600' },
    { name: 'Python', level: 85, icon: <Code className="w-5 h-5" />, color: 'bg-yellow-500' },
    { name: 'MongoDB', level: 82, icon: <Database className="w-5 h-5" />, color: 'bg-green-600' },
    { name: 'AWS', level: 80, icon: <Globe className="w-5 h-5" />, color: 'bg-orange-500' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with beautiful visualizations',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const achievements = [
    { title: 'Best Innovation Award', year: '2023', organization: 'Tech Conference' },
    { title: 'Full Stack Certification', year: '2022', organization: 'FreeCodeCamp' },
    { title: 'Hackathon Winner', year: '2022', organization: 'Local Dev Community' },
    { title: 'AWS Certified', year: '2021', organization: 'Amazon Web Services' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-4 py-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">SG</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="gradient-text">B Sharan Goutham</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              Full Stack Developer & Innovation Engineer crafting digital experiences 
              that bridge creativity with cutting-edge technology
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button className="btn-primary group">
                <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Get In Touch
              </Button>
              <Button variant="outline" className="btn-secondary group">
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center space-x-8 text-slate-400"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Nalgonda, Telangana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 7013123744</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Technical <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Mastering modern technologies to build scalable and innovative solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="skill-card-hover"
                >
                  <Card className="glass-effect border-slate-700 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${skill.color}`}>
                            {skill.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        </div>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Showcasing innovative solutions and creative problem-solving
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="project-card-hover"
                >
                  <Card className="glass-effect border-slate-700 overflow-hidden h-full">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500 text-black">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                <span className="gradient-text">Achievements</span> & Recognition
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Milestones that mark my journey in technology and innovation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  className="card-hover"
                >
                  <Card className="glass-effect border-slate-700 text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-1">{achievement.organization}</p>
                      <p className="text-slate-500 text-xs">{achievement.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Projects Completed', icon: <Briefcase className="w-6 h-6" /> },
                { number: '3+', label: 'Years Experience', icon: <Calendar className="w-6 h-6" /> },
                { number: '25+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
                { number: '15+', label: 'Technologies', icon: <Zap className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something <span className="gradient-text">Amazing</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Ready to turn your ideas into reality? Let's collaborate and create 
                innovative solutions together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="btn-primary group">
                  <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  sharan1114411@gmail.com
                </Button>
                <Button variant="outline" className="btn-secondary group">
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  +91 7013123744
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-slate-700">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-400">
              © 2024 B Sharan Goutham. Crafted with passion and innovation.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;