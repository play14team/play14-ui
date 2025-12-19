import { deduplicate } from "@/libs/arrays"
import { Event } from "@/models/strapi"
import Link from "next/link"
import { getEventNav } from "./get.action"

export default async function Locations() {
  const events = (await getEventNav()) as Event[]
  const locations = deduplicate(events.map((a) => a.location?.slug))

  return (
    <div className="blog-details-desc pb-70">
      <div className="article-footer">
        {locations.sort().map((item, index) => (
          <div key={index} className="article-tags">
            <span>
              <i className="bx bx-map-pin"></i>
            </span>

            <Link href={`/events/locations/${item}`}>
              {events.find((e) => e.location?.slug == item)?.location?.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
