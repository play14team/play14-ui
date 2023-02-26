import Image from "next/image";
import Link from "next/link";
import ReactAudioPlayer from "react-audio-player";
import { Testimonial } from "../../models/graphql";
import Html from "../layout/html";

const TestimonialItem = (props: { testimonial: Testimonial }) => {
  const { testimonial } = props;
  const author = testimonial.author?.data?.attributes;
  const avatar = author?.avatar?.data?.attributes;
  const audio = testimonial.audio?.data?.attributes;

  return (
    <div className="col-lg-6 col-md-6">
      <div className="single-testimonials-item">
        {testimonial.content && <Html>{testimonial.content}</Html>}
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
              />
            )}
            {!avatar && (
              <Image
                src={"/anonymous.png"}
                alt="anonymous"
                width={200}
                height={200}
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
  );
};

export default TestimonialItem;
