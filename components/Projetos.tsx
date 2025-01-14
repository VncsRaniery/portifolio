"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Github, ExternalLink, Star, GitFork, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import {
  fetchGitHubRepos,
  GitHubRepo,
} from "@/app/api/github/githubAPI-projetos";

const GITHUB_USERNAME = "VncsRaniery";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("featured");
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { value: "featured", label: "Destaques" },
    { value: "website", label: "Websites" },
    { value: "estudos", label: "Estudos" },
    { value: "all", label: "Todos os Projetos" },
  ];

  useEffect(() => {
    async function loadRepos() {
      setIsLoading(true);
      try {
        const data = await fetchGitHubRepos(GITHUB_USERNAME);
        setRepos(data);
      } catch (fetchError) {
        console.error("Error fetching GitHub repos:", fetchError);
      } finally {
        setIsLoading(false);
      }
    }

    loadRepos();
  }, []);

  const filteredRepos = repos.filter((repo) => {
    if (selectedCategory === "featured") {
      return repo.topics.includes("destaque");
    }
    if (selectedCategory === "all") {
      return true;
    }
    return repo.topics.includes(selectedCategory);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto px-4"
    >
      <div className="space-y-8">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-bold text-white/90 mb-4">
            Meus Projetos
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Uma coleção do meu trabalho, incluindo projetos de destaque,
            estudos, materiais e experimentos pessoais.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <nav className="flex justify-center items-center bg-gradient-to-r bg-zinc-800/50 rounded-full p-1 mb-8 overflow-x-auto">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 relative ${
                  selectedCategory === category.value
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
                {selectedCategory === category.value && (
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full z-10"
                    layoutId="activeCategory"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Skeleton className="h-48 w-full bg-zinc-700" />
                </motion.div>
              ))
            ) : filteredRepos.length > 0 ? (
              filteredRepos.map((repo) => (
                <motion.div key={repo.name} variants={itemVariants}>
                  <Card className="bg-zinc-800/50 border-zinc-700/50 overflow-hidden group transform transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={repo.imageUrl || "/placeholder.svg"}
                          alt={repo.name}
                          width={600}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <motion.div
                          className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="flex space-x-4">
                            <motion.a
                              href={repo.htmlUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-zinc-800/80 p-2 rounded-full text-white hover:text-blue-400 hover:bg-zinc-700/80 transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github className="w-6 h-6" />
                            </motion.a>
                            {repo.homepage && (
                              <motion.a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-800/80 p-2 rounded-full text-white hover:text-blue-400 hover:bg-zinc-700/80 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-6 h-6" />
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white/90 mb-2">
                            {repo.name}
                          </h3>
                          <p className="text-white/70 mb-4">
                            {repo.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {repo.topics.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-zinc-700/50 text-white/70"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4 pt-4 border-t border-zinc-700/30">
                          <div className="flex items-center space-x-2 text-white/70">
                            <Star className="w-4 h-4" />
                            <span>{repo.stargazersCount || 0}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-white/70">
                            <GitFork className="w-4 h-4" />
                            <span>{repo.forksCount || 0}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center w-full col-span-1 md:col-span-2"
              >
                <Card className="bg-zinc-800/50 border-zinc-700/50 p-6 text-center flex flex-col items-center mt-4">
                  <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                  <p className="text-white/90 text-lg">
                    Nenhum projeto foi encontrado!
                  </p>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
