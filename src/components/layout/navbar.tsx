import { useState, useEffect } from "react"
import { Menu, X, Code2, Moon, Sun } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "@/components/theme/theme-provider"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

const navLinks = [
    { name: "About", id: "about" },
    { name: "Tech", id: "tech" },
    { name: "Projects", id: "projects" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
]

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleNavigation = (id: string) => {
        setIsOpen(false)
        // Small delay to allow menu to start closing and body scroll lock to release
        setTimeout(() => {
            const element = document.getElementById(id)
            if (element) {
                const offset = 80 // Offset for fixed navbar
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - offset

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                })
            }
        }, 100)
    }

    return (
        <nav
            aria-label="Main Navigation"
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Code2 className="h-6 w-6" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Portfolio</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Button
                                    key={link.name}
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleNavigation(link.id)}
                                    className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium rounded-full px-4"
                                    aria-label={`Navigate to ${link.name} section`}
                                >
                                    {link.name}
                                </Button>
                            ))}
                            <div className="w-px h-6 bg-border/50 mx-2" />
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2.5 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-all"
                                aria-label="Toggle dark mode"
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2.5 rounded-full hover:bg-accent text-muted-foreground"
                            aria-label="Toggle dark mode"
                        >
                            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 rounded-xl hover:bg-accent text-muted-foreground"
                            aria-label="Toggle mobile menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-background/95 backdrop-blur-lg border-b overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Button
                                    key={link.name}
                                    variant="ghost"
                                    className="w-full justify-start px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all h-auto"
                                    onClick={() => handleNavigation(link.id)}
                                >
                                    {link.name}
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
