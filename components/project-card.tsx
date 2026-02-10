'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Project } from '@/lib/projects-data';

export function ProjectCard({ project, onClick }: { project: Project; onClick: (project: Project) => void }) {
  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
      onClick={() => onClick(project)}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      <div className="grid sm:grid-cols-[12rem_1fr]">
        <div className="relative h-40 sm:h-0 sm:min-h-full overflow-hidden">
          <Image
            src={project.images[0] || '/placeholder.svg'}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-medium group-hover:text-accent transition-colors">{project.title}</h2>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.description}</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-muted-foreground">{project.year}</span>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          {project.subProjects.length > 0 && (
            <p className="text-xs text-muted-foreground mt-3">
              {project.subProjects.length} sub-project
              {project.subProjects.length > 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
