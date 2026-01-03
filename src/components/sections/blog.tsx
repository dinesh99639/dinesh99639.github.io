import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const posts = [
    {
        title: "Building Scalable React Applications",
        excerpt: "Best practices for organizing large React codebases and managing state effectively.",
        date: "Dec 12, 2023",
        category: "React",
        slug: "#"
    },
    {
        title: "The Future of Web Development with AI",
        excerpt: "How AI tools are reshaping the developer workflow and what to expect in 2024.",
        date: "Nov 28, 2023",
        category: "AI",
        slug: "#"
    },
    {
        title: "Optimizing Web Performance",
        excerpt: "Techniques to achieve 100 lighthouse score and improve Core Web Vitals.",
        date: "Nov 15, 2023",
        category: "Performance",
        slug: "#"
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Latest Writing</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Thoughts, tutorials, and insights about modern web development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card rounded-xl border p-6 hover:shadow-lg transition-all group cursor-pointer"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Badge variant="outline">{post.category}</Badge>
                                <span className="text-xs text-muted-foreground flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" /> {post.date}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-primary text-sm font-medium">
                                Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
