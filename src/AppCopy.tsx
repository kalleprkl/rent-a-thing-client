import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedListCopy"

import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom"

import React, { useEffect } from "react"
import { skipToken } from "@reduxjs/toolkit/dist/query"
import { useFetchAllCustomersQuery, AppData, QueryAction, useFetchContractsByCustomerQuery } from "./app/api"

interface AppAccordionProps {
  //name: string,
  //next: string,
  //query: QueryAction
}

const AppAccordion: React.FC<AppAccordionProps> = props => {
  return (
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
}

interface PathObject {
  name: string,
  id: number
}

interface QueryActions {
  Customers: typeof useFetchAllCustomersQuery,
  Contracts: typeof useFetchContractsByCustomerQuery
}

export const App = () => {
  const navigate = useNavigate()
  useEffect(() => navigate("Customers/1/Contracts/1"), [])
  const path = useLocation().pathname
  const pathSections = path.split("/").slice(1)
  const pathObjects = []
  let pathObject = {} as PathObject
  for (const section of pathSections) {
    const maybeId = Number(section)
    if (maybeId) {
      pathObject.id = maybeId
      pathObjects.push(pathObject)
      pathObject = {} as PathObject
    } else {
      pathObject.name = section
    }
  }
  const appElements = pathObjects.map(({ name, id }) => {
    let data: Array<AppData> | undefined
    data = useFetchAllCustomersQuery(name === "Customers" ? undefined : skipToken).data
    data = useFetchContractsByCustomerQuery(name === "Contracts" ? id ?? skipToken : skipToken).data
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
