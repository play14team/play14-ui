import Html from "../layout/html";

const EventDescription = (props: { description: string }) => {
  const { description } = props;
  return (
    <>
      <div className="section-title">
        <span className="sub-title">Details</span>
      </div>
      <div className="events-details-desc">
        <Html>{description}</Html>
      </div>
    </>
  );
};
export default EventDescription;
