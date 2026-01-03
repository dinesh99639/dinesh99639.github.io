import { motion } from "framer-motion"

// Data could be moved to src/data/skills.ts later
const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "Redux"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "GraphQL"],
    "DevOps": ["Docker", "AWS", "CI/CD", "Vercel", "Git", "Linux"],
    "Tools": ["VS Code", "Figma", "Postman", "Jest", "Vite", "Webpack"]
}

export function TechStack() {
    return (
        <section id="tech" className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Tech Stack</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My preferred weapons of choice for building robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                    >
                                        {skill}
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
