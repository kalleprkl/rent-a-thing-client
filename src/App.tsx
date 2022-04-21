import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import VirtualizedList from "./VirtualizedList"

import React, { useEffect } from "react"
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom"
import { useFetchAllCustomersQuery, QueryAction, useFetchContractsByCustomerQuery } from "./app/api"

interface AppAccordionProps {
  name: string,
  next: string,
  query: QueryAction
}

const AppAccordion: React.FC<AppAccordionProps> = props => {
  const { name, next, query, children } = props
  const path = `/${name}`
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  console.log(Object.keys(params))
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
            <Routes>
              <Route path={`${name}/:id`} element={<VirtualizedList query={query} next={next} />} />
              <Route path={`${name}`} element={<VirtualizedList query={query} next={next} />} />

            </Routes>
          ) : <div />
        }
      </AccordionDetails>
    </Accordion>
  )
}

export const App = () => {
  const navigate = useNavigate()
  useEffect(() => navigate("/"), [])
  return (
    <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
      <AppAccordion name="Customers" next="Contracts" query={useFetchAllCustomersQuery} />
      <AppAccordion name="Contracts" next="Things" query={useFetchContractsByCustomerQuery} />
    </div>
  )
}

export default App;
