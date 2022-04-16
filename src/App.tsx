import React from 'react';
import { useAppSelector } from "./app/hooks"

function App() {
  const things = useAppSelector(state => state.things)
  console.log(things)
  return (
    <div>
      <ul>
        {things.map((item: any) => <li>{item.id}</li>)}
      </ul>
    </div>
  );
}

export default App;
