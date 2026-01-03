import { motion } from "framer-motion"

const metrics = [
    { value: "4+", label: "Years Experience" },
    { value: "40%", label: "Perf. Improvement" },
    { value: "20+", label: "Security Fixes" },
    { value: "5", label: "Certifications" },
]

export function Metrics() {
    return (
        <section className="py-20 border-y bg-muted/20">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center px-4 py-8 group hover:bg-background/50 transition-colors cursor-default"
                        >
                            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 mb-2 group-hover:scale-110 transition-transform duration-300">
                                {metric.value}
                            </div>
                            <div className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
