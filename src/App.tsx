import { ThemeProvider } from "@/components/theme/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { TechStack } from "@/components/sections/tech-stack"
import { Projects } from "@/components/sections/projects"
import { Metrics } from "@/components/sections/metrics"
import { Awards } from "@/components/sections/testimonials"
import { Blog } from "@/components/sections/blog"
import { Contact } from "@/components/sections/contact"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Metrics />
          <Awards />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
