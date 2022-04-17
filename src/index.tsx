import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { rentalApi } from "./app/api"
import App from "./App"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <ApiProvider api={rentalApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
)

