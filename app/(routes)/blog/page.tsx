"use client";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle2, Globe, Cpu, Binary } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CertificatesPage() {
  const certificates = [
    {
      title: "NASA Space Apps Challenge",
      subtitle: "Local Winner - Ben Guerir",
      issuer: "NASA International",
      date: "October 2025",
      skills: ["Pygame", "Problem Solving", "Python"],
      verified: true,
      color: "from-blue-600 to-cyan-500",
      image: "/certificates/nasa.png", 
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "WRO International Final",
      subtitle: "Finalist in Izmir, Turkey",
      issuer: "World Robot Olympiad",
      date: "November 2024",
      skills: ["Robotics", "Teamwork", "Robot Programming"],
      verified: true,
      color: "from-red-500 to-orange-500",
      image: "/certificates/wro.png",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "FIRST LEGO League (FLL)",
      subtitle: "National Competition Participant",
      issuer: "FIRST LEGO League Challenge",
      date: "May 2024",
      skills: ["Teamwork", "Robot Programming", "Innovation"],
      verified: true,
      color: "from-blue-400 to-indigo-600",
      image: "/certificates/fll.png",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "National Mathematics Olympiad",
      subtitle: "Academic Excellence",
      issuer: "Roosevelt Private School",
      date: "January 2023",
      skills: ["Mathematics", "Logic", "Problem Solving"],
      verified: true,
      color: "from-slate-400 to-zinc-600",
      image: "/certificates/math.png",
      icon: <Binary className="w-5 h-5" />
    },
    {
      title: "CS50x: Computer Science",
      subtitle: "Introduction to Computer Science",
      issuer: "Harvard University",
      date: "In Progress",
      skills: ["C", "Algorithms", "Data Structures"],
      verified: false,
      color: "from-red-600 to-slate-900",
      image: "/images/projects/cs50/cs50.jpg",
      icon: <Binary className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Award className="w-10 h-10 text-blue-400" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Achievements & <br/>Certifications
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Official recognition of technical expertise and competitive excellence.
          </p>
        </motion.div>

        {/* Landscape Grid (2 Columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-md overflow-hidden hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col shadow-2xl relative">
                
                {/* Visual Accent Layer */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`} />
                
                {/* Landscape Certificate Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Verification Badge */}
                  {cert.verified && (
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">Verified</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-blue-400">
                    {cert.icon}
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{cert.issuer}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-slate-400 font-medium mb-6 italic">
                    {cert.subtitle}
                  </p>

                  <div className="flex items-center text-sm text-slate-500 mb-8">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>

                  {/* Skills Tags - Now at the bottom */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-blue-500/10 hover:text-blue-300 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-slate-700 mt-20 text-sm font-medium"
        >
          Credentials issued by international organizations and academic institutions.
        </motion.p>
      </div>
    </div>
  );
}