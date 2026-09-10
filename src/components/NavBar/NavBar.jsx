import '../NavBar/NavBar.css'

function NavBar() {
    return (
        <div className="nav">
            <p className="name">Rian <span className="sobrenome">Rampinelli</span> </p>
            <ul className="nav-links">
                <a href="#header">Sobre mim</a>
                <a href="#tecnologias">Tecnologias</a>
                <a href="#projetos">Projetos</a>
                <a href="#contatos">Contato</a>
            </ul>
        </div>
    )
}

export default NavBar