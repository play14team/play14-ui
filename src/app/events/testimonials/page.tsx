import TestimonialItem from "@/components/events/testimonial"
import Page from "@/components/layout/page"
import { query } from "@/libs/apollo-client"
import { Testimonial, TestimonialsDocument } from "@/models/graphql"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Testimonials",
}

export default async function Testimonials() {
  const response = (await query({ query: TestimonialsDocument })) as {
    testimonials?: Testimonial[]
  }
  const testimonials = response?.testimonials || []

  return (
    <Page name="Testimonials">
      <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
        <div className="container">
          <div className="row">
            {testimonials.map((testimonial) => (
              <TestimonialItem
                key={testimonial.documentId}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
