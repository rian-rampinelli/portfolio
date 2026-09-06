import "./App.css"


function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="nav">
                    <p>Rian Rampinelli</p>
                    <ul className="nav-links">
                        <li>Apresentaçaõ</li>
                        <li>Sobre mim</li>
                        <li>Tecnologias</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <section style={{ marginTop: 120 }}>
                    <header className="header">
                        <div>
                            <h1>Ola, meu nome é rian rampinelli</h1>
                            <p>Java | React.js | Spring boot</p>
                            <p>Contato</p>
                        </div>

                        <div>
                            <p  className="text-banner" >Desenvolvedor Backend especializado em Java e Spring, com foco na construção de APIs robustas, escaláveis e de alta performance. Tenho experiência no desenvolvimento de aplicações utilizando tecnologias como Java, Spring Boot, Spring Data JPA, Spring Security, Hibernate e PostgreSQL. Sou focado na criação de código limpo e manutenível, aplicação de boas práticas de arquitetura e desenvolvimento de soluções eficientes, seguras e escaláveis, buscando continuamente evoluir a qualidade, performance e confiabilidade das aplicações.
                            </p>
                        </div>

                    </header>

                    <div className="tecnologias">

                        <h2>Tecnologias</h2>
                        <div className="tecnologias-itens">
                            <div className="tecnologias-card">
                                icon
                                <p>java</p>
                            </div>
                            <div className="tecnologias-card">
                                icon
                                <p>spring</p>
                            </div>
                            <div className="tecnologias-card">
                                icon
                                <p>react</p>
                            </div>
                            <div className="tecnologias-card">
                                icon
                                <p>node</p>
                            </div>
                            <div className="tecnologias-card">
                                icon
                                <p>docker</p>
                            </div>
                            <div className="tecnologias-card">
                                icon
                                <p>git</p>
                            </div>
                            <div className="tecnologias-card">
                                icon
                                <p>github</p>
                            </div>
                            <div className="tecnologias-card">
                                icon
                                <p>PostgreSQL</p>
                            </div >
                            <div className="tecnologias-card">
                                icon
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