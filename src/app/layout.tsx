import Footer from "@/components/layout/footer"
import Loader from "@/components/layout/loader"
import Navbar from "@/components/layout/navbar"
import { ApolloProvider } from "@/components/utils/apollo-provider"
import { WebVitals } from "@/components/utils/web-vitals"
import "@/styles/main.scss"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })
const displayWebVitals = process.env.NEXT_PUBLIC_WEB_VITALS === "true"
const title = "#play14 - play is the way"
const description =
  "#play14 is a worldwide gathering of like-minded people who believe that playing is the best way to learn, share and be creative!"

export const metadata: Metadata = {
  title: {
    template: "#play14 - %s",
    default: title,
  },
  description: description,
  creator: "Cédric Pontet",
  keywords: ["play", "learning", "innovation"],
  metadataBase: new URL("https://play14.org"),
  openGraph: {
    title: title,
    description: description,
    url: "https://play14.org",
    siteName: "#play14",
    images: [
      {
        url: "https://play14.org/_next/static/media/play14_white_bg_transparent.1b2c7257.svg",
        alt: "play14 svg logo",
      },
      {
        url: "https://play14.org/_next/static/media/play14_1500x500_transparent.c4d92af9.png",
        width: 1500,
        height: 500,
        alt: "play14 logo transparent background",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
              <div className="pt-100 pb-70">
                <Suspense fallback={<Loader />}>
                  {displayWebVitals && <WebVitals />}
                  {children}
                </Suspense>
              </div>
            </div>
          </main>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  )
}
