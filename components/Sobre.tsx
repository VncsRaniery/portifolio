"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const backendTechnologies = [
    "Node.js",
    "Python",
    "SQL, Banco de dados relacionais (MySql e SQLServer)",
    "Banco de dados não relacionais (MongoDB)",
  ];

  const frontendTechnologies = ["Next.js", "JavaScript", "HTML", "CSS"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="space-y-6 max-w-3xl mx-auto text-left"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold text-white/90 mb-6"
      >
        Sobre mim
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-lg text-white/80 leading-relaxed text-justify"
      >
        Olá, me chamo Vinícius Raniery e sou desenvolvedor de software backend
        com menos de 1 ano de experiência na área. Me considero um profissional
        estudioso, dedicado e disposto a encarar qualquer desafio em busca de
        crescimento, priorizando sempre agregar à equipe com soluções ágeis e
        eficazes.
      </motion.p>
      <motion.p
        variants={itemVariants}
        className="text-lg text-white/80 leading-relaxed"
      >
        Atualmente estou focado somente em backend e trabalho com as seguintes
        tecnologias:
      </motion.p>
      <motion.ul
        variants={itemVariants}
        className="text-lg text-white/80 leading-relaxed list-disc list-inside"
      >
        {backendTechnologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </motion.ul>
      <motion.p
        variants={itemVariants}
        className="text-lg text-white/80 leading-relaxed mt-4"
      >
        Tenho também noções básicas de frontend, incluindo:
      </motion.p>
      <motion.ul
        variants={itemVariants}
        className="text-lg text-white/80 leading-relaxed list-disc list-inside"
      >
        {frontendTechnologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
