import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import "./index.css"
import store from "./app/store"
import { MalteseQuestionsContextProvider } from "./contexts/MalteseQuestionsContext"
import { AdultModeContextProvider } from "./contexts/AdultModeContext"

ReactDOM.createRoot(document.getElementById("root") as (HTMLHtmlElement | DocumentFragment)).render(
  // <React.StrictMode>
  <Provider store={store}>
    <AdultModeContextProvider>
      <MalteseQuestionsContextProvider>
        <App />
      </MalteseQuestionsContextProvider>
    </AdultModeContextProvider>
  </Provider>
  // </React.StrictMode>
)
