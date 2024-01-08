import Page from "@/components/layout/page"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact",
}

export default function Contact() {
  return (
    <Page name="Contact">
      <section id="play14 asbl" className="pt-70">
        <h2>Non-profit organization</h2>
        <div className="container pt-5">
          <p>
            <strong>#play14 a.s.b.l.</strong> is a non-profit with headquarters
            in Luxembourg.
          </p>
          <p>
            It is registered with the
            <Link href="https://www.lbr.lu" target="_blank">
              {" "}
              Luxembourg Business Registers{" "}
            </Link>
            with number LUF11335. <br />
            Publication of the
            <Link href="https://gd.lu/resa/9NNCL4" target="_blank">
              {" "}
              statutes{" "}
            </Link>{" "}
            has been done on May 22nd 2018
          </p>
          <p>
            As such, #play14 depends on the Luxembourguish law, specifically the
            <Link
              href="http://www.mj.public.lu/legislation/asbl_fondations/2009_Loi_21_avril_1928.pdf"
              target="_blank"
            >
              {" "}
              law of April 21st 2018{" "}
            </Link>{" "}
            on Association and Fundation without lucrative purpose.
          </p>
        </div>
      </section>
      <section id="contact" className="row pt-70">
        <h2>Stay in touch</h2>
        <div className="d-flex justify-content-around text-center">
          <div className="col-lg-4 col-md-12 pt-5">
            <Link href="http://bit.ly/play14slack" target="_blank">
              <Image
                src="slack-dark.png"
                alt="Slack"
                width={400}
                height={400}
                className="shadow"
                style={{
                  borderRadius: "70px",
                }}
                unoptimized
              />
              <p>Join us on Slack</p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-12 pt-5">
            <Link href="http://eepurl.com/bsyYXz" target="_blank">
              <Image
                src="mailchimp.png"
                alt="Mailchimp"
                width={400}
                height={400}
                className="shadow"
                style={{
                  borderRadius: "70px",
                }}
                unoptimized
              />
              <p>Register to our newsletter</p>
            </Link>
          </div>
          <div className="col-lg-4 col-md-12 pt-5">
            <Link href="mailto:team@play14.org" target="_blank">
              <Image
                src="email.png"
                alt="Email"
                width={400}
                height={400}
                className="shadow"
                style={{
                  borderRadius: "70px",
                }}
                unoptimized
              />
              <p>Sent us a message</p>
            </Link>
          </div>
        </div>
      </section>
    </Page>
  )
}
