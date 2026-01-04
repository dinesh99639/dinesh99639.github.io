import { memo } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Zap, Shield, Award, History, TrendingUp } from "lucide-react"

const metrics = [
    {
        value: "4+",
        label: "Years Experience",
        icon: History,
        color: "text-blue-500",
        description: "Professional software engineering"
    },
    {
        value: "40%",
        label: "Perf. Improvement",
        icon: Zap,
        color: "text-amber-500",
        description: "In critical system modules"
    },
    {
        value: "20+",
        label: "Security Fixes",
        icon: Shield,
        color: "text-emerald-500",
        description: "Vulnerability remediation"
    },
    {
        value: "5",
        label: "Certifications",
        icon: Award,
        color: "text-purple-500",
        description: "Industry standard validated"
    },
]

const cardVariants: Variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: "easeOut"
        }
    }),
    hover: {
        y: -6,
        scale: 1.01,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
}

export const Metrics = memo(function Metrics() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <TrendingUp size={14} />
                        Statistics
                    </motion.div>
                    <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
                        Key Milestones & <span className="text-gradient">Achievements</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A quantifiable summary of my professional journey, technical impact, and continuous learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="initial"
                            whileInView="animate"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="bg-card/40 backdrop-blur-md border border-border/70 rounded-2xl p-6 hover:border-primary/50 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-background/80 border border-border/70 ${metric.color} shadow-sm group-hover:scale-110 transition-transform`}>
                                    <metric.icon size={24} />
                                </div>
                                <div className="text-secondary-foreground/20 group-hover:text-primary/20">
                                    <TrendingUp size={40} />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-4xl font-bold tracking-tight">
                                    {metric.value}
                                </h3>
                                <p className="text-sm font-bold uppercase tracking-wider text-foreground">
                                    {metric.label}
                                </p>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {metric.description}
                                </p>
                            </div>

                            {/* Decorative Line */}
                            <div className="mt-6 h-1 w-full bg-secondary/50 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                    className={`h-full bg-gradient-to-r ${index === 0 ? "from-blue-500 to-blue-300" :
                                        index === 1 ? "from-amber-500 to-amber-300" :
                                            index === 2 ? "from-emerald-500 to-emerald-300" :
                                                "from-purple-500 to-purple-300"
                                        }`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
})
