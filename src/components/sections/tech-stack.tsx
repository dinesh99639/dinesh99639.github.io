import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Server, Database, Cloud, ChevronRight, Code2, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

export function TechStack() {
    const [activeTab, setActiveTab] = useState("frontend")

    const categories = [
        {
            id: "frontend",
            title: "Frontend Engineering",
            icon: Layout,
            description: "I build accessible, pixel-perfect web experiences.",
            skills: [
                { name: "React.js", level: "Expert" },
                { name: "Angular", level: "Intermediate" },
                { name: "Bootstrap", level: "Expert" },
                { name: "Material UI", level: "Expert" },
                { name: "Redux", level: "Advanced" },
                // { name: "HTML5 & CSS3", level: "Expert" },
                { name: "React Native", level: "Beginner" },
            ]
        },
        {
            id: "backend",
            title: "Backend Development",
            icon: Server,
            description: "Scalable server-side architectures and APIs.",
            skills: [
                { name: "Node.js", level: "Advanced" },
                { name: "Express.js", level: "Advanced" },
                { name: "Spring Boot", level: "Proficient" },
                { name: "REST APIs", level: "Expert" },
                { name: "Microservices", level: "Intermediate" },
                { name: "GraphQL", level: "Intermediate" }
            ]
        },
        {
            id: "database",
            title: "Database & Storage",
            icon: Database,
            description: "Optimized data persistence and schema design.",
            skills: [
                { name: "PostgreSQL", level: "Advanced" },
                { name: "MongoDB", level: "Advanced" },
                { name: "Redis", level: "Intermediate" },
                { name: "MySQL", level: "Advanced" },
            ]
        },
        {
            id: "devops",
            title: "Cloud & DevOps",
            icon: Cloud,
            description: "Deployment, CI/CD, and infrastructure management.",
            skills: [
                { name: "AWS", level: "Intermediate" },
                { name: "Docker", level: "Advanced" },
                { name: "Kubernetes", level: "Intermediate" },
                { name: "Git & GitHub", level: "Expert" },
            ]
        },
        {
            id: "core",
            title: "Core Technologies",
            icon: Code2,
            description: "The fundamental languages and concepts that power my work.",
            skills: [
                { name: "JavaScript (ES6+)", level: "Expert" },
                { name: "TypeScript", level: "Expert" },
                { name: "Java", level: "Proficient" },
                { name: "Python", level: "Intermediate" },
                { name: "php", level: "Advanced" },
                { name: "C / C++", level: "Intermediate" },
            ]
        },
    ]

    const activeContent = categories.find(c => c.id === activeTab)

    return (
        <section id="tech" className="py-24 bg-background border-t border-border/70">
            <div className="container px-4 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                        <Layers size={14} />
                        Expertise
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight mb-4">
                        Technical <span className="text-gradient">Proficiency</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-4 space-y-2"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                aria-label={`View ${cat.title} skills`}
                                className={cn(
                                    "w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group border",
                                    activeTab === cat.id
                                        ? "bg-secondary border-primary/20 shadow-sm"
                                        : "bg-transparent border-transparent hover:bg-secondary/50 hover:border-border/70"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "p-2 rounded-lg transition-colors",
                                        activeTab === cat.id ? "bg-background text-primary" : "bg-secondary/50 text-muted-foreground group-hover:text-foreground"
                                    )}>
                                        <cat.icon size={20} />
                                    </div>
                                    <span className={cn(
                                        "font-medium transition-colors",
                                        activeTab === cat.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                    )}>
                                        {cat.title}
                                    </span>
                                </div>
                                {activeTab === cat.id && (
                                    <motion.div layoutId="arrow">
                                        <ChevronRight size={16} className="text-primary" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-8"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-card border border-border/70 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden"
                            >
                                {/* Background Decoration */}
                                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                                    {activeContent && <activeContent.icon size={300} />}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold mb-2">{activeContent?.title}</h3>
                                        <p className="text-muted-foreground">{activeContent?.description}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {activeContent?.skills.map((skill, i) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-center justify-between p-4 bg-background/50 border border-border/70 rounded-xl hover:border-primary/30 hover:bg-background transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-primary/50" />
                                                    <span className="font-semibold">{skill.name}</span>
                                                </div>
                                                <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                                                    {skill.level}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
