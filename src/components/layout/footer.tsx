export function Footer() {
    return (
        <footer className="bg-muted/30 border-t py-12">
            <div className="container mx-auto px-4 text-center">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Developer Portfolio. Built with React & Tailwind.
                </p>
            </div>
        </footer>
    )
}
