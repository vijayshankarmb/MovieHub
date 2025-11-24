import "./globals.css"
import { ThemeProvider } from "@/components/Theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Movie Hub",
  description: "Movie App using Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <div className="max-w-6xl mx-auto w-full px-4">
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
          </main>
          <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
