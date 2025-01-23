import { useNavigation } from "@contexts/NavigationContext/NavigationContext"
import MainMenu from "@entities/MainMenu"
import NumberOfTeams from "@entities/NumberOfTeams"

const NavigationController = () => {
  const { currentView } = useNavigation()

  const views: Record<string, JSX.Element> = {
    "/": <MainMenu />,
    "number-of-teams": <NumberOfTeams />
  }

  const renderView = views[currentView] || <MainMenu />

  return <div>{renderView}</div>
}

export default NavigationController
