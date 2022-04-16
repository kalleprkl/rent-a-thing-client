import React from 'react';
import { fetchThings } from "./services/api"

function App() {
  fetchThings()
  return (
    <div>
      kissa
    </div>
  );
}

export default App;
