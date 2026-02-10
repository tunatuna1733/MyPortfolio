'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Project } from '@/lib/projects-data';

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between gap-4 pr-6">
            <div>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
          </div>
          <DialogDescription className="text-left text-white leading-relaxed pt-1">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={image}>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-muted/20">
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {project.images.length > 1 && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Carousel>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {project.subProjects.length > 0 && (
          <div className="pt-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Sub-projects</h3>
            <div className="grid gap-3">
              {project.subProjects.map((sub) => (
                <div key={sub.title} className="rounded-lg border border-border bg-secondary/30 p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-medium text-foreground">{sub.title}</h4>
                    <div className="flex gap-2 flex-wrap">
                      {sub.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent transition-colors shrink-0"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{sub.description}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {sub.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[11px] px-1.5 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
