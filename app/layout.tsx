import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from 'geist/font'
import Footer from "./Components/footer"

export const metadata: Metadata = {
  title: "Mars Black",
  description: "Creative agency specializing in culture, audience, and network",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-black` }>
   
           {children}
           <Footer>
          
        </Footer>
      </body>
    </html>
  )
}

