import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { Test } from "./Test"
import { Users } from "./Users"
import './index.css'

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/users" element={<Users/>} />
        </Routes>
    </BrowserRouter>
  ) 
}
