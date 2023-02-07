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

      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      <script src="../../main.js"></script>
    </>
  );
}
