import "./CardAdmin.css"
import galeria1 from "../../assets/galeria1.jpg"

export default function CardAdmin() {
  return (
    <div className="card mt-5 " style={{ width: "18rem", height: "28rem" }}>
      <img src={galeria1} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
