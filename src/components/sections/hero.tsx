import { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, FileText } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/brand-icons"
import { Button } from "@/components/ui/button"

// Premium ease-out expo curve for ultra-smooth & snappy transitions
const entranceTransition = {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1] as any
}

// Snappy GPU-composited slide variants for all children
const childVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: entranceTransition
    }
}

// Subtly translated slide variant for title to avoid text-clipping mask scale rendering overhead
const titleVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: entranceTransition
    }
}

const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.08
        }
    }
}

const socialItemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 8 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: entranceTransition
    }
}

export const Hero = memo(function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div
                    className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-glow-radial-strong animate-pulse-slow gpu will-change-transform"
                />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.06,
                                delayChildren: 0.05
                            }
                        }
                    }}
                    className="space-y-8 gpu will-change-transform"
                >
                    {/* Status Badge */}
                    <motion.div variants={childVariants}>
                        <div className="inline-block rounded-full bg-secondary/85 border border-secondary/40 px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-sm gpu">
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
                            variants={childVariants}
                            className="block text-lg sm:text-2xl md:text-3xl font-medium text-foreground tracking-tight"
                        >
                            Hi, I'm Dinesh Somaraju.
                        </motion.span>
                        <motion.h1
                            variants={titleVariants}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] transform-gpu gpu will-change-transform"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                                Full Stack <br className="sm:hidden" /> Developer.
                            </span>
                        </motion.h1>
                    </div>

                    {/* Bio */}
                    <motion.p
                        variants={childVariants}
                        className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2"
                    >
                        Specialized in <span className="font-semibold text-foreground">React</span>, <span className="font-semibold text-foreground">Redux</span>, <span className="font-semibold text-foreground">Python</span>, and <span className="font-semibold text-foreground">AWS</span>.
                        I build scalable web and mobile applications that enhance performance and user experience.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={childVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                    >
                        <Button
                            size="lg"
                            className="w-full sm:w-auto h-11 px-6 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-[color,background-color,border-color,box-shadow,transform] duration-200 cursor-pointer group gpu"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto h-11 px-6 rounded-full text-sm border-2 border-primary/20 bg-background/90 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 active:scale-95 transition-[color,background-color,border-color,box-shadow,transform] duration-200 cursor-pointer gpu"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={socialContainerVariants}
                        className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 pt-4 md:pt-8"
                    >
                        {[
                            { icon: Github, href: "https://github.com/dinesh99639", label: "Github", color: "hover:text-white hover:bg-[#333] hover:border-[#333]" },
                            { icon: Linkedin, href: "https://linkedin.com/in/dinesh-somaraju", label: "LinkedIn", color: "hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5]" },
                            { icon: Mail, href: "mailto:dinesh99639@gmail.com", label: "Email", color: "hover:text-white hover:bg-primary hover:border-primary" },
                            { icon: FileText, href: "https://dinesh99639.github.io/static-assets/portfolio/resume/Dinesh%20Somaraju%20Resume.pdf", label: "Resume", color: "hover:text-white hover:bg-emerald-600 hover:border-emerald-600" }
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit my ${social.label}`}
                                variants={socialItemVariants}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`group relative p-3 rounded-2xl bg-secondary/80 border border-border/70 text-muted-foreground shadow-sm transition-colors duration-200 gpu ${social.color}`}
                                title={social.label}
                            >
                                <social.icon className="h-5 w-5" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-border">
                                    {social.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
})
