import { getClient } from "@/libs/apollo-client"
import { EventEntity, EventNavDocument } from "@/models/graphql"
import Link from "next/link"
import Country from "../layout/country"

export default async function Countries() {
  const { data } = await getClient().query({ query: EventNavDocument })
  const events = data.events?.data as EventEntity[]

  const countryCodes = [
    ...new Set(
      events
        .map((c) => c.attributes?.location?.data?.attributes?.country!)
        .filter((c) => c !== ""),
    ),
  ]

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {countryCodes.map((countryCode, index) => {
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
