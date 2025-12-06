"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Code, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Local Winner of NASA Space Apps Challenge Ben Guerir (2025)",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Local Winner of World Robot Olympiad (WRO) Morocco (2024)",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Participant in Moroccan Olympiad in Informatics (MOI) Selection Test (2025)",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Participant in WRO International Final in Izmir, Turkey (2024)",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Competitor in Huawei Cloud Developer Competition Spark Infinity (2025)",
    colorClass: "text-red-600 dark:text-red-400",
  },

  {
    icon: <Medal className="h-6 w-6" />,
    title: "Participant in FIRST LEGO League Off-Season Competition (2023/2024)",
    colorClass: "text-cyan-600 dark:text-cyan-400",
  },
];

export function Achievements() {
  return (
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${achievement.colorClass} shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{achievement.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm py-1.5 px-3">STEAM Innovation</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Robotics Engineering</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Strategic Problem Solving</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Competitive Spirit</Badge>
        </div>
      </div>
    </section>
  );
}