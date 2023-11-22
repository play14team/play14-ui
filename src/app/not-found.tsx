import Image from "next/image"
import Link from "next/link"
import notound from "/public/play14_broken.png"

const NotFoundPage = () => (
  <>
    <h1>404: Not Found</h1>
    <p>You just hit a page that doesn&#39;t exist...</p>
    <Image
      src={notound}
      alt="#play14 404"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      Please, stop playing with our URLs and{" "}
      <b>
        <Link href={"/"} className="orange">
          go back home
        </Link>
      </b>
    </p>
  </>
)

export default NotFoundPage
