import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./AppCopy"

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}