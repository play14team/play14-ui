import CodeOfConduct from "@/components/layout/codeofconduct"
import Manifesto from "@/components/layout/manifesto"
import Page from "@/components/layout/page"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About | Our values",
}

export default async function Values() {
  return (
    <Page name="Our values">
      <div className="container">
        <p className="pt-70">
          Values are very important to us. They are what make #play14 what it
          is. Please, make sure you take a look at our manifesto and our code of
          conduct before you register to one of our events.
        </p>
        <p>
          Many thanks to <Link href="/players/nina-neef">Nina Neef</Link> for
          the wonderful images.
        </p>
        <div className="pt-5">
          <Manifesto />
        </div>
        <div className="centered pt-5 pb-100">
          <Image
            src="/values/manifesto.jpg"
            alt="manifesto"
            className="shadow"
            width={600}
            height={800}
            style={{
              borderRadius: "10px",
            }}
            unoptimized
          />
        </div>
        <div className="pt-5">
          <CodeOfConduct />
        </div>
        <div className="centered pt-5 pb-100">
          <Image
            src="/values/CoC.jpg"
            alt="code of conduct"
            className="shadow"
            width={4032}
            height={3024}
            style={{
              borderRadius: "10px",
            }}
            unoptimized
          />
        </div>
        <div className="pb-100">
          <h3 className="centered pt-5 pb-3">Boy/Girl scout rule</h3>
          There is a saying among the scouts.
          <blockquote>
            Always leave the campground cleaner than you found it.
          </blockquote>
          <p>
            Be mindful of other people well being by cleaning after yourself
            when you leave a space. That goes for the space you played on, the
            space you ate on, the space you rested on, etc.
          </p>
          <p>
            Remember that the hosting team is not there to clean after you, but
            are also participants of the event. They also want to facilitate and
            attend sessions, as much as you do.
          </p>
        </div>
      </div>
    </Page>
  )
}
