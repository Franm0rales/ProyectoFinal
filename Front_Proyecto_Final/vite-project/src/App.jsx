import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import HomeAdmin from "./views/HomeAdmin/HomeAdmin";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import "./App.css";
import ScrollToTop from '../ScrollToTop';

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
import TestUsuario from "./views/TestUsuario/TestUsuario";
import Empresa from "./views/Empresa/Empresa";
import AgendaPerfilEmpresa from "./views/AgendaPerfilEmpresa/AgendaPerfilEmpresa";
import Eventos from "./views/Eventos/Eventos";
import Nosotros from "./views/Nosotros/Nosotros";
import Cookies from "./components/Cookies/Cookies";
import VistaEventosAdmin from "./views/VistaEventosAdmin/VistaEventosAdmin";
const ROLES = {
  Admin: "1",
  User: "0",
};
function App() {
  return (
    <AuthContextProvider>
      <Cookies />
      <BrowserRouter>
      <ScrollToTop />
      
        <Routes>
        
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginAcount />} />
            <Route path="editar" element={<EditarUsuario />} />
            <Route path="editarempresa" element={<EditarEmpresa />} />
            <Route path="agendaeventos" element={<AgendaPerfilEmpresa />} />

            <Route path="test" element={<TestUsuario />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="empresas" element={<Empresa />} />
            <Route path="eventos" element={<Eventos />} />
            <Route path="nosotros" element={<Nosotros />} />

            {/* </Route>

        <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}> */}
          </Route>
          <Route path="admin" element={<LayoutAdmin />}>
            <Route index element={<HomeAdmin />} />
            <Route path="alumnosadmin" element={<AlumnosAdmin />} />
            <Route path="settings/:id" element={<EditarAlumno />} />

            <Route path="settingsempresa/:id" element={<EditarEmpresa />} />
            <Route path="tarjetasadmin" element={<VistaEventosAdmin />} />
            <Route path="empresasadmin" element={<EmpresasAdmin />} />
            <Route path="galeriaadmin" element={<GaleriaAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
export default App;
