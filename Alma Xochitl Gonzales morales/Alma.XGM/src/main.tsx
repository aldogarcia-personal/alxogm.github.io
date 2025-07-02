import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import { StrictMode } from "react"
import App from "./App"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"
import { MenuProvider } from "./context/MenuContext"

const rootElement = document.getElementById("root")
if (rootElement != null) {
  createRoot(rootElement).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <Router>
          <MenuProvider>
            <App />
          </MenuProvider>
        </Router>
      </I18nextProvider>
    </StrictMode>
  )
}
