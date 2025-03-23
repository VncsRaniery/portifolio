"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  TypeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  PythonIcon,
} from "./icons/TechIcons";

export default function Skills() {
  const skills = [
    {
      name: "TypeScript",
      level: 95,
      icon: TypeScriptIcon,
      category: "Frontend",
      description: "Desenvolvimento com tipagem estática e recursos modernos do JavaScript",
    },
    {
      name: "JavaScript",
      level: 95,
      icon: JavaScriptIcon,
      category: "Frontend",
      description: "Domínio completo da linguagem e recursos avançados do ES6+",
    },
    {
      name: "React",
      level: 90,
      icon: ReactIcon,
      category: "Frontend",
      description: "Desenvolvimento de interfaces modernas com componentes reutilizáveis",
    },
    {
      name: "Next.js",
      level: 90,
      icon: NextJsIcon,
      category: "Frontend",
      description: "Aplicações web performáticas com renderização híbrida",
    },
    {
      name: "Node.js",
      level: 85,
      icon: NodeJsIcon,
      category: "Backend",
      description: "Desenvolvimento de APIs e aplicações server-side",
    },
    {
      name: "Python",
      level: 80,
      icon: PythonIcon,
      category: "Backend",
      description: "Desenvolvimento de soluções backend e automação",
    },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-4xl font-bold text-white/90 mb-4 text-center"
      >
        Habilidades Técnicas
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-white/60 mb-12 max-w-2xl mx-auto"
      >
        Conheça meu conjunto de habilidades técnicas e experiência profissional em desenvolvimento de software
      </motion.p>

      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 + categoryIndex * 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-white/80 mb-6">
            {category === "Frontend" ? "Desenvolvimento Frontend" : "Desenvolvimento Backend"}
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card
                          className="group h-[180px] bg-white/5 border-white/10 backdrop-blur-xl
                                   transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5
                                   relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <CardContent className="p-6 h-full flex items-center">
                            <div className="flex items-center space-x-4 w-full">
                              <div
                                className="relative w-16 h-16 rounded-2xl overflow-hidden 
                                           flex items-center justify-center
                                           group-hover:scale-110 transition-transform duration-300
                                           shadow-lg shadow-black/5"
                              >
                                <skill.icon size={48} className="transition-transform duration-300 group-hover:scale-110" />
                              </div>
                              <div className="flex-grow min-w-0">
                                <h3 className="text-lg font-medium text-white/90 mb-1 truncate">
                                  {skill.name}
                                </h3>
                                <div className="flex justify-between items-center mb-2">
                                  <Progress 
                                    value={skill.level} 
                                    className="h-2 bg-white/10" 
                                  />
                                  <span className="ml-4 text-sm font-medium text-white/60 whitespace-nowrap">
                                    {skill.level}%
                                  </span>
                                </div>
                                <p className="text-sm text-white/50 line-clamp-2">
                                  {skill.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
