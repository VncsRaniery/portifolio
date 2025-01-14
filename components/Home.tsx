"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Bem vindo ao meu portifólio!
        </h1>
        <p className="text-xl text-white/70 mb-8">
          Me chamo Vinícius Raniery, desenvolvedor Back-end dedicado a criar
          soluções inovadoras e eficientes para a web.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center space-x-4"
      >
        <Button
          className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-2 px-6 rounded-full text-lg"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore o meu trabalho
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
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