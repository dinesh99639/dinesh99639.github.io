import { lazy, Suspense, useState, useEffect, useRef } from "react"
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

/**
 * A wrapper that only renders its children when it's near the viewport.
 * This defers the loading of lazy-loaded chunks until they are actually needed.
 */
function LazySection({ children, minHeight = "200px" }: { children: React.ReactNode, minHeight?: string }) {
  const [isIntersecting, setIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.disconnect()
        }
      },
      { rootMargin: "300px" } // Load a bit before it comes into view
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ minHeight }}>
      {isIntersecting ? (
        <Suspense fallback={<div className="h-24" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <LazySection minHeight="400px"><About /></LazySection>
          <LazySection minHeight="400px"><TechStack /></LazySection>
          <LazySection minHeight="600px"><Projects /></LazySection>
          <LazySection minHeight="300px"><Metrics /></LazySection>
          <LazySection minHeight="400px"><Honors /></LazySection>
          <LazySection minHeight="400px"><Blog /></LazySection>
          <LazySection minHeight="400px"><Contact /></LazySection>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
