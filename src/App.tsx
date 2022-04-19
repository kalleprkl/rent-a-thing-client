import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedList"

import React from "react"

export const App = () => {
  return (
    <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Customer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <VirtualizedList />
        </AccordionDetails>
      </Accordion>
      <Accordion disabled >
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
      </Accordion>
    </div>
  )
}

export default App;
