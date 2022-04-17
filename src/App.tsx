import React from 'react';
import { useAppSelector, useAppDispatch } from "./app/hooks"

function App() {
  const things = useAppSelector(state => state.things)
  const handleClick = (id: number) => () => useAppDispatch()
  return (
    <div>
      <ul>
        {things.map((item: any) => <li key={item.id} onClick={handleClick(item.id)}>{item.id}</li>)}
      </ul>
    </div>
  );
}

export default App;
