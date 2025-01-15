"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface GameOverProps {
  onRestart: () => void
}

export default function GameOver({ onRestart }: GameOverProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="text-6xl font-bold text-red-500 mb-8"
      >
        Game Over
      </motion.h1>
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: 'spring' }}
      >
        <Button
          onClick={onRestart}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-xl"
        >
          Reiniciar
        </Button>
      </motion.div>
    </motion.div>
  )
}
