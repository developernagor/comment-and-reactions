import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import AddTask from "./pages/AddTask/AddTask"
import AllTask from "./pages/AllTask/AllTask"
import ViewDetails from "./pages/ViewDetails/ViewDetails"
import Profile from "./pages/Profile/Profile"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/add-task" element={<AddTask></AddTask>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/all-task" element={<AllTask></AllTask>}></Route>
        <Route path="/task/view-details" element={<ViewDetails></ViewDetails>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
