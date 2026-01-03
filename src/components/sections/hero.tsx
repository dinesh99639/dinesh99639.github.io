import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                        Consultant @ KPMG India
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Hi, I'm Dinesh Somaraju.
                        <span className="text-gradient block mt-2"> Full Stack Developer. </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        Specialized in React, Angular, Spring Boot, and AWS. I build scalable web and mobile applications that enhance performance and user experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-6 pt-8 text-muted-foreground">
                        <a href="https://github.com/dinesh99639" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com/in/dinesh-somaraju" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:dinesh99639@gmail.com" className="hover:text-primary transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                        <a href="https://dinesh99639.github.io" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                            <FileText className="h-6 w-6" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
