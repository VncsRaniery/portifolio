'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Certificates() {
  const certificates = [
    {
      name: "Fundamentos para Desenvolvimento de Software por Microsoft e LinkedIn",
      image: "/assets/certificados/Fundamentos-para-Desenvolvimento-de-Software.png",
      issuer: "Microsoft e LinkedIn"
    },
    {
      name: "Fundamentos para Análise de Dados por Microsoft e LinkedIn",
      image: "/assets/certificados/Fundamentos-para-Análise-de-Dados.png",
      issuer: "Microsoft"
    },
    {
      name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      image: "/assets/certificados/Generative-AI.png",
      issuer: "Microsoft e LinkedIn"
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4"
    >
      <motion.h2 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl font-bold text-white/90 mb-8 text-center"
      >
        Meus certificados
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <Card className="bg-zinc-800/50 border-zinc-700/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image 
                    src={cert.image} 
                    alt={cert.name} 
                    width={800} 
                    height={600} 
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white/90 mb-1">{cert.name}</h3>
                  <p className="text-sm text-white/70">{cert.issuer}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

