/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                "pulse-slow": {
                    "0%, 100%": {
                        opacity: "0.2",
                        transform: "scale(1) translateZ(0)",
                    },
                    "50%": {
                        opacity: "0.4",
                        transform: "scale(1.1) translateZ(0)",
                    },
                },
                "float": {
                    "0%, 100%": {
                        transform: "translateY(0) translateZ(0)",
                    },
                    "50%": {
                        transform: "translateY(-10px) translateZ(0)",
                    },
                },
                "scan": {
                    "0%": {
                        transform: "translateY(-100%) translateZ(0)",
                    },
                    "100%": {
                        transform: "translateY(200%) translateZ(0)",
                    },
                },
            },
            animation: {
                "gradient-x": "gradient-x 15s ease infinite",
                "pulse-slow": "pulse-slow 8s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
                "scan": "scan 12s linear infinite",
            },
        },
    },
    plugins: [],
}
