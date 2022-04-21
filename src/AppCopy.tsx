import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedListCopy"

import React, { useEffect } from "react"
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom"
import { useFetchAllCustomersQuery, QueryAction, useFetchContractsByCustomerQuery } from "./app/api"

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
  console.log(path)
  console.log(pathSections)
  console.log(pathObjects)
  return (
    <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
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
    </div>
  )
}

export default App;
