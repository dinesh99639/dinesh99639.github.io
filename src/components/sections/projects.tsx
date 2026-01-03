import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "GSecureLock",
        description: "Secure credential management solution using encrypted Google Drive storage. Reduced password recall errors by 70%.",
        tags: ["Security", "Encryption", "Google Drive API"],
        links: { demo: "#", github: "https://github.com/dinesh99639" },
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "TalentOnCloud",
        description: "Collaborative social media prototype with post management, live event scheduling, and real-time chat.",
        tags: ["React", "Social Media", "Real-time"],
        links: { demo: "#", github: "https://github.com/dinesh99639" },
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "HackTheQuarantine",
        description: "Hackathon management system for 100+ users with registration and live leaderboards.",
        tags: ["Event Management", "React", "Node.js"],
        links: { demo: "#", github: "https://github.com/dinesh99639" },
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Billing System",
        description: "React-based invoice application decreasing manual documentation by 80%.",
        tags: ["React", "FinTech", "Automation"],
        links: { demo: "#", github: "https://github.com/dinesh99639" },
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2672&auto=format&fit=crop"
    },
    {
        title: "Security Pass",
        description: "Advanced login system with anti-shoulder-surfing protection requiring 16+ unique combinations.",
        tags: ["Security", "Authentication", "Algorithm"],
        links: { demo: "#", github: "https://github.com/dinesh99639" },
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop"
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-4">
                        Portfolio
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of innovative solutions solving real-world security and operational challenges.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <Button variant="outline" size="sm" asChild className="w-full">
                                        <a href={project.links.github} target="_blank" rel="noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
