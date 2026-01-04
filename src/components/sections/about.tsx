import { useState, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, GraduationCap, Award, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"


export const About = memo(function About() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

    const experiences = [
        {
            role: "Consultant",
            company: "KPMG India",
            period: "Jan 2025 - Present",
            description: "Designed and implemented an organizational hierarchy system impacting 50,000+ employees. Improved workforce visibility by 40% and streamlined 15 administrative processes."
        },
        {
            role: "Specialist Programmer",
            company: "Infosys",
            period: "May 2024 - Dec 2024",
            description: "Led a cross-functional team of 4 developers. Engineered strict real-time chat solutions boosting engagement by 30%. Architected Spring Boot & Angular ticketing platform."
        },
        {
            role: "Digital Specialist Engineer",
            company: "Infosys",
            period: "Aug 2021 - Apr 2024",
            description: "Enhanced React app performance by 40%. Developed Python automation framework reducing manual setup by 90%. Optimized AWS Lambda functions."
        }
    ]

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
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        Full Stack Developer with 4+ years of experience designing, developing, and deploying scalable web and mobile applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Experience Column (Accordion) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
                            <Briefcase className="h-6 w-6 text-primary" /> Experience
                        </h3>
                        <div className="space-y-4">
                            {experiences.map((exp, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "group bg-card border rounded-2xl overflow-hidden transition-shadow",
                                        expandedIndex === i ? "ring-2 ring-primary/20 shadow-lg" : "hover:border-primary/50"
                                    )}
                                >
                                    <button
                                        onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                                    >
                                        <div>
                                            <h4 className="font-bold text-lg">{exp.role}</h4>
                                            <p className="text-sm font-medium text-primary">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-muted-foreground hidden sm:inline-block bg-secondary px-2 py-1 rounded-full">{exp.period}</span>
                                            <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform", expandedIndex === i && "rotate-180 text-primary")} />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {expandedIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="border-t border-border/70 bg-muted/30">
                                                    <div className="px-6 py-4">
                                                        <div className="mt-1 text-sm sm:hidden text-muted-foreground mb-2">{exp.period}</div>
                                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                                            {exp.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education & Certs Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Education */}
                        <section>
                            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
                                <GraduationCap className="h-6 w-6 text-primary" /> Education
                            </h3>
                            <div className="bg-card border rounded-2xl p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="font-bold text-lg">B.Tech - Computer Science</h4>
                                        <p className="text-primary text-sm font-medium">Anil Neerukonda Institute of Technology and Sciences</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold">2017 - 2021</div>
                                        <div className="text-xs text-muted-foreground">GPA: 8.68</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h3 className="text-2xl font-bold flex items-center gap-3 mb-4">
                                <Award className="h-6 w-6 text-primary" /> Certifications
                            </h3>
                            <div className="bg-secondary/20 rounded-2xl p-6 border border-border/70">
                                <ul className="space-y-3">
                                    {[
                                        "Infosys Certified Front End Web Developer",
                                        "Infosys Certified React Professional",
                                        "Infosys Certified NodeJS Professional",
                                        "Infosys Certified Mongo Developer",
                                        "Infosys Certified Python Programmer"
                                    ].map((cert, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </motion.div>
                </div>
            </div>
        </section>
    )
})
