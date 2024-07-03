import React from "react";

export default function LadoEsquerdo({
    setNome,
    setSenha,
    setRepetirSenha,
    setEmail,
    setRepetirEmail,
    handleSubmit
}) {
    return (
        <div>
            <div className="topo">
                <div className="title">
                    <h2>Cadastro</h2>
                </div>
            </div>
            <div className="meio">
                <div className="inputs">
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="repetirEmail">Repete E-mail</label>
                            <input
                                type="email"
                                id="repetirEmail"
                                onChange={(e) => setRepetirEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="repetirSenha">Repete Senha</label>
                            <input
                                type="password"
                                id="repetirSenha"
                                onChange={(e) => setRepetirSenha(e.target.value)}
                            />
                        </div>
                        <div className="fim">
                            <div className="botao">
                                <button type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}