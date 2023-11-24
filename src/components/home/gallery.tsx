import { getClient } from "@/libs/apollo-client"
import { HomeDocument } from "../../models/graphql"
import Gallery from "../layout/gallery"

const HomeGallery = async () => {
  const { data } = await getClient().query({ query: HomeDocument })
  const images = data?.home?.data?.attributes?.images.data

  return (
    <div className="pt-100">
      <h3 className=" pb-4">Photo gallery</h3>
      <p>
        However, #play14 is first and foremost a community of people, a family,
        and an incredible human adventure.
      </p>

      {images && <Gallery images={images} />}
    </div>
  )
}

export default HomeGallery
