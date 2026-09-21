import { Link } from "react-router-dom"
import "../not-found/NotFound.css"

function NotFound(){
    return(
        <div className="wrapper">
            <div className="container-not-found">
            <h1>Pagina não encontrada!</h1>
            <Link className="button-voltar" to={"/"}>Volter para o menu</Link>
            </div>
        </div>

    )
}

export default NotFound