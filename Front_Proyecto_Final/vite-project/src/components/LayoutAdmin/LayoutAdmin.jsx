import { Outlet } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

export default function LayoutAdmin() {
  return (
    <>
      <NavbarAdmin />

      <Outlet />
    </>
  );
}
