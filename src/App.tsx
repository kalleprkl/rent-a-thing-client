import React, { useState, useEffect } from 'react';
import { fetchThings } from "./services/api"

function App() {
  //const [data, setData] = useState([])
  //useEffect(() => {
  //  (async () => setData(await fetchThings()))()
  //}, [])
  return (
    <div>
      <ul>
        {/*data.map((item: any) => <li>{item.id}</li>)*/}
      </ul>
    </div>
  );
}

export default App;
