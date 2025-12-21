import { getRandomTestimonials } from "./get.action"
import TestimonialsRefresh from "./testimonials-refresh"
import Link from "next/link"

const HomeTestimonials = async () => {
  const testimonials = await getRandomTestimonials(4)

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <div className="pt-100">
      <h3 className="pb-3">What our community says</h3>
      <p>
        Hear from members of the #play14 community about their experiences.
        These testimonials capture the spirit, impact, and joy of our events
        around the world.
      </p>

      <TestimonialsRefresh initialTestimonials={testimonials} />

      <div className="d-flex justify-content-center pb-70 pt-70">
        <Link href="/events/testimonials" className="default-btn">
          View all testimonials
        </Link>
      </div>
    </div>
  )
}

export default HomeTestimonials
