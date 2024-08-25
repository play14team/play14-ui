"use client"

import Image from "next/image"
import Link from "next/link"
import ReactAudioPlayer from "react-audio-player"
import { Testimonial } from "../../models/graphql"
import HtmlContent from "../layout/html-content"

const TestimonialItem = ({ testimonial }: { testimonial: Testimonial }) => {
  const author = testimonial.author?.data?.attributes
  const avatar = author?.avatar?.data?.attributes
  const audio = testimonial.audio?.data?.attributes

  return (
    <div className="col-lg-6 col-md-6">
      <div className="single-testimonials-item">
        {testimonial.content && (
          <HtmlContent>{testimonial.content}</HtmlContent>
        )}
        {testimonial.url && (
          <p>
            <Link href={testimonial.url} target="_blank">
              Read more
            </Link>
          </p>
        )}
        {audio && (
          <div className="pt-3">
            <ReactAudioPlayer src={audio.url} controls />
          </div>
        )}
        <div className="client-info">
          <div className="d-flex justify-content-center align-items-center">
            {avatar && (
              <Image
                src={avatar.url}
                alt={avatar.name}
                width={200}
                height={200}
                unoptimized
              />
            )}
            {!avatar && (
              <Image
                src={"/anonymous.png"}
                alt="anonymous"
                width={200}
                height={200}
                unoptimized
              />
            )}
            <div className="title">
              <h3>
                {author ? (
                  <Link href={`/players/${author.slug}`}>{author.name}</Link>
                ) : (
                  "Anonymous"
                )}
              </h3>
              <span>{author && author.tagline}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialItem
