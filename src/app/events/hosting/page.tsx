import HtmlContent from "@/components/layout/html-content"
import Page from "@/components/layout/page"
import { attributesAs, query } from "@/libs/apollo-client"
import { Hosting, HostingDocument } from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Hosting",
}

export default async function Hosting() {
  const response = await query({ query: HostingDocument })
  const hosting = attributesAs<Hosting>(response.hosting)

  return (
    <Page name="All you need to know about hosting a #play14 event">
      <div className="pt-100 pb-70">
        <div className="container">
          <HtmlContent>{hosting.content!}</HtmlContent>
        </div>
      </div>
    </Page>
  )
}
