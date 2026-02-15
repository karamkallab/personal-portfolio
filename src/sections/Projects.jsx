import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

import botantiqueImg from "@/Projects/Botantique.png";
import budgetImg from "@/Projects/BudgetPrognos.png";
import chattImg from "@/Projects/ChattSystem.png";
import localZeroImg from "@/Projects/localZero.png";
import plantImg from "@/Projects/PlantWidget.png";
import spellingImg from "@/Projects/SpellingChecker.png";
import vehileImg from "@/Projects/vclmonitoring.png";
export const projects = [
 {
  title: "Vehicle Monitoring System",
  description:
    "A vehicle monitoring and tracking system that provides real-time data insights and status updates. Designed to monitor performance metrics and improve fleet efficiency.",
  image: vehileImg,
  tags: ["React", "Node.js", "Monitoring", "Data Visualization"],
  /*link: "",*/
  github: "https://github.com/karamkallab/vehicle-diagnostic-dashboard",
  },
  {
    title: "Botantique E-commerce Platform",
    description:
      "An e-commerce website developed for a real client, featuring Klarna payment integration, dynamic PostNord shipping, and product management using WordPress and WooCommerce.",
    image: botantiqueImg,
    tags: ["WordPress", "WooCommerce", "PHP", "Klarna API", "PostNord API"],
    link: "https://www.botantique.se/",
    github: "https://github.com/karamkallab/Botantique.se",
  },
  {
    title: "Budget Forecast Web Application",
    description:
      "A web application for visualizing and forecasting personal finances. Users can track income and expenses and view projected balances through interactive charts and risk indicators.",
    image: budgetImg,
    tags: ["React", "Tailwind CSS", "Node.js", "Data Visualization"],
    /*link: "",*/
    github: "#",
  },
  {
    title: "Client-Server Chat System",
    description:
      "A real-time chat system built using a client/server architecture, supporting multiple connected users and message exchange through network communication.",
    image: chattImg,
    tags: ["Java", "Sockets", "Networking", "Client/Server"],
    /*link: "",*/
    github: "#",
  },
  {
    title: "LocalZero Sustainability Platform",
    description:
      "A collaborative platform for neighborhood sustainability initiatives, allowing users to create, manage, and track eco-friendly actions with real-time communication and user authentication.",
    image: localZeroImg,
    tags: ["Java", "Spring Boot", "PostgreSQL", "WebSockets", "REST API"],
    /*link: "",*/
    github: "https://github.com/karamkallab/LocalZero_mini_p",
  },
  {
    title: "My Happy Plant",
    description:
      "A plant-care management application where users can log in, track their plants, and retrieve plant data via external APIs. Includes authentication and database storage.",
    image: plantImg,
    tags: ["React", "Next.js", "Prisma", "Tailwind CSS", "APIs"],
    /*link: "",*/
    github: "https://github.com/karamkallab/MyHappyPlants",
  },
  {
    title: "Grammar Checker for Social Media",
    description:
      "A tool that checks grammar before publishing social media posts by integrating external spell-checking and publishing APIs. Built with a Spring Boot backend and web-based frontend.",
    image: spellingImg,
    tags: ["Java", "Spring Boot", "REST API", "HTML", "JavaScript"],
    /*link: "",*/
    github: "https://github.com/karamkallab/BlueSkyProject",
  },
];

export const Projects = () => {
return (

    <section id="projects" className="py-32 relative overflow-hidden scroll-mt-24">
    {/* Bg glows */}
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
            {" "}
            make an impact.
            </span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
        </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
            <div
            key={idx}
            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
            {/* Image */}
            <div className="relative overflow-hidden aspect-video">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                to-transparent opacity-60"
                />
                {/* Overlay Links (only show if valid) */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.link && project.link !== "" && project.link !== "#" && (
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                    <ArrowUpRight className="w-5 h-5" />
                    </a>
                )}

                {project.github && project.github !== "" && project.github !== "#" && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                    <Github className="w-5 h-5" />
                    </a>
                )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <ArrowUpRight
                    className="w-5 h-5 
                text-muted-foreground group-hover:text-primary
                group-hover:translate-x-1 
                group-hover:-translate-y-1 transition-all"
                />
                </div>
                <p className="text-muted-foreground text-sm">
                {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                    <span
                    key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            </div>
        ))}
        </div>

        {/* View All CTA (commented out) */}
        {/**
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
        <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
        </AnimatedBorderButton>
        </div>
        */}
    </div>
    </section>
);
};