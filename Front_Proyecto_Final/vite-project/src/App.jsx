import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import HomeAdmin from "./views/HomeAdmin/HomeAdmin";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";

// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AlumnosAdmin from "./views/AlumnosAdmin/AlumnosAdmin";
import LayoutAdmin from "./components/LayoutAdmin/LayoutAdmin";
import EmpresasAdmin from "./views/EmpresasAdmin/EmpresasAdmin";
import TarjetasAdmin from "./views/TarjetasAdmin/TarjetasAdmin";
import LoginAcount from "./views/Login/LoginRegistro";
import GaleriaAdmin from "./views/GaleriaAdmin/GaleriaAdmin";
import EditarAlumno from "./views/EditarAlumno/EditarAlumno";
const ROLES = {
  Admin: "1",
  User: "0",
};
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginAcount />} />

            {/* </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}> */}
          </Route>
          <Route path="admin" element={<LayoutAdmin />}>
            <Route index element={<HomeAdmin />} />
            <Route path="alumnosadmin" element={<AlumnosAdmin />} />
            <Route path="settings/:id" element={<EditarAlumno />} />

            <Route path="tarjetasadmin" element={<TarjetasAdmin />} />
            <Route path="empresasadmin" element={<EmpresasAdmin />} />
            <Route path="galeriaadmin" element={<GaleriaAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
export default App;
