import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from "./app/store"
import { fetchThings } from "./services/api"

const initAction = async () => {
  return {
    type: "things/add",
    payload: await fetchThings()
  }
}

(async () => store.dispatch(await initAction()))()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

