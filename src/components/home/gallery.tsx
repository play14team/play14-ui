import { attributesAs, query } from "@/libs/apollo-client"
import { Home, HomeDocument } from "../../models/graphql"
import Gallery from "../layout/gallery"

const HomeGallery = async () => {
  const response = await query({ query: HomeDocument })
  const home = attributesAs<Home>({ data: response.home?.data ?? {} })
  const images = home.images.data

  return (
    <div className="pt-100">
      <h3 className="pb-3">Photo gallery</h3>
      <p className="pb-4">
        #play14 is first and foremost a community of people, a family, and an
        incredible human adventure.
      </p>

      {images && <Gallery images={images} />}
    </div>
  )
}

export default HomeGallery
