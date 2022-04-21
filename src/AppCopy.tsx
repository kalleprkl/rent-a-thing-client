import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedListCopy"

import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

import React, { useEffect, useState } from "react"
import { SkipToken, skipToken } from "@reduxjs/toolkit/dist/query"
import { AppData, useFetchAllCustomersQuery, useFetchContractsByCustomerQuery } from "./app/api"

interface PathObject {
  name: string,
  id: number,
  data: Array<AppData>
  skip: SkipToken | undefined | number | SkipToken | void
}

export const App = () => {
  const navigate = useNavigate()
  const path = useLocation().pathname
  const [customers, setCustomers] = useState<PathObject>({ skip: skipToken } as PathObject)
  const [contracts, setContracts] = useState<PathObject>({ skip: skipToken } as PathObject)
  useEffect(() => navigate("Customers/1/Contracts/1"), [])
  useEffect(() => {
    const pathSections = path.split("/").slice(1)
    const assign = (pathObject: PathObject) => {
      const { id, name } = pathObject
      if (name === "Customers") {
        setCustomers({ ...pathObject, ...{ skip: undefined } })
      }
      if (name === "Contracts" && id) {
        setContracts({ ...pathObject, ...{ skip: id } })
        contracts.skip = id
      }
    }
    let pathObject = {} as PathObject
    for (const section of pathSections) {
      const { name } = pathObject
      const maybeId = Number(section)
      if (maybeId) {
        pathObject.id = maybeId
      } else {
        if (!name) {
          pathObject.name = section
          assign(pathObject)
          pathObject = {} as PathObject
        } else {
          assign(pathObject)
          pathObject = { name } as PathObject
        }
      }
    }
  }, [])
  const customersData = useFetchAllCustomersQuery(customers.skip as void).data
  const contractsData = useFetchContractsByCustomerQuery(contracts.skip).data
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
