import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { AdminModeContextProvider } from "@contexts/AdminModeContext/AdminModeContext"
import WebFont from "webfontloader"
import App from "./App"
import "./index.css"
import "./fonts.css"
import store from "./app/store"
import { MalteseQuestionsContextProvider } from "./contexts/MalteseQuestionsContext/MalteseQuestionsContext"
import { AdultModeContextProvider } from "./contexts/AdultModeContext/AdultModeContext"

WebFont.load({
  custom: {
    families: ["Rubik", "Righteous", "Paytone One"]
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLHtmlElement | DocumentFragment).render(
  <React.StrictMode>
    <Provider store={store}>
      <AdminModeContextProvider>
        <AdultModeContextProvider>
          <MalteseQuestionsContextProvider>
            <App />
          </MalteseQuestionsContextProvider>
        </AdultModeContextProvider>
      </AdminModeContextProvider>
    </Provider>
  </React.StrictMode>
)
