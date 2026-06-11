import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FileText, Mail, MapPin, Phone, ExternalLink, ChevronDown, GraduationCap, Award, BookOpen, Code2, PenTool, Lightbulb, Code } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import avatarImg from "@/assets/avatar.png";
import resumeImgPath from "@assets/Screenshot_2026-04-12_200119_1776007140163.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-primary">RP.</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Abstract Background" className="w-full h-full object-cover opacity-20 dark:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
            >
              <motion.div variants={FADE_UP} className="mb-6">
                <div className="inline-block p-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    <span className="text-xs font-medium text-secondary">Available for Internship</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-bold tracking-tight text-primary-foreground mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Rishitha Papareddy</span>
              </motion.h1>
              
              <motion.h2 variants={FADE_UP} className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6 max-w-2xl">
                Computer Science Engineering student passionate about Python, Software Testing, and Web Development.
              </motion.h2>
              
              <motion.p variants={FADE_UP} className="text-lg text-muted-foreground/80 mb-10 max-w-2xl leading-relaxed">
                Motivated Final year student building real-world applications. Seeking opportunities to enhance technical, problem-solving, and software development skills.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
                <a href="#projects" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  View Projects
                </a>
                <a href="#contact" className="px-6 py-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium hover:bg-secondary/20 transition-all">
                  Contact Me
                </a>
                <div className="flex items-center gap-2 ml-4">
                  <a href="https://www.linkedin.com/in/papareddy-rishitha-635443c/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border text-foreground hover:text-secondary hover:border-secondary transition-all shadow-sm">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com/rishithapapareddy" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border text-foreground hover:text-secondary hover:border-secondary transition-all shadow-sm">
                    <SiGithub size={20} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hidden md:block">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="py-24 bg-card relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education & Academics</h2>
              <div className="h-px flex-1 bg-border/60 ml-4 max-w-xs"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={FADE_UP} className="space-y-8">
                <div className="relative pl-8 border-l border-secondary/30 space-y-10">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-card bg-secondary"></div>
                    <h3 className="text-xl font-bold text-foreground">B.E. Computer Science & Engineering</h3>
                    <p className="text-primary font-medium mt-1">Velammal Institute of Technology, Ponneri-Chennai</p>
                    <p className="text-sm text-muted-foreground mt-2">2023 – 2027</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-md bg-secondary/10 text-secondary text-sm font-medium">
                      CGPA: 8.50
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-card bg-muted-foreground/30"></div>
                    <h3 className="text-xl font-bold text-foreground">HSC 12th Grade (MPC)</h3>
                    <p className="text-primary font-medium mt-1">Narayana Junior College, Nellore</p>
                    <p className="text-sm text-muted-foreground mt-2">2021 – 2023</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium">
                      Percentage: 86.4%
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-card bg-muted-foreground/30"></div>
                    <h3 className="text-xl font-bold text-foreground">SSC 10th Grade</h3>
                    <p className="text-primary font-medium mt-1">Viswabharathi English Medium High School, Naidupeta</p>
                    <p className="text-sm text-muted-foreground mt-2">2020 – 2021</p>
                    <div className="mt-3 inline-block px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium">
                      Percentage: 100%
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={FADE_UP} className="space-y-6">
                <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><BookOpen className="text-secondary" size={20}/> Academic Highlights</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>Consistently scored above 85% in academic subjects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>Strong performer in Computer Science core subjects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>Participated in college-level coding contests and hackathon projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>Attended Design Thinking and Web Development workshops</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-2xl bg-background border border-border shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin className="text-secondary" size={20}/> Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-md bg-secondary/10 text-secondary font-medium">English</span>
                    <span className="px-3 py-1.5 rounded-md bg-secondary/10 text-secondary font-medium">Telugu (Native)</span>
                    <span className="px-3 py-1.5 rounded-md bg-secondary/10 text-secondary font-medium">Tamil</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            <motion.div variants={FADE_UP} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Arsenal</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">A comprehensive toolkit spanning development, testing, and modern AI-assisted workflows.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div variants={FADE_UP} className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-sm font-medium">Python</span>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code size={24} />
                </div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-sm font-medium">HTML/CSS</span>
                  <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-sm font-medium">React.js</span>
                  <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-sm font-medium">Tailwind CSS</span>
                  <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-sm font-medium">JavaScript</span>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PenTool size={24} />
                </div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Testing & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-accent/20 text-accent-foreground text-sm font-medium">Manual Testing</span>
                  <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium">Git & GitHub</span>
                  <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium">VS Code</span>
                  <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium">WebStorm</span>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP} className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb size={24} />
                </div>
                <h3 className="font-bold text-lg mb-4 text-foreground">AI & Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-sm font-medium">Lovable</span>
                  <span className="px-3 py-1 rounded-md bg-secondary/10 text-secondary text-sm font-medium">v0.dev</span>
                  <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium">Communication</span>
                  <span className="px-3 py-1 rounded-md bg-muted text-muted-foreground text-sm font-medium">Problem-Solving</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-card relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-border/60 mr-4 max-w-xs hidden md:block"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
              <div className="h-px flex-1 bg-border/60 ml-4 max-w-xs"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <motion.div variants={FADE_UP} className="group relative rounded-2xl bg-background border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                      <GraduationCap size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Scheme Genie</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    AI-Powered Government Services Portal featuring a recommendation system for schemes based on user data. Includes a multilingual chatbot, eligibility checker, and real-time alerts.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-secondary/10 text-secondary">Python Flask</span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-secondary/10 text-secondary">Tailwind CSS</span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-secondary/10 text-secondary">MySQL</span>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={FADE_UP} className="group relative rounded-2xl bg-background border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-xl bg-accent/20 text-accent-foreground flex items-center justify-center">
                      <FileText size={24} />
                    </div>
                    <a href="https://resume-magician-40.lovable.app" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary/10 text-muted-foreground hover:text-secondary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Make Your Resume</h3>
                  <p className="text-muted-foreground mb-6">
                    AI-powered resume builder that generates structured professional resumes with a simple, user-friendly interface optimized for student users.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-muted text-muted-foreground">AI Generation</span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-muted text-muted-foreground">Web App</span>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div variants={FADE_UP} className="group relative rounded-2xl bg-background border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <a href="https://future-ignite-bot.lovable.app" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-secondary/10 text-muted-foreground hover:text-secondary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Career Path</h3>
                  <p className="text-muted-foreground mb-6">
                    AI-powered career guidance web application helping students explore paths with personalized guidance through an interactive interface.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-muted text-muted-foreground">AI Guidance</span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-muted text-muted-foreground">Interactive UI</span>
                  </div>
                </div>
              </motion.div>

              {/* Project 4 */}
              <motion.div variants={FADE_UP} className="group relative rounded-2xl bg-background border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                      <BookOpen size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">E-Mate</h3>
                  <p className="text-muted-foreground mb-6">
                    A student productivity platform and study support tool with social features. Designed with a distraction-free UI to enhance focus.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-secondary/10 text-secondary">HTML/CSS</span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-secondary/10 text-secondary">JavaScript</span>
                    <span className="px-2.5 py-1 text-xs font-medium rounded bg-secondary/10 text-secondary">Frontend</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Workshops */}
      <section id="certifications" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={FADE_UP}>
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <Award className="text-secondary" /> Certifications
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Award size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Artificial Intelligence Foundations</h4>
                      <p className="text-muted-foreground mt-1">IBM SkillsBuild</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Award size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Python Programming</h4>
                      <p className="text-muted-foreground mt-1">Internpe</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={FADE_UP}>
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <Lightbulb className="text-accent" /> Workshops
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Lightbulb size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Kurukshetra 2025 Project Expo</h4>
                      <p className="text-muted-foreground mt-1">Vel Tech Institute of Science and Technology</p>
                      <p className="text-sm text-secondary mt-2 font-medium">Participant</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Lightbulb size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Design Thinking Workshop</h4>
                      <p className="text-muted-foreground mt-1">Velammal Institute of Technology (ACM Student Chapter)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={STAGGER}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-bold mb-6">Let's build something together.</motion.h2>
            <motion.p variants={FADE_UP} className="text-primary-foreground/70 text-lg mb-12">
              Currently seeking internship opportunities. If you're looking for a dedicated software engineering student with a strong foundation in Python and Web Development, I'd love to chat.
            </motion.p>
            
            <motion.div variants={FADE_UP} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
              <a href="mailto:rishithapapareddy06@gmail.com" className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Mail className="mb-4 text-secondary" size={28} />
                <span className="font-medium">Email Me</span>
                <span className="text-sm text-primary-foreground/60 mt-1">rishithapapareddy06</span>
              </a>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <Phone className="mb-4 text-secondary" size={28} />
                <span className="font-medium">Call Me</span>
                <span className="text-sm text-primary-foreground/60 mt-1">+91 9392103406</span>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="mb-4 text-secondary" size={28} />
                <span className="font-medium">Location</span>
                <span className="text-sm text-primary-foreground/60 mt-1">Naidupeta, Andhra Pradesh</span>
              </div>
            </motion.div>
            
            <motion.div variants={FADE_UP} className="flex gap-6">
              <a href="https://www.linkedin.com/in/papareddy-rishitha-635443c/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-primary-foreground/80 hover:text-white transition-colors">
                <FaLinkedin size={24} /> LinkedIn
              </a>
              <a href="https://github.com/rishithapapareddy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-primary-foreground/80 hover:text-white transition-colors">
                <SiGithub size={24} /> GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="py-6 text-center bg-primary text-primary-foreground/40 border-t border-white/10 text-sm">
        <p>© {new Date().getFullYear()} Rishitha Papareddy. All rights reserved.</p>
      </footer>
    </div>
  );
}
