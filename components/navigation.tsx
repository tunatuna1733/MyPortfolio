'use client';

import { ThemeToggle } from './theme-toggle';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium"></span>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">
              Projects
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
