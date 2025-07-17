import { dataAsArrayOf } from "@/libs/apollo-client"
import { Enum_Expectation_Type, ExpectationEntity } from "../../models/graphql"
import HtmlContent from "../layout/html-content"
import { getExpectations } from "./get-expectations.action"

export default async function Expectations({
  type,
}: {
  type: Enum_Expectation_Type
}) {
  const response = await getExpectations({ type })
  const expectations = dataAsArrayOf<ExpectationEntity>(
    response?.data?.expectations || { data: [] },
  )

  return (
    <section className="solutions-area pb-70">
      <div className="container">
        <div className="row">
          {expectations &&
            expectations.map((expectation) => (
              <div key={expectation.id} className="col-lg-6 col-sm-6">
                <div className="single-solutions-box">
                  <div className="icon orange">
                    <i className={expectation.attributes?.icon}></i>
                  </div>
                  <h3>{expectation.attributes?.title}</h3>
                  <HtmlContent>
                    {expectation.attributes?.content || ""}
                  </HtmlContent>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
