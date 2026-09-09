import "./App.css"
import { FaJava, FaReact, FaDocker, FaGithub, FaGitAlt, FaNode,FaLinkedin } from "react-icons/fa";
import { SiPostgresql,SiJunit5,SiGmail,SiGitlab    } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";


function App() {
    return (
        <div className="wrapper">
            <div className="nav">
                <p className="name">Rian <span className="sobrenome">Rampinelli</span> </p>
                <ul className="nav-links">
                    <a href="#header">Sobre mim</a>
                    <a href="#tecnologias">Tecnologias</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contatos">Contato</a>
                </ul>
            </div>
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
                                <FaJava size={52}  style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p className="tecnologias-itens-card-text">Java</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <BiLogoSpringBoot  size={52}  style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Spring Boot</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <FaReact size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">React</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                 <FaNode size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">NodeJs</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                 <FaDocker size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Docker</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                  <FaGitAlt size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Git</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                  <FaGithub size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Github</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                  <SiPostgresql size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Postgres</p>
                            </div >
                            <div className="tecnologias-itens-card">
                                  <SiJunit5 size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Junit</p>
                            </div>
                        </div>

                    </section>

                    <section id="projetos">
                        <h2>projetos</h2>
                        <div className="projetos-itens">
                            <div className="projetos-itens-card">
                                <div>imagem</div>
                                <div>
                                    <h3>Wiki of Westeros</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet harum maiores blanditiis eligendi atque id vero dolor commodi non! Aliquam velit ut est dolores officiis quo rerum ratione debitis!</p>
                                    <p><link rel="stylesheet" href="" />entrar</p>
                                </div>
                            </div>
                            <div className="projetos-itens-card">
                                <div>imagem</div>
                                <div>
                                    <h3>Wiki of Westeros</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet harum maiores blanditiis eligendi atque id vero dolor commodi non! Aliquam velit ut est dolores officiis quo rerum ratione debitis!</p>
                                    <p><link rel="stylesheet" href="" />entrar</p>
                                </div>
                            </div>
                            <div className="projetos-itens-card">
                                <div>imagem</div>
                                <div>
                                    <h3>Wiki of Westeros</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet harum maiores blanditiis eligendi atque id vero dolor commodi non! Aliquam velit ut est dolores officiis quo rerum ratione debitis!</p>
                                    <p><link rel="stylesheet" href="" />entrar</p>
                                </div>
                            </div>
                            <div className="projetos-itens-card">
                                <div>imagem</div>
                                <div>
                                    <h3>Wiki of Westeros</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet harum maiores blanditiis eligendi atque id vero dolor commodi non! Aliquam velit ut est dolores officiis quo rerum ratione debitis!</p>
                                    <p><link rel="stylesheet" href="" />entrar</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contatos">
                        <h2>Contatos</h2>
                        <div className="contatos-itens">
                            <a href="https://www.linkedin.com/in/rian-rampinelli" target="_blank"  className="contatos-itens-card">
                                  <FaLinkedin size={48} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Linkedin</p>
                            </a>
                            <a href="https://github.com/rian-rampinelli" target="_blank" className="contatos-itens-card" >
                                  <FaGithub size={48} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Github</p>
                            </a>
                            <a  href="https://gitlab.com/riangkmc" target="_blank"  className="contatos-itens-card">
                                  <SiGitlab size={48} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">GitLab</p>
                            </a>
                           <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=riaann.barbosa@gmail.com" target= "_blank" className="contatos-itens-card">
                                  <SiGmail size={48} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p className="tecnologias-itens-card-text">Gmail</p>
                            </a>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    )
}

export default App;