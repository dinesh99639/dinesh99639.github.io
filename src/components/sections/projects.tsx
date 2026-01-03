import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    FileCode2,
    FileJson,
    FileText,
    FolderOpen,
    ChevronRight,
    Github,
    ExternalLink,
    Layers,
    Terminal,
    Search,
    Rocket,
    Sparkles,
    Plus
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
    {
        id: "gsecure",
        title: "GSecureLock",
        icon: FileCode2,
        color: "text-blue-500",
        extension: ".tsx",
        category: "Cybersecurity",
        tagline: "Credential Management with Zero-Knowledge Encryption",
        description: "A secure credential management solution leveraging encrypted Google Drive storage. It reduces password recall errors by 70%, ensuring critical data is both accessible and protected via a Zero-Knowledge architecture.",
        tags: ["React", "Google Drive API", "AES-256", "OAuth 2.0"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
        link: "https://github.com/dinesh99639",
        year: "2023",
        stats: "v2.4.0 • Built in 3 months"
    },
    {
        id: "talent",
        title: "TalentOnCloud",
        icon: FileText,
        color: "text-purple-500",
        extension: ".md",
        category: "Social Platform",
        tagline: "Real-time Collaboration & Event Scheduling",
        description: "A collaborative social media prototype featuring post management, live event scheduling, and real-time chat. Built to foster community engagement and real-time interaction.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
        link: "https://github.com/dinesh99639",
        year: "2023",
        stats: "v1.1.0 • 1k+ Real-time connections"
    },
    {
        id: "hack",
        title: "HackTheQuarantine",
        icon: FileJson,
        color: "text-amber-500",
        extension: ".json",
        category: "Event Tech",
        tagline: "High-Traffic Hackathon Management System",
        description: "A comprehensive hackathon management system handling registration and live leaderboards for 100+ concurrent users, ensuring smooth event operations during peak periods.",
        tags: ["React", "Node.js", "Express", "Firebase"],
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop",
        link: "https://github.com/dinesh99639",
        year: "2022",
        stats: "v1.0.0 • 100+ Live Users"
    },
    {
        id: "billing",
        title: "BillingSystem",
        icon: FileCode2,
        color: "text-emerald-500",
        extension: ".java",
        category: "FinTech",
        tagline: "Automated Invoice Generation & Tracking",
        description: "Automated invoice generation application decreasing manual documentation work by 80%. Streamlines financial workflows with precision and high auditability.",
        tags: ["React", "Redux", "Material UI", "Spring Boot"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop",
        link: "https://github.com/dinesh99639",
        year: "2022",
        stats: "v3.2.1 • 80% Automation increase"
    }
]

export function Projects() {
    const [activeId, setActiveId] = useState("gsecure")
    const activeProject = projects.find(p => p.id === activeId) || projects[0]

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <Terminal size={14} />
                        Source Explorer
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight mb-4"
                    >
                        Project <span className="text-gradient">Repository</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[700px] max-h-[85vh]"
                >
                    {/* Left Sidebar: Explorer */}
                    <div className="w-full md:w-64 lg:w-72 bg-secondary/20 border-r border-border/50 flex flex-col">
                        <div className="p-4 border-b border-border/50 bg-secondary/30 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                <FolderOpen size={14} className="text-primary" />
                                explorer
                            </span>
                            <Search size={14} className="text-muted-foreground opacity-50" />
                        </div>

                        <div className="flex-1 overflow-y-auto py-2">
                            <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-1">
                                portfolios / dinesh / projects
                            </div>
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    onClick={() => setActiveId(project.id)}
                                    className={cn(
                                        "w-full text-left px-4 py-2.5 flex items-center gap-3 group transition-colors duration-200 border-l-2",
                                        activeId === project.id
                                            ? "bg-secondary border-primary"
                                            : "bg-transparent border-transparent hover:bg-secondary/40"
                                    )}
                                >
                                    <project.icon size={16} className={cn(
                                        "transition-colors",
                                        activeId === project.id ? project.color : "text-muted-foreground group-hover:text-foreground"
                                    )} />
                                    <div className="flex flex-col">
                                        <span className={cn(
                                            "text-sm font-medium transition-colors",
                                            activeId === project.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                        )}>
                                            {project.title}{project.extension}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Stage: Editor Content */}
                    <div className="flex-1 flex flex-col bg-card/50">
                        {/* Editor Tabs (Mockup) */}
                        <div className="h-10 bg-secondary/30 border-b border-border/50 flex items-center overflow-x-auto">
                            <div className="flex h-full">
                                {projects.filter(p => p.id === activeId).map(p => (
                                    <div
                                        key={p.id}
                                        className="h-full bg-card border-r border-border/50 px-4 flex items-center gap-2 text-xs font-medium border-t-2 border-t-primary"
                                    >
                                        <p.icon size={12} className={p.color} />
                                        {p.title}{p.extension}
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 ml-2" />
                                    </div>
                                ))}
                                <div className="px-4 flex items-center text-muted-foreground opacity-30">
                                    <Plus size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Editor Body */}
                        <div className="flex-1 overflow-y-auto relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeId}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="p-6 md:p-10"
                                >
                                    {/* Breadcrumbs */}
                                    <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground mb-8 pb-4 border-b border-border/30">
                                        <span className="hover:text-primary transition-colors cursor-pointer">src</span>
                                        <ChevronRight size={10} />
                                        <span className="hover:text-primary transition-colors cursor-pointer">components</span>
                                        <ChevronRight size={10} />
                                        <span className="text-foreground">{activeProject.title}{activeProject.extension}</span>
                                    </div>

                                    <div className="flex flex-col lg:flex-row gap-10">
                                        {/* Visual Preview */}
                                        <div className="lg:w-1/2 space-y-6">
                                            <div className="relative group rounded-2xl overflow-hidden border border-border/50 bg-secondary/30 shadow-xl">
                                                <img
                                                    src={activeProject.image}
                                                    alt={activeProject.title}
                                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                    <Button asChild variant="secondary" size="sm" className="rounded-full gap-2">
                                                        <a href={activeProject.link} target="_blank" rel="noreferrer">
                                                            <ExternalLink size={14} /> Live Preview
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Technical Specs Table */}
                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                <div className="p-3 rounded-xl bg-secondary/20 border border-border/50">
                                                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Status</p>
                                                    <div className="text-xs font-mono text-primary flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                        DEPLOYED
                                                    </div>
                                                </div>
                                                <div className="p-3 rounded-xl bg-secondary/20 border border-border/50">
                                                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Version</p>
                                                    <p className="text-xs font-mono">{activeProject.stats.split(' • ')[0]}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <Button asChild size="lg" className="rounded-full gap-2 flex-1 md:flex-none px-8 shadow-xl shadow-primary/20">
                                                    <a href={activeProject.link} target="_blank" rel="noreferrer">
                                                        <Github size={18} /> View Source
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Content & Metadata */}
                                        <div className="lg:w-1/2 flex flex-col">
                                            <div className="space-y-4 mb-8">
                                                <div className="flex items-center gap-2">
                                                    <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 font-mono text-[10px]">
                                                        {activeProject.year}
                                                    </Badge>
                                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{activeProject.category}</span>
                                                </div>
                                                <h3 className="text-4xl font-bold tracking-tighter">{activeProject.title}</h3>
                                                <p className="text-lg font-medium text-foreground opacity-80 leading-relaxed italic border-l-2 border-primary pl-4">
                                                    "{activeProject.tagline}"
                                                </p>
                                            </div>

                                            <div className="space-y-6 mb-10">
                                                <div className="flex items-center gap-2 text-primary font-mono text-xs">
                                                    <FileText size={14} />
                                                    <span>Documentation</span>
                                                </div>
                                                <p className="text-muted-foreground text-base leading-relaxed">
                                                    {activeProject.description}
                                                </p>
                                            </div>

                                            <div className="space-y-4 mb-auto">
                                                <div className="flex items-center gap-2 text-primary font-mono text-xs">
                                                    <Layers size={14} />
                                                    <span>Stack_Architecture</span>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {activeProject.tags.map(tag => (
                                                        <Badge key={tag} variant="secondary" className="bg-secondary/80 font-mono text-[10px]">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Editor Footer (Status Bar) */}
                        <div className="h-6 bg-primary text-primary-foreground flex items-center justify-between px-4 text-[10px] font-mono tracking-tight cursor-default select-none">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <Rocket size={10} />
                                    <span>Main</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Sparkles size={10} />
                                    <span>Sync: OK</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span>UTF-8</span>
                                <span>TypeScript JSX</span>
                                <span>Spaces: 4</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
