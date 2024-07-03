import React from "react";

export default function LadoDireito({
    cadastroNome,
    cadastroEmail,
    cadastroSenha
}) {
    return (
        <div>
            <div className="topo">
                <h2>Últimos Cadastros</h2>
            </div>
            <div className="meio">
                {cadastroNome && (
                    <div>
                        <strong>
                            <p>Nome: {cadastroNome}</p>
                        </strong>
                        <strong>
                            <p>Email: {cadastroEmail}</p>
                        </strong>
                        <strong>
                            <p>Senha: {cadastroSenha}</p>
                        </strong>
                    </div>
                )}
                {!cadastroNome && (
                    <p>Nenhum cadastro realizado ainda.</p>
                )}
            </div>
        </div>
    );
}