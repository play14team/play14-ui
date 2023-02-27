import { useQuery } from "@apollo/client";
import exp from "constants";
import Link from "next/link";
import {
  Enum_Expectation_Type,
  ExpectationsDocument,
} from "../../models/graphql";
import Html from "../layout/html";
import Loader from "../layout/loader";

const Expectations = (props: { type: Enum_Expectation_Type }) => {
  const { type } = props;
  const { data, loading } = useQuery(ExpectationsDocument, {
    variables: { type: type },
  });

  if (loading) return <Loader size="20vh" />;

  return (
    <section className="solutions-area pb-70">
      <div className="container">
        <div className="row">
          {data &&
            data.expectations?.data.map((expectation) => (
              <div key={expectation.id} className="col-lg-6 col-sm-6">
                <div className="single-solutions-box">
                  <div className="icon orange">
                    <i className={expectation.attributes.icon}></i>
                  </div>
                  <h3>{expectation.attributes.title}</h3>
                  <Html>{expectation.attributes.content}</Html>
                </div>
              </div>
            ))}
          ;
        </div>
      </div>
    </section>
  );
};

export default Expectations;
