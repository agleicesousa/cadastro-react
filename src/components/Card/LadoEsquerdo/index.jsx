import { useState } from "react";

export default function LadoEsquerdo({
    setNome,
    setSenha,
    setRepetirSenha,
    setEmail,
    setRepetirEmail
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
                    <form action="">
                        <div className="input">
                            <label htmlFor="">Nome</label>
                            <input type="text"
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="">E-mail</label>
                            <input type="email" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="">Repete E-mail</label>
                            <input type="email" 
                                onChange={(e) => setRepetirEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="">Senha</label>
                            <input type="password"  
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="">Repete Senha</label>
                            <input type="password"  
                                onChange={(e) => setRepetirSenha(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="fim">
            <div className="botao">
                    <button type="submit">Cadastrar</button>
                </div>
            </div>
        </div>
    )
}