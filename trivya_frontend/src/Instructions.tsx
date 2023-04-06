import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

const Instructions = () => {
  // TODO: try find Swiper-approved solution to changing active bullet colour
  useEffect(() => {
    const stylesheet = document.styleSheets[0]
    stylesheet.insertRule(".swiper-pagination-bullet-active { background: rgb(249 104 21) !important;}", 0)
  }, [])

  return (
    <>
      <Swiper
        pagination
        modules={[Pagination]}
        className="h-3/4 bg-secondary"
      >
        <SwiperSlide>
          <div className="h-3/4 flex justify-center items-center bg-primary rounded-xl m-5">
            Classic game mode
            <br />
            - Point 1
            <br />
            - Point 2
            <br />
            - Point 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-3/4 flex justify-center items-center bg-primary rounded-xl m-5">
            Hello2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-3/4 flex justify-center items-center bg-primary rounded-xl m-5">
            Hello3
          </div>
        </SwiperSlide>
      </Swiper>
      <button type="button">Hide this instruction prompt for this gamemode</button>
      <button type="button">Proceed to quiz</button>
    </>
  )
}

export default Instructions
