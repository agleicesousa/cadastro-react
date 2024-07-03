import React from "react";

export default function LadoDireito({ ultimosCadastros }) {
    return (
        <div>
            <div className="topo">
                <h2>Últimos Cadastros</h2>
            </div>
            <div className="meio">
                {ultimosCadastros.map((cadastro, index) => (
                    <div key={index}>
                        <strong>
                            <p>Nome: {cadastro.nome}</p>
                        </strong>
                        <strong>
                            <p>Email: {cadastro.email}</p>
                        </strong>
                        <strong>
                            <p>Senha: {cadastro.senha}</p>
                        </strong>
                    </div>
                ))}
            </div>
        </div>
    );
}