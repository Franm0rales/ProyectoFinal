import { Link } from "react-router-dom"
import Descripcion from "../../components/Descripcion/Descripcion"
import Galeria from "../../components/Galeria/Galeria"
export default function Home(){
    return(
        <>
        <div>
            <Descripcion/>
            <Link to="/admin">Esto es la home</Link>
            <Galeria/>
        </div>
        </>
    )
}