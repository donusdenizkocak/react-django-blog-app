
import NavBar from "../components/NavBar"
import Dashboard from "../pages/Dashboard"
import Footer from "../components/Footer"
import About from "../pages/About"
import NewBlog from "../pages/NewBlog"
import Detail from "../pages/Detail"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRouter } from "./PrivateRouter"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="" element={<PrivateRouter/>}>
                    <Route path="/new-blog" element={<NewBlog />} />
                    <Route path="/detail/:id" element={<Detail />} />
            </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default AppRouter