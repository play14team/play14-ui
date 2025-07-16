import Expectations from "@/components/home/expectations"
import HtmlContent from "@/components/layout/html-content"
import Page from "@/components/layout/page"
import { attributesAs, query } from "@/libs/apollo-client"
import {
  Enum_Expectation_Type,
  Format,
  FormatDocument,
  FormatEntityResponse,
} from "@/models/graphql"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Our format",
}

export default async function FormatPage() {
  const response = (await query({ query: FormatDocument })) as {
    format?: FormatEntityResponse
  }
  const { openspace, bumblebee, butterfly, lawOfTwoFeet, schedule } =
    attributesAs<Format>({ data: response.format?.data ?? {} })

  return (
    <Page name="Our format">
      <section id="open space" className="container pt-70">
        <HtmlContent>{openspace!}</HtmlContent>
        <div className="pt-70">
          <h3>The Law of Two Feet</h3>
          <div className="row">
            <div className="col-lg-6 col-md-12 pt-5">
              <HtmlContent>{lawOfTwoFeet!}</HtmlContent>
            </div>
            <div className="col-lg-6 col-md-12 pt-5">
              <Image
                src="/openspace/two-feet.png"
                alt="law of two feet"
                className="shadow"
                width={925}
                height={577}
                style={{
                  borderRadius: "10px",
                }}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="container pt-70">
          <h3>Bumblebees and Butterflies</h3>
          <div className="row">
            <div className="col-lg-4 col-md-12 pt-5">
              <Image
                src="/openspace/bumblebee.png"
                alt="Bumblebee"
                className="shadow"
                width={603}
                height={614}
                style={{
                  borderRadius: "10px",
                }}
                unoptimized
              />
              <HtmlContent>{bumblebee!}</HtmlContent>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 col-md-12 pt-5">
              <HtmlContent>{butterfly!}</HtmlContent>
              <Image
                src="/openspace/butterfly.png"
                alt="Butterfly"
                className="shadow"
                width={1083}
                height={1033}
                style={{
                  borderRadius: "10px",
                }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section id="marketplace">
        <div className="container pt-100">
          <HtmlContent>{schedule!}</HtmlContent>
          <Expectations type={Enum_Expectation_Type.Secondary} />
        </div>
      </section>
    </Page>
  )
}
