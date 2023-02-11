import { Outlet } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import SearchAdmin from "../NavbarAdmin/SearchAdmin";

export default function LayoutAdmin() {
  return (
    <>
    {/* <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap-extended.min.css"/>
<link rel="stylesheet" type="text/css" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/fonts/simple-line-icons/style.min.css"/>
<link rel="stylesheet" type="text/css" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/colors.min.css"/>
<link rel="stylesheet" type="text/css" href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap.min.css"/>
<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/> */}
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
    </>
  );
}
