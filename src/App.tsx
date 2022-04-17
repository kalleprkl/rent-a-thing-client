import React from "react"
import { useFetchAllThingsQuery } from "./app/api"

const App = () => {
  const { data: things } = useFetchAllThingsQuery()
  return (
    <div>
      {things?.map(thing => thing.id)}
    </div>
  )
}

export default App;
