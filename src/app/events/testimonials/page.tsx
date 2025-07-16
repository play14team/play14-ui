import TestimonialItem from "@/components/events/testimonial"
import Page from "@/components/layout/page"
import { dataAsArrayOf, query } from "@/libs/apollo-client"
import {
  TestimonialEntity,
  TestimonialEntityResponseCollection,
  TestimonialsDocument,
} from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Testimonials",
}

export default async function Testimonials() {
  const response = (await query({ query: TestimonialsDocument })) as {
    testimonials?: TestimonialEntityResponseCollection
  }
  const testimonials = dataAsArrayOf<TestimonialEntity>(
    response?.testimonials || { data: [] },
  )

  return (
    <Page name="Testimonials">
      <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="row">
            {testimonials.map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                testimonial={testimonial.attributes!}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
