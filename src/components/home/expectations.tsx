import { Enum_Expectation_Type, Expectation } from "@/models/strapi"
import HtmlContent from "../layout/html-content"
import { getExpectations } from "./get.action"

export default async function Expectations({
  type,
}: {
  type: Enum_Expectation_Type
}) {
  const expectations = (await getExpectations(type)) as Expectation[]

  return (
    <section className="solutions-area pb-70">
      <div className="container">
        <div className="row">
          {expectations &&
            expectations.map((expectation) => (
              <div key={expectation.documentId} className="col-lg-6 col-sm-6">
                <div className="single-solutions-box">
                  <div className="icon orange">
                    <i className={expectation.icon}></i>
                  </div>
                  <h3>{expectation.title}</h3>
                  <HtmlContent>{expectation.content || ""}</HtmlContent>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
