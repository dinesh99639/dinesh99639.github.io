import { lazy, Suspense } from "react"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"

// Lazy load sections
const About = lazy(() => import("@/components/sections/about").then(m => ({ default: m.About })))
const TechStack = lazy(() => import("@/components/sections/tech-stack").then(m => ({ default: m.TechStack })))
const Projects = lazy(() => import("@/components/sections/projects").then(m => ({ default: m.Projects })))
const Metrics = lazy(() => import("@/components/sections/metrics").then(m => ({ default: m.Metrics })))
const Honors = lazy(() => import("@/components/sections/honors").then(m => ({ default: m.Honors })))
const Blog = lazy(() => import("@/components/sections/blog").then(m => ({ default: m.Blog })))
const Contact = lazy(() => import("@/components/sections/contact").then(m => ({ default: m.Contact })))

const SectionFallback = ({ id }: { id: string }) => (
  <section id={id} className="py-24 animate-pulse flex items-center justify-center min-h-[400px]">
    <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
  </section>
)

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Suspense fallback={<SectionFallback id="about" />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback id="tech" />}>
            <TechStack />
          </Suspense>
          <Suspense fallback={<SectionFallback id="projects" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback id="metrics" />}>
            <Metrics />
          </Suspense>
          <Suspense fallback={<SectionFallback id="honors" />}>
            <Honors />
          </Suspense>
          <Suspense fallback={<SectionFallback id="blog" />}>
            <Blog />
          </Suspense>
          <Suspense fallback={<SectionFallback id="contact" />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
