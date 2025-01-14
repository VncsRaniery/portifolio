"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: "Email",
      value: "",
      image: "/logos/social/Gmail.svg",
      link: "mailto:viniciuscontact@gmail.com",
    },
    {
      name: "LinkedIn",
      value: "",
      image: "/logos/social/linkedin.svg",
      link: "https://www.linkedin.com/in/viniciusraniey/",
    },
    {
      name: "Twitter",
      value: "",
      image: "/logos/social/x.svg",
      link: "#",
    },
    {
      name: "GitHub",
      value: "",
      image: "/logos/social/github.svg",
      link: "https://github.com/VncsRaniery",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid gap-8 max-w-6xl mx-auto px-4 md:grid-cols-2"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white/90">
              Enviar uma menssagem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  placeholder="Seu nome"
                  className="bg-zinc-700/50 border-zinc-600/50 text-white h-12 w-full 
                           focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <Input
                  placeholder="Seu Email"
                  type="email"
                  className="bg-zinc-700/50 border-zinc-600/50 text-white h-12 w-full 
                           focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Sua menssagem"
                  className="bg-zinc-700/50 border-zinc-600/50 text-white min-h-[200px] w-full 
                           focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 
                       hover:from-blue-600 hover:to-purple-600 h-12 text-lg
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                {isSubmitting ? "Enviando..." : "Enviar Menssagem"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="bg-zinc-800/50 border-zinc-700/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white/90">
              Conecte-se comigo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card
                    className="bg-zinc-700/50 border-zinc-600/50 overflow-hidden
                               transform transition-all duration-300 ease-in-out
                               hover:scale-105 hover:bg-zinc-600/50"
                  >
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div
                        className="relative w-12 h-12 rounded-xl overflow-hidden
                                  bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl
                                  group-hover:from-blue-500/30 group-hover:to-purple-500/30
                                  transition-all duration-300"
                      >
                        <Image
                          src={social.image}
                          alt={social.name}
                          layout="fill"
                          objectFit="cover"
                          className="opacity-80 group-hover:opacity-100"
                        />
                      </div>
                      <div>
                        <h3 className="text-white/90 font-medium">
                          {social.name}
                        </h3>
                        <p className="text-white/60 text-sm group-hover:text-white/80">
                          {social.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
