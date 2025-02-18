import { dataAsArrayOf, query } from "@/libs/apollo-client"
import { deduplicate } from "@/libs/arrays"
import { EventEntity, EventNavDocument } from "@/models/graphql"
import Link from "next/link"
import Country from "../layout/country"

export default async function Countries() {
  const response = await query({ query: EventNavDocument })
  const events = dataAsArrayOf<EventEntity>(response.events || { data: [] })

  const countryCodes = deduplicate(
    events
      .map((c) => c.attributes?.location?.data?.attributes?.country || "")
      .filter((c) => c !== ""),
  )

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {countryCodes.sort().map((countryCode, index) => {
          return (
            <div key={index} className="article-tags">
              <Link href={`/events/countries/${countryCode.toLowerCase()}`}>
                <Country countryCode={countryCode} flagPosition="before" />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
