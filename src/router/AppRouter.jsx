import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import NavBar from "../components/NavBar"
import Dashboard from "../pages/Dashboard"
import Footer from "../components/Footer"
import About from "../pages/About"
import NewBlog from "../pages/NewBlog"
import Detail from "../pages/Detail"
import Login from "../pages/Login"

const AppRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default AppRouter