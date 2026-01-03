import { lazy, Suspense } from "react"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"

// Lazy load sections below the fold
const About = lazy(() => import("@/components/sections/about").then(m => ({ default: m.About })))
const TechStack = lazy(() => import("@/components/sections/tech-stack").then(m => ({ default: m.TechStack })))
const Projects = lazy(() => import("@/components/sections/projects").then(m => ({ default: m.Projects })))
const Metrics = lazy(() => import("@/components/sections/metrics").then(m => ({ default: m.Metrics })))
const Honors = lazy(() => import("@/components/sections/honors").then(m => ({ default: m.Honors })))
const Blog = lazy(() => import("@/components/sections/blog").then(m => ({ default: m.Blog })))
const Contact = lazy(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })))

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Suspense fallback={
            <div className="h-24 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <About />
            <TechStack />
            <Projects />
            <Metrics />
            <Honors />
            <Blog />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
