import { Outlet } from "react-router-dom";
import "../../../src/index.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "../Navbar/Navbar.css";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
