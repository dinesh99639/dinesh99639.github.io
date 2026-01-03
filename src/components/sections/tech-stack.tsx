import { motion } from "framer-motion"
import { Database, Globe, Layout, Server, Settings, Smartphone } from "lucide-react"

const bentoItems = [
    {
        title: "Frontend & Mobile",
        description: "Responsive web & native apps.",
        icon: <Layout className="h-6 w-6 text-blue-500" />,
        tags: ["React.js", "React Native", "Angular", "TypeScript", "HTML/CSS", "Bootstrap", "Material UI"],
        className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    },
    {
        title: "Backend Core",
        description: "Robust server-side logic.",
        icon: <Server className="h-6 w-6 text-green-500" />,
        tags: ["Node.js", "Express.js", "Java", "Spring Boot", "Python", "PHP"],
        className: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Database",
        description: "Efficient data storage.",
        icon: <Database className="h-6 w-6 text-pink-500" />,
        tags: ["MySQL", "MongoDB"],
        className: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Cloud & DevOps",
        description: "Deployment & infrastructure.",
        icon: <Globe className="h-6 w-6 text-orange-500" />,
        tags: ["AWS", "Git", "Docker", "VS Code"],
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
]

export function TechStack() {
    return (
        <section id="tech" className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">Expertise</span>
                    <h2 className="text-4xl font-bold tracking-tight mb-4">
                        Technical <span className="text-gradient">Proficiency</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolset for building end-to-end solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {bentoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-card/50 border hover:border-primary/50 transition-colors p-6 rounded-3xl flex flex-col justify-between group ${item.className}`}
                        >
                            <div className="mb-4">
                                <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {item.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-background border rounded-full text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
