import "../pages/css/Home.css"
import { FaJava, FaReact, FaDocker, FaGithub, FaGitAlt, FaNode, FaLinkedin, FaJs } from "react-icons/fa";
import { SiPostgresql, SiJunit5, SiGmail, SiGitlab, SiVite } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import projeto1 from "../assets/projeto1.png";
import NavBar from "../components/NavBar/NavBar";


function Home() {
    return (
        <div className="wrapper">
            <NavBar>
                
            </NavBar>
            <div className="container">

                <div style={{ marginTop: 120 }}>
                    <section id="header">
                        <div></div>
                        <p className="header-title">Olá, meu nome é </p>
                        <p className="header-name">Rian Rampinelli</p>
                        <p className="header-title">Desenvolvedor full stack</p>
                    </section>
                    <div className="banner">
                        <h2>Sobre mim</h2>
                        <p className="text-banner">Desenvolvedor Backend especializado em Java e Spring, com foco na construção de APIs robustas, escaláveis e de alta performance. Tenho experiência no desenvolvimento de aplicações utilizando tecnologias como Java, Spring Boot, Spring Data JPA, Spring Security, Hibernate e PostgreSQL. Sou focado na criação de código limpo e manutenível, aplicação de boas práticas de arquitetura e desenvolvimento de soluções eficientes, seguras e escaláveis, buscando continuamente evoluir a qualidade, performance e confiabilidade das aplicações.
                        </p>
                    </div>


                    <section id="tecnologias">

                        <h2>Tecnologias</h2>
                        <div className="tecnologias-itens">
                            <div className="tecnologias-itens-card">
                                <FaJava size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Java</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <BiLogoSpringBoot size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Spring Boot</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <FaReact size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">React</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <FaNode size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">NodeJs</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <FaDocker size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Docker</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <FaGitAlt size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Git</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <FaGithub size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Github</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <SiPostgresql size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Postgres</p>
                            </div >
                            <div className="tecnologias-itens-card">
                                <SiJunit5 size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Junit</p>
                            </div>
                        </div>

                    </section>

                    <section id="projetos">
                        <h2>Projetos</h2>
                        <div className="projetos-itens">
                            <div className="projetos-card">
                                <div className="card-image">
                                    <img src={projeto1} alt="Projeto 1" />
                                    <div className="card-technologies">
                                        <span className="technology">
                                            <FaReact size={32
                                            } style={{
                                                color: "red",
                                                fill: "#8355e5",
                                            }} />
                                        </span>
                                        <span className="technology">
                                            <FaJs size={32} style={{
                                                color: "red",
                                                fill: "#8355e5",
                                            }} />
                                        </span>
                                        <span className="technology">
                                            <SiVite size={32
                                            } style={{
                                                color: "red",
                                                fill: "#8355e5",
                                            }} />
                                        </span>
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3>Wiki of Westeros</h3>
                                    <p>
                                        Uma wiki sobre o universo de Game of Thrones.
                                    </p>
                                    <a className="card-button" href="https://wiki-of-westeros.vercel.app/" target="_blank">Visitar</a>
                                </div>

                            </div>



                        </div>
                    </section>

                    <section id="contatos">
                        <h2>Contatos</h2>
                        <div className="contatos-itens">
                            <a href="https://www.linkedin.com/in/rian-rampinelli" target="_blank" className="contatos-itens-card">
                                <FaLinkedin size={48} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Linkedin</p>
                            </a>
                            <a href="https://github.com/rian-rampinelli" target="_blank" className="contatos-itens-card" >
                                <FaGithub size={48} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Github</p>
                            </a>
                            <a href="https://gitlab.com/riangkmc" target="_blank" className="contatos-itens-card">
                                <SiGitlab size={48} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">GitLab</p>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=riaann.barbosa@gmail.com" target="_blank" className="contatos-itens-card">
                                <SiGmail size={48} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Gmail</p>
                            </a>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    )

}

export default Home;