import { useState, useEffect } from 'react'
import '../NavBar/NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function NavBar() {

    const [open, setOpen] = useState(false)

    //função que verifica o tamanho da tela para colocar o modal como false
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 901px)');
        const handleResize = (event) => {
            if (event.matches) {
                setOpen(false);
            }
        };
        handleResize(mediaQuery);
        mediaQuery.addEventListener('change', handleResize);
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);




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
                    <div style={{ display: "flex" }}>
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
                        <a onClick={() => setOpen(!open)} href="#header">Sobre mim</a>
                        <a onClick={() => setOpen(!open)} href="#tecnologias">Tecnologias</a>
                        <a onClick={() => setOpen(!open)} href="#projetos">Projetos</a>
                        <a onClick={() => setOpen(!open)} href="#contatos">Contato</a>
                    </div>

                </div>

            )}

        </div>
    )
}

export default NavBar