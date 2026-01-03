import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const posts = [
    {
        title: "Allergy Identifier: Kendo React & GenAI Challenge",
        excerpt: "Building an AI-powered allergy detection app using Kendo React and Generative AI.",
        date: "Dev.to",
        category: "Kendo React",
        link: "https://dev.to/dinesh_somaraju/allergy-identifier-kendo-react-genai-challange-4e99"
    },
    {
        title: "Fingerprint Authentication with Web Auth API",
        excerpt: "Harnessing the power of biometric security in web applications using JavaScript.",
        date: "Dev.to",
        category: "Security",
        link: "https://dev.to/dinesh_somaraju/harnessing-the-power-of-fingerprint-authentication-with-javascript-web-authentication-api-3nho"
    },
    {
        title: "Event Sources vs WebSockets",
        excerpt: "A comparative analysis of real-time communication technologies for web apps.",
        date: "Dev.to",
        category: "WebSockets",
        link: "https://dev.to/dinesh_somaraju/event-sources-vs-websockets-a-comparative-analysis-5296"
    },
    {
        title: "JavaScript vs WebAssembly: Speed Showdown",
        excerpt: "Benchmarking performance differences between JS and Wasm in real-world scenarios.",
        date: "Dev.to",
        category: "Performance",
        link: "https://dev.to/dinesh_somaraju/javascript-and-webassembly-a-speed-showdown-ac3"
    },
    {
        title: "Moving from REST to GraphQL",
        excerpt: "Inspiration and practical guide for migrating APIs to a more flexible query language.",
        date: "Dev.to",
        category: "GraphQL",
        link: "https://dev.to/dinesh_somaraju/inspiration-for-moving-from-rest-to-graphql-3243"
    }
]

export function Blog() {
    return (
        <section id="blog" className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-4">
                        Blog
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technical Writing</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Sharing knowledge and insights on modern web development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl border p-6 hover:shadow-lg transition-all group cursor-pointer flex flex-col h-full"
                            onClick={() => window.open(post.link, "_blank")}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Badge variant="outline">{post.category}</Badge>
                                <span className="text-xs text-muted-foreground flex items-center ml-auto">
                                    <Calendar className="h-3 w-3 mr-1" /> {post.date}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-primary text-sm font-medium mt-auto">
                                Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
