import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import HomeAdmin from "./views/HomeAdmin/HomeAdmin";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import "./App.css";

// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AlumnosAdmin from "./views/AlumnosAdmin/AlumnosAdmin";
import LayoutAdmin from "./components/LayoutAdmin/LayoutAdmin";
import EmpresasAdmin from "./views/EmpresasAdmin/EmpresasAdmin";
import LoginAcount from "./views/Login/LoginRegistro";
import GaleriaAdmin from "./views/GaleriaAdmin/GaleriaAdmin";
import EditarAlumno from "./views/EditarAlumno/EditarAlumno";
import EditarEmpresa from "./views/EditarEmpresa/EditarEmpresa";
import CrearTarjeta from "./views/CrearTarjeta/CrearTarjeta";
import EditarUsuario from "./views/EditarUsuario/EditarUsuario";
import Contacto from "./views/Contacto/Contacto";
import BuscarEmpr from "./views/BuscarEmpresa/BuscarEmpresa";
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
            <Route path="editar" element={<EditarUsuario />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="buscarempresa" element={<BuscarEmpr />} />

            {/* </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}> */}
          </Route>
          <Route path="admin" element={<LayoutAdmin />}>
            <Route index element={<HomeAdmin />} />
            <Route path="alumnosadmin" element={<AlumnosAdmin />} />
            <Route path="settings/:id" element={<EditarAlumno />} />

            <Route path="settingsempresa/:id" element={<EditarEmpresa />} />
            <Route path="tarjetasadmin" element={<CrearTarjeta />} />
            <Route path="empresasadmin" element={<EmpresasAdmin />} />
            <Route path="galeriaadmin" element={<GaleriaAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
export default App;
