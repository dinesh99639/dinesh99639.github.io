import { useState, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Server, Database, Cloud, Code2, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

export const TechStack = memo(function TechStack() {
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
        <section id="tech" className="py-24 bg-background border-t border-border/70 overflow-hidden">
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

                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Navigation: Horizontal scroll on mobile, Vertical list on desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-4"
                    >
                        <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    aria-label={`View ${cat.title} skills`}
                                    className={cn(
                                        "whitespace-nowrap lg:whitespace-normal text-left px-5 py-3 lg:px-6 lg:py-4 rounded-xl flex items-center gap-3 group border shrink-0 lg:shrink",
                                        activeTab === cat.id
                                            ? "bg-secondary border-primary/30 shadow-sm"
                                            : "bg-transparent border-transparent hover:bg-secondary/50 hover:border-border/70 transition-colors"
                                    )}
                                >
                                    <div className={cn(
                                        "p-1.5 lg:p-2 rounded-lg shrink-0",
                                        activeTab === cat.id ? "bg-primary text-white" : "bg-secondary/80 text-foreground group-hover:text-primary transition-colors"
                                    )}>
                                        <cat.icon size={18} />
                                    </div>
                                    <span className={cn(
                                        "font-bold text-sm lg:text-base tracking-tight",
                                        activeTab === cat.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                                    )}>
                                        {cat.id === 'frontend' ? 'Frontend' :
                                            cat.id === 'backend' ? 'Backend' :
                                                cat.id === 'database' ? 'Database' :
                                                    cat.id === 'devops' ? 'DevOps' : 'Core'}
                                    </span>
                                </button>
                            ))}
                        </div>
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
                                className="bg-card border border-border/70 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden gpu"
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
                                                className="flex items-center justify-between p-4 bg-background/50 border border-border/70 rounded-xl hover:border-primary/30 hover:bg-background transition-shadow"
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
})
