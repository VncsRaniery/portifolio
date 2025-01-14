'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      degree: "Técnico em Informática",
      institution: "IF Goiano - Campus Campos Belos",
      year: "2021 - 2023",
      description: "Formação com ênfase em redes, programação e suporte a sistemas e hardware."
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="max-w-3xl mx-auto px-4"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-white/90 mb-8 text-center"
      >
        Educação
      </motion.h2>
      <div className="relative border-l border-gray-700 ml-3">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-8 ml-6"
          >
            <motion.span
              className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
            >
              <span className="w-3 h-3 bg-zinc-900 rounded-full"></span>
            </motion.span>
            <motion.div
              className="bg-zinc-800/50 p-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white/90">
                {edu.degree}
                <GraduationCap className="ml-2 w-5 h-5 text-blue-400" />
              </h3>
              <p className="mb-2 text-base font-normal text-gray-300 flex items-center">
                {edu.institution}
              </p>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{edu.year}</time>
              <p className="text-sm font-normal text-gray-400">{edu.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}