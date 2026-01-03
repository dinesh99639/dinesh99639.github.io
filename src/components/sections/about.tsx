import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Me</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My journey from writing my first line of code to architecting complex web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold">My Story</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I started my coding journey 5 years ago... [Placeholder for user bio].
                            I specialize in React and Node.js ecosystems, building scalable SaaS platforms.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            When I'm not coding, I contribute to open source, write technical articles, and mentor aspiring developers.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Experience</h3>

                        <div className="relative pl-8 border-l border-border space-y-8">
                            <div className="relative">
                                <span className="absolute -left-[41px] p-2 bg-background border rounded-full">
                                    <Briefcase className="h-4 w-4 text-primary" />
                                </span>
                                <h4 className="font-semibold text-lg">Senior Frontend Engineer</h4>
                                <p className="text-sm text-primary font-medium">TechCorp Inc. • 2023 - Present</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Leading frontend architecture, optimizing performance, and mentoring junior devs.
                                </p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[41px] p-2 bg-background border rounded-full">
                                    <Briefcase className="h-4 w-4 text-primary" />
                                </span>
                                <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                                <p className="text-sm text-primary font-medium">StartupX • 2021 - 2023</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Built MVP from scratch, scaled to 10k users, handled AWS deployment.
                                </p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[41px] p-2 bg-background border rounded-full">
                                    <GraduationCap className="h-4 w-4 text-primary" />
                                </span>
                                <h4 className="font-semibold text-lg">BS Computer Science</h4>
                                <p className="text-sm text-primary font-medium">University of Tech • 2017 - 2021</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Specialized in Software Engineering and AI.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
