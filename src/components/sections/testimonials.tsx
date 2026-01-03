import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "One of the most talented developers I've worked with. Delivered the project ahead of schedule and with exceptional code quality.",
        author: "Sarah Johnson",
        role: "CTO at TechFlow",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        quote: "A true professional who understands both design and engineering. The result exceeded our expectations.",
        author: "Michael Chen",
        role: "Product Manager at Innovate",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
        quote: "Highly recommended for any complex frontend work. The attention to detail is unmatched.",
        author: "Emily Davis",
        role: "Founder at StartUp",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    }
]

export function Testimonials() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Client Testimonials</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what others have to say about working with me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl p-8 shadow-sm border relative"
                        >
                            <Quote className="h-8 w-8 text-primary/20 absolute top-8 right-8" />
                            <p className="text-muted-foreground mb-6 relative z-10 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold">{testimonial.author}</div>
                                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
