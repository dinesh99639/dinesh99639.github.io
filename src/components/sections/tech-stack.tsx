import { useState, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Server, Database, Cloud, Code2, Layers, ArrowUpRight, Brain } from "lucide-react"
import { 
    SiReact, SiAngular, SiBootstrap, SiMui, SiRedux,
    SiNodedotjs, SiExpress, SiSpringboot, SiPostman, SiGraphql,
    SiPostgresql, SiMongodb, SiRedis, SiMysql,
    SiDocker, SiKubernetes, SiGit,
    SiJavascript, SiTypescript, SiPython, SiPhp, SiCplusplus, SiRust,
    SiOpenai, SiLangchain, SiHuggingface, SiOllama
} from "react-icons/si"
import { FaJava, FaNetworkWired, FaAws, FaRobot } from "react-icons/fa"
import { cn } from "@/lib/utils"

const categories = [
    {
        id: "frontend",
        name: "Frontend",
        title: "Frontend Engineering",
        icon: Layout,
        description: "I build accessible, pixel-perfect web experiences.",
        skills: [
            { name: "React.js", level: "Expert", icon: SiReact, color: "#61DAFB", link: "https://react.dev" },
            { name: "Angular", level: "Intermediate", icon: SiAngular, color: "#DD0031", link: "https://angular.dev" },
            { name: "Bootstrap", level: "Expert", icon: SiBootstrap, color: "#7952B3", link: "https://getbootstrap.com" },
            { name: "Material UI", level: "Expert", icon: SiMui, color: "#007FFF", link: "https://mui.com" },
            { name: "Redux", level: "Advanced", icon: SiRedux, color: "#764ABC", link: "https://redux.js.org" },
            { name: "React Native", level: "Beginner", icon: SiReact, color: "#61DAFB", link: "https://reactnative.dev" },
        ]
    },
    {
        id: "backend",
        name: "Backend",
        title: "Backend Development",
        icon: Server,
        description: "Scalable server-side architectures and APIs.",
        skills: [
            { name: "Node.js", level: "Advanced", icon: SiNodedotjs, color: "#339933", link: "https://nodejs.org" },
            { name: "Express.js", level: "Advanced", icon: SiExpress, color: "#828282", link: "https://expressjs.com" },
            { name: "Spring Boot", level: "Proficient", icon: SiSpringboot, color: "#6DB33F", link: "https://spring.io/projects/spring-boot" },
            { name: "REST APIs", level: "Expert", icon: SiPostman, color: "#FF6C37", link: "https://www.restapitutorial.com" },
            { name: "Microservices", level: "Intermediate", icon: FaNetworkWired, color: "#008080", link: "https://microservices.io" },
            { name: "GraphQL", level: "Intermediate", icon: SiGraphql, color: "#E10098", link: "https://graphql.org" }
        ]
    },
    {
        id: "database",
        name: "Database",
        title: "Database & Storage",
        icon: Database,
        description: "Optimized data persistence and schema design.",
        skills: [
            { name: "PostgreSQL", level: "Advanced", icon: SiPostgresql, color: "#4169E1", link: "https://www.postgresql.org" },
            { name: "MongoDB", level: "Advanced", icon: SiMongodb, color: "#47A248", link: "https://www.mongodb.com" },
            { name: "Redis", level: "Intermediate", icon: SiRedis, color: "#DC382D", link: "https://redis.io" },
            { name: "MySQL", level: "Advanced", icon: SiMysql, color: "#4479A1", link: "https://www.mysql.com" },
        ]
    },
    {
        id: "devops",
        name: "DevOps",
        title: "Cloud & DevOps",
        icon: Cloud,
        description: "Deployment, CI/CD, and infrastructure management.",
        skills: [
            { name: "AWS", level: "Intermediate", icon: FaAws, color: "#FF9900", link: "https://aws.amazon.com" },
            { name: "Docker", level: "Advanced", icon: SiDocker, color: "#2496ED", link: "https://www.docker.com" },
            { name: "Kubernetes", level: "Intermediate", icon: SiKubernetes, color: "#326CE5", link: "https://kubernetes.io" },
            { name: "Git & GitHub", level: "Expert", icon: SiGit, color: "#F05032", link: "https://github.com" },
        ]
    },
    {
        id: "core",
        name: "Core",
        title: "Core Technologies",
        icon: Code2,
        description: "The fundamental languages and concepts that power my work.",
        skills: [
            { name: "JavaScript (ES6+)", level: "Expert", icon: SiJavascript, color: "#F7DF1E", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "TypeScript", level: "Expert", icon: SiTypescript, color: "#3178C6", link: "https://www.typescriptlang.org" },
            { name: "Rust", level: "Intermediate", icon: SiRust, color: "#CE412B", link: "https://www.rust-lang.org" },
            { name: "Java", level: "Proficient", icon: FaJava, color: "#007396", link: "https://www.oracle.com/java/" },
            { name: "Python", level: "Intermediate", icon: SiPython, color: "#3776AB", link: "https://www.python.org" },
            { name: "php", level: "Advanced", icon: SiPhp, color: "#777BB4", link: "https://www.php.net" },
            { name: "C / C++", level: "Intermediate", icon: SiCplusplus, color: "#00599C", link: "https://isocpp.org" },
        ]
    },
    {
        id: "ai",
        name: "Artificial Intelligence",
        title: "AI & Generative Engineering",
        icon: Brain,
        description: "I build autonomous agents, cognitive workflows, and production-grade GenAI pipelines.",
        skills: [
            { name: "LangGraph", level: "Advanced", icon: SiLangchain, color: "#00A3A0", link: "https://www.langchain.com/langgraph" },
            { name: "Agentic AI", level: "Intermediate", icon: FaRobot, color: "#FF5722", link: "https://www.activeloop.ai/resources/agentic-ai-harnessing-the-power-of-ai-agents/" },
            { name: "LLM & GenAI", level: "Intermediate", icon: SiOpenai, color: "#10A37F", link: "https://openai.com" },
            { name: "LangChain", level: "Intermediate", icon: SiLangchain, color: "#1C3C3A", link: "https://www.langchain.com" },
            { name: "Ollama", level: "Advanced", icon: SiOllama, color: "#1F2937", link: "https://ollama.com" },
            { name: "Hugging Face", level: "Advanced", icon: SiHuggingface, color: "#FFD21E", link: "https://huggingface.co" },
        ]
    },
];

export const TechStack = memo(function TechStack() {
    const [activeTab, setActiveTab] = useState(categories[0].id)

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
                                        "whitespace-nowrap lg:whitespace-normal text-left px-5 py-3 lg:px-6 lg:py-4 rounded-xl flex items-center gap-3 group border shrink-0 lg:shrink cursor-pointer",
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
                                        {cat.name}
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
                                            <motion.a
                                                key={skill.name}
                                                href={skill.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-center justify-between p-4 bg-background/50 border border-border/70 rounded-xl hover:border-primary/30 hover:bg-background transition-[background-color,border-color,box-shadow] duration-200 hover:shadow-md cursor-pointer group/item"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div 
                                                        className="p-2 rounded-lg bg-secondary/80 text-muted-foreground group-hover/item:bg-primary/10 transition-colors shrink-0 flex items-center justify-center"
                                                        style={{ "--brand-color": skill.color } as React.CSSProperties}
                                                    >
                                                        <skill.icon 
                                                            size={18} 
                                                            style={{ color: skill.color }} 
                                                            className="transition-transform duration-300 group-hover/item:scale-110"
                                                        />
                                                    </div>
                                                    <span className="font-semibold text-sm sm:text-base">{skill.name}</span>
                                                </div>
                                                
                                                <div className="relative flex items-center justify-end h-6 min-w-[80px]">
                                                    <span className="text-[10px] md:text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md transition-all duration-300 transform group-hover/item:-translate-x-5 group-hover/item:text-primary">
                                                        {skill.level}
                                                    </span>
                                                    <div className="absolute right-0 text-muted-foreground group-hover/item:text-primary opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/item:translate-x-0 flex items-center justify-center shrink-0">
                                                        <ArrowUpRight size={14} />
                                                    </div>
                                                </div>
                                            </motion.a>
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
