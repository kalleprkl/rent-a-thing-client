import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import React from "react"
import * as ReactDOM from "react-dom"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { rentalApi } from "./app/api"
import Router from "./Router"

const container = document.getElementById("root") as HTMLElement
ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={rentalApi}>
      <Router />
    </ApiProvider>
  </React.StrictMode>,
  container
)

