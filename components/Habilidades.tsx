"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "TypeScript",
      level: 95,
      image: "/logos/programming/typescript.svg",
    },
    {
      name: "JavaScript",
      level: 95,
      image: "/logos/programming/javascript.svg",
    },
    {
      name: "React",
      level: 90,
      image: "/logos/programming/react.svg",
    },
    {
      name: "Next.js",
      level: 90,
      image: "/logos/programming/nextjs.svg",
      imageBackground: "bg-white",
    },
    {
      name: "Node.js",
      level: 85,
      image: "/logos/programming/nodejs.svg",
      imageBackground: "bg-white",
    },
    {
      name: "Python",
      level: 80,
      image: "/logos/programming/python.svg",
      imageBackground: "bg-white",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4"
    >
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl font-bold text-white/90 mb-8 text-center"
      >
        Habilidades Técnicas
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <Card
              className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-xl
                       transform transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`relative w-16 h-16 rounded-2xl overflow-hidden 
                               ${
                                 skill.imageBackground ||
                                 "bg-gradient-to-br from-zinc-700/50 to-zinc-600/50"
                               }`}
                  >
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium text-white/90 mb-1">
                      {skill.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <Progress value={skill.level} className="h-2" />
                      <span className="ml-4 text-sm font-medium text-white/60">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
