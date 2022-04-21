import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedListCopy"

import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

import React, { useEffect } from "react"
import { SkipToken, skipToken } from "@reduxjs/toolkit/dist/query"
import { useFetchAllCustomersQuery, useFetchContractsByCustomerQuery } from "./app/api"

interface PathObject {
  name: string,
  id: number
}

export const App = () => {
  const navigate = useNavigate()
  useEffect(() => navigate("Customers/1/Contracts/1"), [])
  const path = useLocation().pathname
  const pathSections = path.split("/").slice(1)
  const pathObjects = []
  let pathObject = {} as PathObject
  for (const section of pathSections) {
    const { id, name } = pathObject
    const maybeId = Number(section)
    // This assumes path form to be name/id/name/id
    if (maybeId) {
      pathObject.id = maybeId
    } else {
      if (!name) {
        pathObject.name = section
        pathObjects.push(pathObject)
        pathObject = {} as PathObject
      } else {
        pathObjects.push(pathObject)
        pathObject = { name } as PathObject
      }
    }
  }
  console.log(pathObjects)
  let customers: undefined | SkipToken, contracts: number | SkipToken = skipToken
  for (const { name, id } of pathObjects) {
    if (name === "Customers") {
      customers = undefined
    }
    if (name == "Contracts" && id) {
      contracts = id
    }
  }
  const customersData = useFetchAllCustomersQuery(customers).data
  const contractsData = useFetchContractsByCustomerQuery(contracts).data
  const appElements: Array<React.FC> = [customersData, contractsData].map(data => {
    return () => (
      <Accordion onChange={(event, expanded) => ""} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{""}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            <Routes>
              <Route path={""} element={<VirtualizedList />} />
            </Routes>
          }
        </AccordionDetails>
      </Accordion>
    )
})
return (
  <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
    {appElements.map(AppElement => <AppElement />)}
  </div>
)
}

export default App;
