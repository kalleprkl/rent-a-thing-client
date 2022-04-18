import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import VirtualizedList from "./VirtualizedList"

import React, { useState } from "react"
import { Customer, AppData, useFetchAllCustomersQuery, useFetchAllThingsQuery, useFetchContractsByCustomerQuery } from "./app/api"

export type EventListener = (arg0: AppData) => () => void

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | undefined>(undefined)
  const handleClick = (customer: Customer) => () => setSelectedCustomer(customer)
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
          <VirtualizedList showAction={useFetchAllCustomersQuery} eventListener={handleClick} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Contract</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          </Typography>
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
