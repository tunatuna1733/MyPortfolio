'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { ProjectCard } from '@/components/project-card';
import { ProjectModal } from '@/components/project-modal';
import { type Project, projects } from '@/lib/projects-data';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { theme } = useTheme();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="flex flex-col items-center gap-6 py-20">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-border">
            <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" priority />
          </div>
          <h1 className="text-2xl font-medium">tunatuna1733</h1>
          <a
            href="https://github.com/tunatuna1733"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === 'dark' ? 'white' : 'black'}
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </section>

        <section id="projects" className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-2 text-balance">Projects</h2>
          <p className="text-muted-foreground mb-10">A collection of my recent work</p>
          <div className="grid gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} onClick={handleProjectClick} />
            ))}
          </div>
        </section>
      </main>

      <ProjectModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
