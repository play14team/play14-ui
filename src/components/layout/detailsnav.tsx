import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { UploadFile } from "../../models/graphql"

export interface NavLink {
  slug: string
  name: string
  image: UploadFile
  date?: Date
}

const DetailsNavigator = (props: {
  previous: NavLink
  next: NavLink
  entity: string
}) => {
  const { previous, next, entity } = props

  return (
    <nav className="tracer-post-navigation">
      {previous && (
        <div className="prev-link-wrapper" style={{ flex: "none" }}>
          <div className="info-prev-link-wrapper">
            <Link href={`/${entity}/${previous.slug}`}>
              <span className="image-prev">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100px",
                  }}
                >
                  {getImage(previous.image)}
                </div>

                <span className="post-nav-title">Prev</span>
              </span>

              <span className="prev-link-info-wrapper">
                <span className="prev-title">{previous.name}</span>
                <span className="meta-wrapper">
                  <span className="date-post">
                    {previous.date &&
                      moment(previous.date).format("MMM Do, YYYY")}
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      )}
      {!previous && <p> </p>}

      {next && (
        <div className="next-link-wrapper" style={{ flex: "none" }}>
          <div className="info-next-link-wrapper">
            <Link href={`/${entity}/${next.slug}`}>
              <span className="next-link-info-wrapper">
                <span className="next-title">{next.name}</span>
                <span className="meta-wrapper">
                  <span className="date-post">
                    {next.date && moment(next.date).format("MMM Do, YYYY")}
                  </span>
                </span>
              </span>

              <span className="image-next">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100px",
                  }}
                >
                  {getImage(next.image)}
                </div>
                <span className="post-nav-title">Next</span>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function getImage(image?: UploadFile) {
  if (image)
    return (
      <Image
        src={image.url}
        alt={image.name}
        sizes="100vw"
        fill
        style={{ objectFit: "cover" }}
        unoptimized
      />
    )
  else
    return (
      <Image
        src={"/default-player.png"}
        alt={"default player image"}
        sizes="100vw"
        width={500}
        height={500}
        style={{ objectFit: "cover" }}
        unoptimized
      />
    )
}

export default DetailsNavigator
