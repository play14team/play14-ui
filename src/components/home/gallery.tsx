import { getHome } from "./get.action"
import Gallery from "../layout/gallery"

const HomeGallery = async () => {
  const home = await getHome()
  const images = home?.images?.filter((img) => img != null)

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
