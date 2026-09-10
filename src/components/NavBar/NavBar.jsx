import { useState } from 'react'
import '../NavBar/NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavBar() {

    const [open, setOpen] = useState(false)

 

    return (
        <div className="nav">
            <p className="name">Rian <span className="sobrenome">Rampinelli</span> </p>
            <ul className="nav-links">
                <a href="#header">Sobre mim</a>
                <a href="#tecnologias">Tecnologias</a>
                <a href="#projetos">Projetos</a>
                <a href="#contatos">Contato</a>
            </ul>
            <button
                className="hamburger"
                onClick={() => setOpen(!open)}

            >
                <GiHamburgerMenu size={52} style={{
                    color: "red",
                    fill: "#8355e5",
                }} ></GiHamburgerMenu>
            </button>

            {open && (
                <div className="modal">
                    <div style={{display:"flex",gap:50}}>
                        <p className="name">Rian <span className="sobrenome">Rampinelli</span> </p>

                        <button
                            className="hamburger"
                            onClick={() => setOpen(!open)}

                        >
                            <IoMdClose size={52} style={{
                                color: "red",
                                fill: "#8355e5",
                            }} ></IoMdClose>
                        </button>
                    </div>


                    <div className='nav-links-modal'>
                        <a href="#header">Sobre mim</a>
                        <a href="#tecnologias">Tecnologias</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#contatos">Contato</a>
                    </div>

                </div>

            )}

        </div>
    )
}

export default NavBar