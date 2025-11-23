import "./globals.css"
import { ThemeProvider } from "@/components/Theme-provider"

export const metadata = {
  title: "Movie Hub",
  description: "Movie App using Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
