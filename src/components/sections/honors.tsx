import { motion } from "framer-motion"
import { Trophy, Star, Medal, Award as AwardIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Honor {
    title: string;
    description: string;
    organization: string;
    date: string;
    icon: LucideIcon;
    color: string;
    gradient: string;
}

const honors: Honor[] = [
    {
        title: "1st Place - Dual-a-thon",
        organization: "Visakhapatnam",
        date: "2019",
        description: "Won first prize in the regional App Development Competition for building an innovative healthcare solution.",
        icon: Trophy,
        color: "text-yellow-500",
        gradient: "from-yellow-500/20 to-amber-500/20"
    },
    {
        title: "Winner - Beta Testing Challenge",
        organization: "CSI at ANITS",
        date: "2020",
        description: "Identified critical edge-case bugs and usability issues in a high-stakes quality assurance challenge.",
        icon: Medal,
        color: "text-blue-500",
        gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
        title: "Organizer - HackTheQuarantine",
        organization: "National Initiative",
        date: "2020",
        description: "Conceptualized and led a national hackathon with 500+ participants to build solutions for pandemic challenges.",
        icon: Star,
        color: "text-purple-500",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Ranked 4187th - Google Hashcode 2020",
        organization: "Google",
        date: "Feb 2020",
        description: "Ranked 4187th out of 10,716 participants in the global programming competition.",
        icon: AwardIcon,
        color: "text-emerald-500",
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "2nd Place - Project Expo",
        organization: "ANITS Excellence",
        date: "2020",
        description: "Recognized for presenting a highly optimized software architecture for real-time data processing.",
        icon: Trophy,
        color: "text-orange-500",
        gradient: "from-orange-500/20 to-red-500/20"
    }
]

export function Honors() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <AwardIcon size={14} />
                        Recognition
                    </motion.div>
                    <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
                        Honors & <span className="text-gradient">Achievements</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A history of technical excellence, competitive success, and community leadership in software engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {honors.map((honor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 25, delay: 0 }
                            }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            className="group relative"
                        >
                            {/* Card Background with inner glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${honor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl blur-xl`} />

                            <div className="relative bg-card/50 backdrop-blur-xl border border-border/70 p-8 rounded-3xl overflow-hidden group-hover:border-primary/50 transition-colors duration-200">
                                {/* Spotlight effect */}
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <honor.icon size={120} className={honor.color} />
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className={`shrink-0 p-4 rounded-2xl bg-background/80 border border-border/70 ${honor.color} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                                        <honor.icon size={28} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 bg-muted/50 px-2 py-0.5 rounded-md">
                                                {honor.date}
                                            </span>
                                            <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest">
                                                {honor.organization}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {honor.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {honor.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Special Mention Card / Future Goals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400, damping: 25, delay: 0 }
                        }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="bg-primary/5 border border-dashed border-primary/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:bg-primary/10 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary animate-pulse">
                            +
                        </div>
                        <h3 className="font-bold text-lg mb-2">Always Aiming Higher</h3>
                        <p className="text-sm text-muted-foreground">
                            Currently pursuing advanced certifications and exploring new frontiers in AI & System Architecture.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
