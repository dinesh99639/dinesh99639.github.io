import { motion } from "framer-motion"

const metrics = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Open Source Commits", value: "1k+" },
]

export function Metrics() {
    return (
        <section className="py-12 bg-primary text-primary-foreground">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</div>
                            <div className="text-primary-foreground/80 text-sm md:text-base">{metric.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
