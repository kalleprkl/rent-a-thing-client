import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedList"

import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useFetchAllCustomersQuery, QueryAction } from "./app/api"

interface AppAccordionProps {
  name: string,
  next: string,
  query: QueryAction
}

const AppAccordion = (props: AppAccordionProps) => {
  const { name, next, query } = props
  const path = `/${name}`
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <Accordion expanded={location.pathname === path} onChange={(event, expanded) => expanded ? navigate(name) : navigate("/")} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {
          location.pathname === path ? (
            <>
              <VirtualizedList query={query} next={next} />
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
      <AppAccordion name="Customers" next="Contracts" query={useFetchAllCustomersQuery} />
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
