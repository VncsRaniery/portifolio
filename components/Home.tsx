"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-center ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600 tracking-tighter"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Bem vindo ao meu Portifolio!
        </motion.h1>
        <motion.p
          className="text-xl text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Me chamo Vinícius Raniery, um desenvolvedor Back-end dedicado a criar
          soluções inovadoras e eficientes para a web. Explore minha jornada
          através de código, criatividade e tecnologias de ponta.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
      >
        {[
          {
            title: "Inovador",
            description: "Criando soluções robustas e eficientes no servidor",
          },
          {
            title: "Desempenho",
            description:
              "Otimizando o tempo de resposta e a eficiência dos sistemas",
          },
          {
            title: "Integrado",
            description: "Conectando diferentes sistemas e APIs de forma coesa",
          },
        ].map((trait, index) => (
          <motion.div
            key={trait.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            className="bg-gradient-to-br from-blue-900/50 to-green-900/50 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {trait.title}
            </h3>
            <p className="text-white/60">{trait.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-12"
      >
        <p className="text-lg text-white/80">
          Vamos construir algo incrível juntos. Explore meus projetos e
          habilidades para ver como posso contribuir para sua próxima grande
          ideia.
        </p>
      </motion.div>
    </div>
  );
}
