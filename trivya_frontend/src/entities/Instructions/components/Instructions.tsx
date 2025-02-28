import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { Header } from "@shared/Header"

const Instructions = () => {
  const [hasReachedLastPage, setHasReachedLastPage] = useState(false)

  const handleSlideChange = (swiper: SwiperCore) => {
    if (swiper.isEnd) {
      setHasReachedLastPage(true)
    } else {
      setHasReachedLastPage(false)
    }
  }

  // TODO: try find Swiper-approved solution to changing active bullet colour
  useEffect(() => {
    const stylesheet = document.styleSheets[0]
    stylesheet.insertRule(".swiper-pagination-bullet-active { background: rgb(249 104 21) !important;}", 0)
  }, [])

  return (
    <>
      <Header
        backNavigationTarget="/number-of-teams"
        displayBackButton
        nextNavigationTarget="/quiz"
        displayNextButton
        nextButtonIcon="fa-check"
        displayNextButtonCondition={hasReachedLastPage}
      />
      <Swiper onSlideChange={handleSlideChange} pagination modules={[Pagination]} className="h-3/4 bg-secondary">
        <SwiperSlide>
          <div className="h-3/4 flex justify-center items-center bg-primary rounded-xl m-5">
            Classic game mode
            <br />
            Point 1
            <br />
            Point 2
            <br />
            Point 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-3/4 flex justify-center items-center bg-primary rounded-xl m-5">Hello2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-3/4 flex justify-center items-center bg-primary rounded-xl m-5">Hello3</div>
        </SwiperSlide>
      </Swiper>
      <button type="button">Hide this instruction prompt for this gamemode CHECKBOX STORE IN REDUX</button>
    </>
  )
}

export default Instructions
