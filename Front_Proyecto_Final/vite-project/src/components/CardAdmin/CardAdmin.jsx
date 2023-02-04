import "./CardAdmin.css"
import galeria1 from "../../assets/galeria1.jpg"

export default function CardAdmin() {
  return (
    <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap pt-4">
    <div class="card d-flex position-relative flex-column">
        <div class='imgContainer'>
            <img src='https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
        </div>
        <div class="content">
            <h2>Card One</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
            <a href="#" class="btn btn-primary">
          Editar Alumno
        </a>
        </div>
    </div>
    <div class="card d-flex position-relative flex-column">
        <div class='imgContainer'>
            <img src='https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
        </div>
        <div class="content">
            <h2>Card Two</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
        <a href="#" class="btn btn-primary">
          Editar Alumno
        </a>
        </div>
    </div>
    <div class="card d-flex position-relative flex-column">
        <div class='imgContainer'>
            <img src='https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
        </div>
        <div class="content">
            <h2>Card Three</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutpat ac sed dolor.</p>
        <button href="#" class="btn btn-primary">
          Editar Alumno
        </button>
        </div>
    </div>
</div>
  );
}
