import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedList"

import React, { useState } from "react"
import { useLocation, Link, Route, Routes } from "react-router-dom"

const AppAccordion = () => {
  const location = useLocation().pathname
  const [expanded, setExpanded] = useState(false)
  console.log(location)
  const List = expanded && location === "/Customers" ? () => <VirtualizedList /> : () => <div />
  console.log(expanded)
  return (
    <Accordion onChange={(event, expanded) => setExpanded(expanded)}>
      <Link to="/Customers">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Customer</Typography>
        </AccordionSummary>
      </Link>
      <Routes>
        <Route path="/Customers" element={<AccordionDetails>
          <List />
        </AccordionDetails>} />
      </Routes>


    </Accordion>
  )
}

export const App = () => {
  return (
    <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
      <AppAccordion />
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
