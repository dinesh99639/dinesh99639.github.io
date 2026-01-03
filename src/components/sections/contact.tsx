import { motion } from "framer-motion"
import { Phone, Mail, Linkedin, Sparkles, Github, Twitter, MessageSquare, ExternalLink } from "lucide-react"

const contactMethods = [
    {
        icon: Mail,
        title: "Email",
        value: "dinesh99639@gmail.com",
        href: "mailto:dinesh99639@gmail.com",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        description: "For formal inquiries and technical consulting."
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        value: "dinesh-somaraju",
        href: "https://linkedin.com/in/dinesh-somaraju",
        color: "text-blue-600",
        bg: "bg-blue-600/10",
        description: "Professional networking and career updates."
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+91 81063 13275",
        href: "tel:+918106313275",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        description: "Direct line for urgent discussions."
    },
    {
        icon: MessageSquare,
        title: "Socials",
        value: "@dinesh_somaraju",
        href: "https://twitter.com/dinesh_somaraju",
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        description: "Updates on tech and open source."
    }
]

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Sparkles size={14} />
                        Get in Touch
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Let's start a <span className="text-gradient hover:animate-pulse cursor-default">conversation.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        I'm always open to discussing technical collaborations, consulting opportunities, or just geeking out about the latest in software engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={index}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                            <div className="relative bg-card/50 backdrop-blur-xl border border-border/50 p-8 rounded-3xl group-hover:border-primary/40 transition-all duration-300 h-full flex flex-col">
                                <div className={`w-14 h-14 rounded-2xl ${method.bg} ${method.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                                    <method.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {method.title}
                                </h3>
                                <p className="text-sm font-medium mb-4 break-words">
                                    {method.value}
                                </p>
                                <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                                    {method.description}
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                    Connect <ExternalLink size={12} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Bottom CTA / Resume */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center"
                >
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-[0.3em] mb-8">
                        &mdash; India Based &bull; Worldwide Available &mdash;
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
