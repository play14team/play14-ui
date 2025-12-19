import { deduplicate } from "@/libs/arrays"
import { Event } from "@/models/strapi"
import Link from "next/link"
import Country from "../layout/country"
import { getEventNav } from "./get.action"

export default async function Countries() {
  const events = (await getEventNav()) as Event[]

  const countryCodes = deduplicate(
    events.map((c) => c.location?.country || "").filter((c) => c !== ""),
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
