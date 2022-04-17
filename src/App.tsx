import React, { useState } from "react"
import { useFetchAllThingsQuery } from "./app/api"
import { Thing } from "./types"

const App = () => {
  const { data: things } = useFetchAllThingsQuery()
  return (
    <div>
      {things?.map(thing => thing.id)}
    </div>
  )
}

export default App;
