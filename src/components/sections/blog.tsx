import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen, Clock, ExternalLink } from "lucide-react"

const posts = [
    {
        id: "allergy-identifier",
        title: "Allergy Identifier: Kendo React & GenAI Challenge",
        excerpt: "Building an AI-powered allergy detection app using Kendo React and Generative AI to identify food allergens from images.",
        platform: "Dev.to",
        category: "Generative AI",
        readTime: "8 min read",
        link: "https://dev.to/dinesh_somaraju/allergy-identifier-kendo-react-genai-challange-4e99"
    },
    {
        id: "fingerprint-auth",
        title: "Fingerprint Authentication with Web Auth API",
        excerpt: "Harnessing the power of biometric security in modern web applications using the JavaScript Web Authentication API.",
        platform: "Dev.to",
        category: "Security",
        readTime: "6 min read",
        link: "https://dev.to/dinesh_somaraju/harnessing-the-power-of-fingerprint-authentication-with-javascript-web-authentication-api-3nho"
    },
    {
        id: "event-sources",
        title: "Event Sources vs WebSockets",
        excerpt: "A comparative analysis of real-time communication technologies, exploring edge cases where SSE might be superior.",
        platform: "Dev.to",
        category: "System Design",
        readTime: "10 min read",
        link: "https://dev.to/dinesh_somaraju/event-sources-vs-websockets-a-comparative-analysis-5296"
    },
    {
        id: "wasm-speed",
        title: "JavaScript vs WebAssembly: Speed Showdown",
        excerpt: "Deep dive into performance benchmarking, exploring how Wasm accelerates heavy computation in the browser.",
        platform: "Dev.to",
        category: "Performance",
        readTime: "12 min read",
        link: "https://dev.to/dinesh_somaraju/javascript-and-webassembly-a-speed-showdown-ac3"
    },
    {
        id: "rest-to-graphql",
        title: "Moving from REST to GraphQL",
        excerpt: "Strategizing the migration from traditional RESTful architectures to the flexibility and efficiency of GraphQL.",
        platform: "Dev.to",
        category: "API Design",
        readTime: "7 min read",
        link: "https://dev.to/dinesh_somaraju/inspiration-for-moving-from-rest-to-graphql-3243"
    }
]

const featuredPost = posts[0];
const otherPosts = posts.slice(1);

export function Blog() {
    return (
        <section id="blog" className="py-24 bg-background relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <BookOpen size={14} />
                        Writing & Research
                    </motion.div>
                    <h2 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
                        Technical <span className="text-gradient">Insights</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic leading-relaxed">
                        Documenting the intersection of complex architecture and human-centric design.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Featured Article */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 group"
                    >
                        <button
                            onClick={() => window.open(featuredPost.link, "_blank")}
                            className="w-full text-left relative bg-card/40 border border-border/70 hover:border-primary/50 rounded-[2.5rem] p-8 md:p-12 transition-colors duration-300 overflow-hidden flex flex-col min-h-[500px] justify-between group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-wider">
                                        FEATURED ARTICLE
                                    </span>
                                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest flex items-center gap-2">
                                        <Clock size={14} />
                                        {featuredPost.readTime}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.1] group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h3>

                                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                    {featuredPost.excerpt}
                                </p>
                            </div>

                            <div className="relative mt-12 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                    Published on <span className="text-foreground">{featuredPost.platform}</span>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition duration-300">
                                    <ExternalLink size={24} />
                                </div>
                            </div>
                        </button>
                    </motion.div>

                    {/* Secondary Articles List */}
                    <div className="lg:col-span-5 space-y-4">
                        {otherPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <button
                                    onClick={() => window.open(post.link, "_blank")}
                                    className="w-full text-left relative bg-card/20 hover:bg-card/60 border border-border/70 hover:border-primary/40 rounded-3xl p-6 transition-colors duration-300 group"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                                                    {post.category}
                                                </span>
                                                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-bold leading-snug transition-colors line-clamp-2 mb-2">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
                                                <span className="text-xs font-bold uppercase tracking-widest">Read Article</span>
                                                <ArrowUpRight size={14} />
                                            </div>
                                        </div>
                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground border border-border/70 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                                            <ExternalLink size={18} />
                                        </div>
                                    </div>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Link */}
                <div className="mt-20 flex flex-col items-center">
                    <motion.a
                        href="https://dev.to/dinesh_somaraju"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="px-6 py-3.5 rounded-full bg-secondary/80 border border-border/70 backdrop-blur-md text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-primary/10 hover:border-primary/50 transition-colors duration-300"
                    >
                        Explore Complete Archive
                        <ArrowUpRight size={18} />
                    </motion.a>
                    <p className="mt-6 text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.4em]">
                        Documenting the Future of Web
                    </p>
                </div>
            </div>
        </section>
    )
}
