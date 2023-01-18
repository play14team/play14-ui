import ReactHtmlParser from "react-html-parser";

const EventDescription = (props: { description: string }) => {
  const { description } = props;
  return (
    <>
      <div className="section-title">
        <span className="sub-title">Details</span>
      </div>
      <div className="events-details-desc">{ReactHtmlParser(description)}</div>
    </>
  );
};
export default EventDescription;
