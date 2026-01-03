import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Award } from "lucide-react"

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
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        Full Stack Developer with 4+ years of experience designing, developing, and deploying scalable web and mobile applications.
                        Hands-on experience delivering software solutions in Agile environments and contributing to technical knowledge sharing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <Briefcase className="h-6 w-6 text-primary" /> Experience
                        </h3>

                        <div className="relative pl-8 border-l border-border space-y-12 ml-3">
                            <div className="relative">
                                <span className="absolute -left-[50px] p-2 bg-background border rounded-full">
                                    <Briefcase className="h-4 w-4 text-primary" />
                                </span>
                                <h4 className="font-semibold text-lg">Consultant</h4>
                                <p className="text-sm text-primary font-medium">KPMG India • Jan 2025 - Present</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Designed and implemented an organizational hierarchy system impacting 1,500 employees. Improved workforce visibility by 40% and streamlined 15 administrative processes.
                                </p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[50px] p-2 bg-background border rounded-full">
                                    <Briefcase className="h-4 w-4 text-primary" />
                                </span>
                                <h4 className="font-semibold text-lg">Specialist Programmer</h4>
                                <p className="text-sm text-primary font-medium">Infosys • May 2024 - Dec 2024</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Led a cross-functional team of 4 developers. Engineered strict real-time chat solutions boosting engagement by 30%. Architected Spring Boot & Angular ticketing platform.
                                </p>
                            </div>

                            <div className="relative">
                                <span className="absolute -left-[50px] p-2 bg-background border rounded-full">
                                    <Briefcase className="h-4 w-4 text-primary" />
                                </span>
                                <h4 className="font-semibold text-lg">Digital Specialist Engineer</h4>
                                <p className="text-sm text-primary font-medium">Infosys • Aug 2021 - Apr 2024</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Enhanced React app performance by 40%. Developed Python automation framework reducing manual setup by 90%. Optimized AWS Lambda functions.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education & Certs */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <GraduationCap className="h-6 w-6 text-primary" /> Education
                            </h3>
                            <div className="relative pl-8 border-l border-border ml-3">
                                <div className="relative">
                                    <span className="absolute -left-[50px] p-2 bg-background border rounded-full">
                                        <GraduationCap className="h-4 w-4 text-primary" />
                                    </span>
                                    <h4 className="font-semibold text-lg">B.Tech - Computer Science</h4>
                                    <p className="text-sm text-primary font-medium">Anil Neerukonda Institute of Technology (ANITS)</p>
                                    <p className="text-sm text-muted-foreground mt-1">2017 - 2021 • GPA: 8.68</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <Award className="h-6 w-6 text-primary" /> Certifications
                            </h3>
                            <ul className="space-y-3 ml-3">
                                {["Infosys Certified Front End Web Developer", "Infosys Certified React Professional", "Infosys Certified NodeJS Professional", "Infosys Certified Mongo Developer", "Infosys Certified Python Programmer"].map((cert, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
