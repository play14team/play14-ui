import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import TestimonialItem from "../../components/events/testimonial";
import Page from "../../components/layout/page";
import { Testimonial, TestimonialsDocument } from "../../models/graphql";

const Testimonials: NextPage = () => {
  const { data, loading, error } = useQuery(TestimonialsDocument);

  return (
    <Page name="Testimonials" loading={loading} error={error}>
      <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="row">
            {!loading &&
              data.testimonials.data.map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  testimonial={testimonial.attributes as Testimonial}
                />
              ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Testimonials;
