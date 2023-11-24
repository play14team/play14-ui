import HtmlContent from "../layout/html-content"

const EventDescription = (props: { description: string }) => {
  const { description } = props
  return (
    <>
      <div className="section-title">
        <span className="sub-title">Details</span>
      </div>
      <div className="events-details-desc">
        <HtmlContent>{description}</HtmlContent>
      </div>
    </>
  )
}
export default EventDescription
