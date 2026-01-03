import { motion } from "framer-motion"
import { Trophy, Star } from "lucide-react"

const awards = [
    {
        title: "1st Place - Dual-a-thon",
        description: "App Development Competition in Visakhapatnam (2019).",
        icon: <Trophy className="h-6 w-6 text-yellow-500" />
    },
    {
        title: "Winner - Beta Testing Challenge",
        description: "Hosted by CSI at ANITS (2020). Demonstrated exceptional QA skills.",
        icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
        title: "Finalist - Hackathon",
        description: "Developed feature-rich Android app using React Native (100+ participants).",
        icon: <Trophy className="h-6 w-6 text-gray-400" />
    },
    {
        title: "HackTheQuarantine Organizer",
        description: "Hosted national hackathon with 500+ participants from 50+ colleges.",
        icon: <Star className="h-6 w-6 text-blue-500" />
    },
    {
        title: "2nd Place - Project Expo",
        description: "ANITS Project Expo (2020) for innovative project showcase.",
        icon: <Trophy className="h-6 w-6 text-orange-400" />
    }
]

export function Awards() {
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Honors & Achievements</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognition for technical excellence and community leadership.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border p-6 rounded-xl hover:shadow-md transition-all flex items-start gap-4"
                        >
                            <div className="p-3 bg-secondary rounded-full">
                                {award.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">{award.title}</h3>
                                <p className="text-sm text-muted-foreground">{award.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
