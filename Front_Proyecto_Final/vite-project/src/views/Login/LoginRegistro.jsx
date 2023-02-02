import Login from "../../components/Login/Login";
import Registro from "../../components/Registro/Registro";

export default function LoginAcount(){
    return(
        <div className="d-flex  justify-content-around pt-5">
        <Login/>
        <Registro/>
        </div>
    )
}