import moment from "moment"
import Image from "next/image"
import { Enum_Componentdefaulthistoryitem_Dateformat } from "../../models/graphql"

interface HistoryProps {
  date: Date
  dateFormat: Enum_Componentdefaulthistoryitem_Dateformat
  additionalText: string
  title: string
  image?: string
  imageAlt?: string
  children: React.ReactNode
}

const HistoryItem = (props: HistoryProps) => {
  const { date, dateFormat, additionalText, title, image, imageAlt, children } =
    props

  const format = getFormat(dateFormat)

  return (
    <li className="timeline-block">
      <div className="timeline-date">
        <span>{moment(date).format("YYYY")}</span>
        {format && moment(date).format(format)}
        {additionalText}
      </div>

      <div className="timeline-icon">
        <span className="dot-badge"></span>
      </div>

      <div className="timeline-content">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="content">
              <h3>{title}</h3>
              {children}
            </div>
          </div>

          {image && (
            <div className="col-lg-5 col-md-12">
              <div className="image">
                <Image
                  src={image}
                  alt={imageAlt || "image"}
                  width={250}
                  height={250}
                  unoptimized
                  className="shadow"
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

const getFormat = (dateFormat: Enum_Componentdefaulthistoryitem_Dateformat) => {
  switch (dateFormat) {
    case Enum_Componentdefaulthistoryitem_Dateformat.Day:
      return "MMMM Do"
    case Enum_Componentdefaulthistoryitem_Dateformat.Month:
      return "MMMM"
    default:
      return undefined
  }
}

export default HistoryItem
