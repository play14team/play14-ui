import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Not found",
}

const NotFoundPage = () => (
  <div className="pt-70">
    <h1>404: Not Found</h1>
    <p>You just hit a page that doesn&#39;t exist...</p>
    <Image
      src="play14_broken.png"
      alt="#play14 404"
      style={{ marginBottom: `1.45rem` }}
      unoptimized
    />
    <p>
      Please, stop playing with our URLs and{" "}
      <b>
        <Link href={"/"} className="orange">
          go back home
        </Link>
      </b>
    </p>
  </div>
)

export default NotFoundPage
