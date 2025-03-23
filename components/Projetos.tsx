"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Github, ExternalLink, Star, GitFork, AlertCircle } from 'lucide-react';
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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="space-y-6 sm:space-y-8">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white/90 mb-2 sm:mb-4">
            Meus Projetos
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto mb-6 sm:mb-8">
            Uma coleção do meu trabalho, incluindo projetos de destaque,
            estudos, materiais e experimentos pessoais.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <nav className="flex flex-wrap justify-center items-center bg-gradient-to-r bg-zinc-800/50 rounded-full p-1 mb-6 sm:mb-8 overflow-x-auto">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 relative m-1 ${
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
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
                  <Card className="bg-zinc-800/50 border-zinc-700/50 overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] h-[32rem] flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative h-48 flex-shrink-0">
                        <Image
                          src={repo.imageUrl || "/placeholder.svg"}
                          alt={repo.name}
                          width={600}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <h3 className="text-lg sm:text-xl font-semibold text-white/90 mb-1 sm:mb-2">
                            {repo.name}
                          </h3>
                          <p className="text-sm text-white/70 mb-2 sm:mb-4 line-clamp-3">
                            {repo.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {repo.topics.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-zinc-700/50 text-white/70 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4 pt-3 sm:pt-4 border-t border-zinc-700/30 mt-auto">
                          <div className="flex items-center space-x-1 sm:space-x-2 text-white/70">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm">{repo.stargazersCount || 0}</span>
                          </div>
                          <div className="flex items-center space-x-1 sm:space-x-2 text-white/70">
                            <GitFork className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm">{repo.forksCount || 0}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <a
                        href={repo.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-800/80 p-2 rounded-full text-white hover:text-blue-400 hover:bg-zinc-700/80 transition-all"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zinc-800/80 p-2 rounded-full text-white hover:text-blue-400 hover:bg-zinc-700/80 transition-all"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center w-full col-span-1 sm:col-span-2"
              >
                <Card className="bg-zinc-800/50 border-zinc-700/50 p-4 sm:p-6 text-center flex flex-col items-center mt-4">
                  <AlertCircle className="w-8 h-8 sm:w-12 sm:h-12 text-red-500 mb-2 sm:mb-4" />
                  <p className="text-white/90 text-base sm:text-lg">
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