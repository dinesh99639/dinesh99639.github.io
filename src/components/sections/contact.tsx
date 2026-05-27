import { memo } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Phone, Radio, ShieldCheck, Zap, MapPin } from "lucide-react"

const relays = [
    {
        icon: Mail,
        label: "Secure Email",
        value: "dinesh99639@gmail.com",
        href: "mailto:dinesh99639@gmail.com",
        color: "text-blue-500",
        glow: "shadow-blue-500/20"
    },
    {
        icon: Linkedin,
        label: "Direct Network",
        value: "LinkedIn Profile",
        href: "https://linkedin.com/in/dinesh-somaraju",
        color: "text-blue-600",
        glow: "shadow-blue-600/20"
    },
    {
        icon: Phone,
        label: "Direct line",
        value: "+91 81063 13275",
        href: "tel:+918106313275",
        color: "text-emerald-500",
        glow: "shadow-emerald-500/20"
    }
]

export const Contact = memo(function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden min-h-[800px] flex items-center transform-gpu">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-glow-radial rounded-full gpu will-change-[transform,opacity]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] gpu" />
            </div>

            <div className="container px-4 mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Status Header */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-center gap-3 px-4 py-2 rounded-full bg-card/60 border border-border/70 mb-12 shadow-2xl backdrop-blur-md gpu"
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">
                            System Online: Signal Strength 100%
                        </span>
                        <div className="w-px h-4 bg-border/50 mx-2" />
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                            Available for Global Projects
                        </span>
                    </motion.div>

                    {/* Main Message */}
                    <div className="max-w-3xl mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="text-4xl font-bold tracking-tight mb-4 text-foreground gpu"
                        >
                            Initiate <span className="text-gradient">Communication</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg max-w-2xl mx-auto gpu"
                        >
                            Bridging the gap between ambitious ideas and technical reality. Let's build the future together.
                        </motion.p>
                    </div>

                    {/* Interaction Hub */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {relays.map((relay, index) => (
                            <motion.a
                                key={index}
                                href={relay.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                                className="group relative gpu"
                            >
                                <div className="absolute inset-0 bg-glow-radial-strong opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full gpu" />

                                <div className="relative bg-card/40 backdrop-blur-md border border-border/70 hover:border-primary/50 p-8 rounded-[2rem] flex flex-col items-center group overflow-hidden gpu">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity gpu" />

                                    <div className={`p-4 rounded-2xl bg-background/80 border border-border/70 ${relay.color} mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-xl ${relay.glow} gpu`}>
                                        <relay.icon size={28} />
                                    </div>

                                    <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                                        {relay.label}
                                    </h3>
                                    <p className="text-sm font-bold group-hover:text-primary transition-colors">
                                        {relay.value}
                                    </p>

                                    <div className="mt-8 flex items-center justify-center h-10 overflow-hidden transform-gpu">
                                        <div className="px-5 py-2.5 rounded-full bg-primary text-[10px] font-black uppercase tracking-widest text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-out gpu">
                                            Establish Link
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* System Footer Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.5 }}
                        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl gpu"
                    >
                        {[
                            { label: "Connection", value: "Encrypted", icon: ShieldCheck },
                            { label: "Location", value: "India, Remote", icon: MapPin },
                            { label: "Availability", value: "High Priority", icon: Zap },
                            { label: "Frequency", value: "2.4 GHz Sync", icon: Radio }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gpu transition-transform hover:scale-105 duration-300">
                                <item.icon size={16} className="text-muted-foreground/50 mb-3" />
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                                <p className="text-xs font-bold">{item.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scanning Line Animation - CSS Optimized */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                <div
                    className="w-full h-[400px] bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-20 animate-scan gpu will-change-transform"
                />
            </div>
        </section>
    )
})
