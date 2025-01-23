import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Test } from "./pages/Test"
import { Users } from "./pages/Users"
import { CreateUsers } from "./pages/CreateUsers/CreateUsers"
import './index.css'

export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/createUsers" element={<CreateUsers/>} />
        </Routes>
    </BrowserRouter>
  ) 
}
