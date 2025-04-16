import type React from "react"
import { PageProvider } from "../smoothScrollComponent/scrollprovider"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` antialiased bg-black` }>
        <PageProvider>     {children}</PageProvider>
       
      
      </body>
    </html>
  )
}

