import React from "react"

// Images
import slide_img_1 from "shared/assets/images/slide_img_1.jpg"
import slide_img_2 from "shared/assets/images/slide_img_2.jpg"

// Components
import { Slider, BannerHand, BannerBaby } from "shared/components"

// Compositions
import { Banners } from "shared/compositions"

const slides = [
  { img: slide_img_1, title: "Winter is coming" },
  { img: slide_img_2, title: "100% biodegradable" },
]

function index() {
  return (
    <div>
      <section>
        <Slider slides={slides} />
      </section>
      <section>
        <Banners left={<BannerHand />} right={<BannerBaby />} />
      </section>
    </div>
  )
}

export default index