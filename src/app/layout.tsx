import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import { ApolloProvider } from "@/components/providers/apollo-provider"
import "@/styles/main.scss"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "#play14 - play is the way",
  description:
    "#play14 is a worldwide gathering of like-minded people who believe that playing is the best way to learn, share and be creative!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://widget.weezevent.com/weez.js" />
      <body className={inter.className}>
        <ApolloProvider>
          <Navbar />
          <main>
            <div className="container">
              <div className="pt-100 pb-70">{children}</div>
            </div>
          </main>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  )
}
