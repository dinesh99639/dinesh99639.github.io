import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"
                />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="space-y-8"
                >
                    {/* Status Badge */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <div className="inline-block rounded-full bg-secondary/50 backdrop-blur-sm border border-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-sm">
                            <span className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Software Development Engineer
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="block text-xl sm:text-2xl md:text-3xl font-medium text-foreground"
                        >
                            Hi, I'm Dinesh Somaraju.
                        </motion.span>
                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                                Full Stack Developer.
                            </span>
                        </motion.h1>
                    </div>

                    {/* Bio */}
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
                    >
                        Specialized in <span className="font-semibold text-foreground">React</span>, <span className="font-semibold text-foreground">Angular</span>, <span className="font-semibold text-foreground">Spring Boot</span>, and <span className="font-semibold text-foreground">AWS</span>.
                        I build scalable web and mobile applications that enhance performance and user experience.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto h-11 px-6 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 group"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto h-11 px-6 rounded-full text-sm border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all hover:scale-105"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className="flex items-center justify-center gap-6 pt-10"
                    >
                        {[
                            { icon: Github, href: "https://github.com/dinesh99639" },
                            { icon: Linkedin, href: "https://linkedin.com/in/dinesh-somaraju" },
                            { icon: Mail, href: "mailto:dinesh99639@gmail.com" },
                            { icon: FileText, href: "https://dinesh99639.github.io" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <social.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
