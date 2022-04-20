import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedList"

import React, { useState } from "react"
import { useLocation, useNavigate, Link, Navigate, Route, Routes } from "react-router-dom"

interface AppAccordionProps {
  name: string,
}

//const AppAccordion = (props: AppAccordionProps) => {
//  const { namespace } = props
//  const path = `/${namespace}`
//  const location = useLocation().pathname
//  const [expanded, setExpanded] = useState(false)
//  console.log(location)
//  const List = expanded && location === path ? () => <VirtualizedList /> : () => <div />
//  console.log(expanded)
//  return (
//    <Accordion onChange={(event, expanded) => setExpanded(expanded)}>
//      <Link to={path} >
//        <AccordionSummary
//          expandIcon={<ExpandMoreIcon />}
//          aria-controls="panel1a-content"
//          id="panel1a-header"
//        >
//          <Typography>{namespace}</Typography>
//        </AccordionSummary>
//      </Link>
//      <AccordionDetails>
//        <Routes>
//          <Route path={path} element={<List />} />
//        </Routes>
//      </AccordionDetails>
//    </Accordion>
//  )
//}

const AppAccordion = (props: AppAccordionProps) => {
  const { name } = props
  const location = useLocation()
  //const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()
  return (
    <Accordion onChange={(event, expanded) => expanded ? navigate(name) : navigate(-1)} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {
          location.pathname === `/${name}` ? (
            <>
              <VirtualizedList path={name} />
            </>
          ) : <div />
          }
      </AccordionDetails>
    </Accordion>
  )
}

export const App = () => {
  return (
    <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
      <AppAccordion name="Customers" />
      {/*<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Contract</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <VirtualizedList />
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Thing</Typography>
        </AccordionSummary>
      </Accordion>*/}
    </div>
  )
}

export default App;
