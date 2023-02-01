import { Outlet } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import SearchAdmin from "../NavbarAdmin/SearchAdmin";

export default function LayoutAdmin() {
  return (
    <div className="">
      <SearchAdmin />
      <div className="row">
        <div className="col-2">
          <NavbarAdmin />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
