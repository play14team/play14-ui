import {
  Enum_Expectation_Type,
  ExpectationEntityResponseCollection,
} from "../../models/graphql"
import HtmlContent from "../layout/html-content"
import { getExpectations } from "./get-expectations.action"

export default async function Expectations({
  type,
}: {
  type: Enum_Expectation_Type
}) {
  const { data } = await getExpectations({ type })
  const expectations = data?.expectations as ExpectationEntityResponseCollection

  return (
    <section className="solutions-area pb-70">
      <div className="container">
        <div className="row">
          {expectations &&
            expectations.data.map((expectation) => (
              <div key={expectation.id} className="col-lg-6 col-sm-6">
                <div className="single-solutions-box">
                  <div className="icon orange">
                    <i className={expectation.attributes?.icon}></i>
                  </div>
                  <h3>{expectation.attributes?.title}</h3>
                  <HtmlContent>{expectation.attributes?.content!}</HtmlContent>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
