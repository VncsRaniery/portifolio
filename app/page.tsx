"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  House,
  User,
  GraduationCap,
  Award,
  Code,
  FolderGit2,
  Github,
  Mail,
  Menu,
} from "lucide-react";
import Home from "@/components/Home";
import About from "@/components/Sobre";
import Education from "@/components/Education";
import Certificates from "@/components/Certificados";
import Contact from "@/components/Contato";
import Projects from "@/components/Projetos";
import Skills from "@/components/Habilidades";

const navItems = [
  { name: "Home", icon: House },
  { name: "Sobre", icon: User },
  { name: "Educação", icon: GraduationCap },
  { name: "Certificados", icon: Award },
  { name: "Skills", icon: Code },
  { name: "Projetos", icon: FolderGit2 },
  { name: "Github Status", icon: Github },
  { name: "Contato", icon: Mail },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderNavigation = () => (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.name}
            variant="ghost"
            className={`w-full justify-start ${
              activeSection === item.name
                ? "text-white bg-white/10"
                : "text-white/70 hover:text-white hover:bg-zinc-800/50"
            }`}
            onClick={() => {
              setActiveSection(item.name);
              setIsMenuOpen(false);
            }}
          >
            <Icon className="mr-2 h-4 w-4" />
            {item.name}
          </Button>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500 rounded-full filter blur-[200px] opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500 rounded-full filter blur-[200px] opacity-20" />

      <Card className="w-full max-w-[1400px] h-[750px] bg-zinc-900/30 backdrop-blur-xl rounded-2xl overflow-hidden border-0 shadow-2xl">
        <div className="p-4 flex items-center bg-zinc-900/50 border-b border-zinc-700/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>

          <div className="flex-1 flex justify-center items-center gap-6">
            <span className="text-white/90 text-base font-medium">
              {activeSection === "Home"
                ? "Portifolio"
                : `Portifolio - ${activeSection}`}
            </span>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5 text-white/60" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] bg-zinc-900/95 border-zinc-700/30"
            >
              <div className="py-6">
                <div className="flex items-center mb-8">
                  <Avatar className="w-16 h-16 mr-4">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h2 className="text-xl font-semibold text-white">
                      John Doe
                    </h2>
                    <p className="text-sm text-white/60">@johndoe</p>
                  </div>
                </div>
                {renderNavigation()}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex h-[calc(100%-60px)]">
          <div className="w-[450px] border-r border-zinc-700/30 hidden lg:block">
            <ScrollArea className="h-full">
              <div className="p-6">
                <div className="flex items-center mb-8">
                  <Avatar className="w-16 h-16 mr-4">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h2 className="text-xl font-semibold text-white">
                      John Doe
                    </h2>
                    <p className="text-sm text-white/60">@johndoe</p>
                  </div>
                </div>

                {renderNavigation()}
              </div>
            </ScrollArea>
          </div>

          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex flex-col items-center justify-center p-12 min-h-full">
                {activeSection === "Home" && <Home />}
                {activeSection === "Sobre" && <About />}
                {activeSection === "Educação" && <Education />}
                {activeSection === "Certificados" && <Certificates />}
                {activeSection === "Skills" && <Skills />}
                {activeSection === "Projetos" && <Projects />}
                {activeSection === "Github Status"}
                {activeSection === "Contato" && <Contact />}
              </div>
            </ScrollArea>
          </div>
        </div>
      </Card>
    </div>
  );
}
