import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Server, Database, Cloud, ChevronRight, Code2 } from "lucide-react"
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
                { name: "Tailwind CSS", level: "Expert" },
                { name: "Angular", level: "Proficient" },
                { name: "Redux", level: "Advanced" },
                { name: "HTML5 & CSS3", level: "Expert" }
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
                { name: "Prisma ORM", level: "Advanced" },
                { name: "Elasticsearch", level: "Intermediate" }
            ]
        },
        {
            id: "devops",
            title: "Cloud & DevOps",
            icon: Cloud,
            description: "Deployment, CI/CD, and infrastructure management.",
            skills: [
                { name: "AWS (EC2, S3, Lambda)", level: "Advanced" },
                { name: "Docker", level: "Advanced" },
                { name: "Kubernetes", level: "Intermediate" },
                { name: "Git & GitHub", level: "Expert" },
                { name: "CI/CD Pipelines", level: "Advanced" },
                { name: "Linux Administration", level: "Intermediate" }
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
                { name: "SQL", level: "Advanced" },
            ]
        },
    ]

    const activeContent = categories.find(c => c.id === activeTab)

    return (
        <section id="tech" className="py-24 bg-background border-t border-border/50">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Expertise</span>
                    <h2 className="text-4xl font-bold tracking-tight mb-4">
                        Technical <span className="text-gradient">Proficiency</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Navigation */}
                    <div className="lg:col-span-4 space-y-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={cn(
                                    "w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group border",
                                    activeTab === cat.id
                                        ? "bg-secondary border-primary/20 shadow-sm"
                                        : "bg-transparent border-transparent hover:bg-secondary/50 hover:border-border/50"
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
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden"
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
                                                className="flex items-center justify-between p-4 bg-background/50 border border-border/50 rounded-xl hover:border-primary/30 hover:bg-background transition-colors"
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
                    </div>
                </div>
            </div>
        </section>
    )
}
