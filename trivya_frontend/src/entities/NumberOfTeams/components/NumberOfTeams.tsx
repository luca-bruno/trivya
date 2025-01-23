import Header from "@shared/Header"
import MenuButton from "@shared/MenuButton"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { useState } from "react"
import buttons from "../data"

const NumberOfTeams = () => {
  const [teamQuantitySelected, setTeamQuantitySelected] = useState<number | null>(null)

  return (
    <>
      <Header displayBackButton backNavigationTarget="/" />
      {/* <InstructionPrompt text="Tap to select number of teams!" /> */}
      <div className="FLEX-CENTER m-auto laptop:w-[50%] tablet:w-[45%] mobileL:w-[75%] w-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}
        >
          {buttons.map(({ id, icon, label, backgroundColour, textColour }) => (
            <SwiperSlide className="p-10 FLEX-CENTER" key={id}>
              <MenuButton {...{ id, icon, label, backgroundColour, textColour }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default NumberOfTeams
