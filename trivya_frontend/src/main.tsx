import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import WebFont from "webfontloader"
import { AdminModeContextProvider } from "@contexts/AdminModeContext/AdminModeContext"
import { MalteseQuestionsContextProvider } from "@contexts/MalteseQuestionsContext/MalteseQuestionsContext"
import { AdultModeContextProvider } from "@contexts/AdultModeContext/AdultModeContext"
import { NavigationProvider } from "@contexts/NavigationContext/NavigationContext"
import App from "./App"
import "./index.css"
import "./fonts.css"
import store from "./app/store"

WebFont.load({
  custom: {
    families: ["Rubik", "Righteous", "Paytone One"]
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLHtmlElement | DocumentFragment).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavigationProvider>
        <AdminModeContextProvider>
          <AdultModeContextProvider>
            <MalteseQuestionsContextProvider>
              <App />
            </MalteseQuestionsContextProvider>
          </AdultModeContextProvider>
        </AdminModeContextProvider>
      </NavigationProvider>
    </Provider>
  </React.StrictMode>
)
