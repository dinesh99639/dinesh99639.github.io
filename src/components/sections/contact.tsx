import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")
        setTimeout(() => {
            setStatus("success")
            setTimeout(() => setStatus("idle"), 3000)
        }, 1500)
    }

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Open for consulting opportunities and technical collaborations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="bg-card p-6 rounded-xl border">
                            <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <a href="mailto:dinesh99639@gmail.com" className="text-sm hover:text-primary transition-colors">dinesh99639@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span className="text-sm">+91 81063 13275</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span className="text-sm">India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-card rounded-xl p-8 shadow-sm border lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input
                                        id="name"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input
                                    id="subject"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : <><Send className="ml-2 h-4 w-4" /> Send Message</>}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
