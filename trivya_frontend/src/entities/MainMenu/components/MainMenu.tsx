import { FC, useContext } from "react"
import AdultModeToggle from "@shared/AdultModeToggle/components/AdultModeToggle"
import { Logo } from "@shared/Logo"
import { MalteseQuestionsToggle } from "@shared/MalteseQuestionsToggle"
import MenuButton from "@shared/MenuButton"
import useBackgroundGradient from "@hooks/useBackgroundGradient/useBackgroundGradient"
import MaltaLocationDialogContainer from "@shared/MaltaLocationDialog/containers/MaltaLocationDialogContainer"
import { AdultModeContext } from "@contexts/AdultModeContext/AdultModeContext"
import BirthdateDialogContainer from "@shared/BirthdateDialog/containers/BirthdateDialogContainer"
import { AdminModeContext } from "@contexts/AdminModeContext/AdminModeContext"
import { MalteseQuestionsContext } from "@contexts/MalteseQuestionsContext/MalteseQuestionsContext"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import useMenuButtons from "@shared/MenuButton/hooks/useMenuButtons"

// TODO: import here or at app? for performance
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const MainMenu: FC = () => {
  const { isDisplayingAdultMode, isBirthdateConfirmed, isBirthdateDialogDisplayed, setIsBirthdateDialogDisplayed } = useContext(AdultModeContext)
  const { isDisplayingAdminMode } = useContext(AdminModeContext)
  const { isDisplayingMalteseFlag } = useContext(MalteseQuestionsContext)

  useBackgroundGradient({ numberOfTeams: 1 })

  return (
    <div className="pt-32">
      <Logo />

      <div className="FLEX-CENTER m-auto laptop:w-[50%] tablet:w-[45%] mobileL:w-[75%] w-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}
        >
          {useMenuButtons(isDisplayingAdultMode, isDisplayingAdminMode).map(({ id, icon, label, url }) => (
            <SwiperSlide className="p-10 FLEX-CENTER" key={id}>
              <MenuButton {...{ id, icon, label, url }} />
            </SwiperSlide>
          ))}
        </Swiper>

        {isDisplayingMalteseFlag && <MalteseQuestionsToggle />}

        {isBirthdateDialogDisplayed && !isBirthdateConfirmed && <BirthdateDialogContainer />}

        {isBirthdateConfirmed && <AdultModeToggle />}
      </div>

      {!isBirthdateConfirmed && (
        <div className="FLEX-CENTER absolute bottom-48 left-0 right-0 text-lg">
          Over the age of 18?
          <button type="button" className="ml-1 text-primary font-medium" onClick={() => setIsBirthdateDialogDisplayed(true)}>
            Verify
          </button>
        </div>
      )}

      <MaltaLocationDialogContainer />
    </div>
  )
}

export default MainMenu
