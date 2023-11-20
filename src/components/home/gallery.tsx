import { useQuery } from "@apollo/client"
import { HomeDocument, UploadFileEntity } from "../../models/graphql"
import ErrorMessage from "../layout/error"
import Gallery from "../layout/gallery"
import Loader from "../layout/loader"

const HomeGallery = () => {
  const { data, loading, error } = useQuery(HomeDocument)
  const images = data?.home?.data?.attributes?.images.data

  return (
    <div className="pt-100">
      <h3 className=" pb-4">Photo gallery</h3>
      <p>
        However, #play14 is first and foremost a community of people, a family,
        and an incredible human adventure.
      </p>

      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {images && <Gallery images={images} />}
    </div>
  )
}

export default HomeGallery
