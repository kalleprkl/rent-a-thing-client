import React from "react"
import { useFetchAllThingsQuery } from "./app/api"

function App() {
  const handleClick = () => () => ""
  const { data, error, isLoading } = useFetchAllThingsQuery()
  return (
    <div>
      <ul>
        {data?.map((item: any) => <li key={item.id} onClick={handleClick()}>{item.id}</li>)}
      </ul>
    </div>
  );
}

export default App;
