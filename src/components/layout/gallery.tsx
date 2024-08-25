"use client"

import "react-photo-album/rows.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "yet-another-react-lightbox/styles.css"

import { useState } from "react"

import { RowsPhotoAlbum } from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import { UploadFileEntity } from "../../models/graphql"

const Gallery = (props: { images: UploadFileEntity[] }) => {
  const [index, setIndex] = useState(-1)
  const { images } = props

  if (!images) {
    return <>No image found!</>
  }

  const photos = images.map((img) => {
    return {
      src: img.attributes?.url || "",
      width: img.attributes?.width || 500,
      height: img.attributes?.height || 500,
    }
  })

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  )
}

export default Gallery
