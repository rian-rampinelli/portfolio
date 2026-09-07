import "./App.css"
import { FaJava, FaReact, FaDocker, FaGithub, FaLinkedin, FaGit, FaNode } from "react-icons/fa";
import { SiSpringboot, SiPostgresql,SiJunit5  } from "react-icons/si";


function App() {
    return (
        <div className="wrapper">
            <div className="nav">
                <p className="name">Rian <span className="sobrenome">Rampinelli</span> </p>
                <ul className="nav-links">
                    <li>Apresentaçaõ</li>
                    <li>Sobre mim</li>
                    <li>Tecnologias</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div className="container">

                <section style={{ marginTop: 120 }}>
                    <header className="header">
                        <div></div>
                        <p className="header-title">Olá, meu nome é </p>
                        <p className="header-name">rian rampinelli</p>
                        <p className="header-title">Desenvolvedor full stack</p>
                    </header>
                    <div className="banner">
                        <h2>Sobre mim</h2>
                        <p className="text-banner">Desenvolvedor Backend especializado em Java e Spring, com foco na construção de APIs robustas, escaláveis e de alta performance. Tenho experiência no desenvolvimento de aplicações utilizando tecnologias como Java, Spring Boot, Spring Data JPA, Spring Security, Hibernate e PostgreSQL. Sou focado na criação de código limpo e manutenível, aplicação de boas práticas de arquitetura e desenvolvimento de soluções eficientes, seguras e escaláveis, buscando continuamente evoluir a qualidade, performance e confiabilidade das aplicações.
                        </p>
                    </div>


                    <div className="tecnologias">

                        <h2>Tecnologias</h2>
                        <div className="tecnologias-itens">
                            <div className="tecnologias-itens-card">
                                <FaJava size={52}  style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }} />
                                <p>Java</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <SiSpringboot size={52}  style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p>Spring</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                <FaReact size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p>React</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                 <FaNode size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p>Node</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                 <FaDocker size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p>Docker</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                  <FaGit size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p>Git</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                  <FaGithub size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p>Github</p>
                            </div>
                            <div className="tecnologias-itens-card">
                                  <SiPostgresql size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p>Postgres</p>
                            </div >
                            <div className="tecnologias-itens-card">
                                  <SiJunit5 size={52} style={{
                                    color: "red",
                                    fill: "#8355e5",
                                }}/>
                                <p>Junit</p>
                            </div>
                        </div>

                    </div>

                    <div className="projetos">
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
                    </div>

                    <div className="contatos">
                        <h2>Contatos</h2>
                        <div className="contatos-itens">
                            <div className="contatos-itens-card">
                                icone
                                <p>gmail</p>
                            </div>
                            <div className="contatos-itens-card">
                                icone
                                <p>github</p>
                            </div>
                            <div className="contatos-itens-card">
                                icone
                                <p>gitlab</p>
                            </div>
                            <div className="contatos-itens-card">
                                icone
                                <p>linkedin</p>
                            </div>
                            <div className="contatos-itens-card">
                                icone
                                <p>whattsapp</p>
                            </div>

                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}

export default App;