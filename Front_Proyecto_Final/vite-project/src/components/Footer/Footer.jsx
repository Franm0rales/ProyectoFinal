export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-info">
              <h3>Horizons</h3>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Utilidades</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Sobre nosotros</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Servicios</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Términos y condiciones</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Política de privacidad</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Nuestros servicios</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Diseño web</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Desarrollo web</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Productos</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Diseño gráfico</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Suscribete y recibe eventos diarios</h4>
              <form action="" method="post" className="">
                <input className="" type="email" name="email" />
                <input className="" type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
