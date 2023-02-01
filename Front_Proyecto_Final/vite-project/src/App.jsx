import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import HomeAdmin from "./views/HomeAdmin/HomeAdmin";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AlumnosAdmin from "./views/AlumnosAdmin/AlumnosAdmin";
import LayoutAdmin from "./components/LayoutAdmin/LayoutAdmin";
const ROLES = {
  Admin: "1",
  User: "0",
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}> */}
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="alumnosadmin" element={<AlumnosAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
