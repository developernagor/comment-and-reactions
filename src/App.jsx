import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Task from "./pages/Task/Task"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/task" element={<Task></Task>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
