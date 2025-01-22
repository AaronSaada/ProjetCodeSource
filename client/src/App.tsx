import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { Test } from "./Test"

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/test" element={<Test/>} />
        </Routes>
    </BrowserRouter>
  ) 
}
