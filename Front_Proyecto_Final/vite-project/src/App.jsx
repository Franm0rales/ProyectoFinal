import { BrowserRouter, Routes,Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./views/Home/Home"
import HomeAdmin from "./views/HomeAdmin/HomeAdmin"

function App() {


  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/admin" element={<HomeAdmin/>}/>
        </Route>
      
      </Routes>
    </BrowserRouter>
  
  )
  }
export default App
