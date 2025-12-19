import { getHosting } from "@/components/events/get.action"
import HtmlContent from "@/components/layout/html-content"
import Page from "@/components/layout/page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Hosting",
}

export default async function HostingPage() {
  const hosting = await getHosting()

  return (
    <Page name="All you need to know about hosting a #play14 event">
      <div className="pt-100 pb-70">
        <div className="container">
          <HtmlContent>{hosting?.content || ""}</HtmlContent>
        </div>
      </div>
    </Page>
  )
}
