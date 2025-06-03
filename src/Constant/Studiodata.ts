// src/data/platforms.ts

import { Users, AppWindow, Brain, Cloud, Store } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface PlatformItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const platforms: PlatformItem[] = [
  { 
    title: "Agent Studio",
    description: "Turn enterprise workflows into AI-powered agents and copilots.",
    href: "#",
    icon: Users
  },
  { 
    title: "App Studio",
    description: "Ideas to Applications in Minutes. Deploy Anywhere. No Code Needed.",
    href: "#",
    icon: AppWindow
  },
  { 
    title: "Model Studio",
    description: "Build, fine-tune, and scale LLMs - elegantly tailored to your business.",
    href: "#",
    icon: Brain
  },
  { 
    title: "Cloud Studio",
    description: "Flexible AI deployment - optimized to scale on any cloud or on-premises.",
    href: "#",
    icon: Cloud
  },
  { 
    title: "AI Marketplace",
    description: "Your AI destination for enterprise-ready solutions, deployed in minutes.",
    href: "#",
    icon: Store
  }
];
    