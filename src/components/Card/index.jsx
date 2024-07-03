import React, { useState } from "react";
import LadoEsquerdo from "./LadoEsquerdo";
import LadoDireito from "./LadoDireito";
import "./styles.css";

export default function App() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [repeteEmail, setRepeteEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repeteSenha, setRepeteSenha] = useState("");

    const [cadastroNome, setCadastroNome] = useState("");
    const [cadastroEmail, setCadastroEmail] = useState("");
    const [cadastroSenha, setCadastroSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar se todos os campos foram preenchidos
        if (!nome || !email || !repeteEmail || !senha || !repeteSenha) {
            alert("Preencha todos os campos.");
            return;
        }

        // Validar se os emails coincidem
        if (email !== repeteEmail) {
            alert("Os emails não coincidem.");
            return;
        }

        // Validar se as senhas coincidem
        if (senha !== repeteSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        // Se passar pelas validações, atualiza o estado de cadastro
        setCadastroNome(nome);
        setCadastroEmail(email);
        setCadastroSenha(senha);

        // Limpar os campos do formulário após o cadastro
        setNome("");
        setEmail("");
        setRepeteEmail("");
        setSenha("");
        setRepeteSenha("");
    };

    return (
        <div className="app">
            <div className="lado-esquerdo">
                <LadoEsquerdo
                    setNome={setNome}
                    setEmail={setEmail}
                    setRepeteEmail={setRepeteEmail}
                    setSenha={setSenha}
                    setRepeteSenha={setRepeteSenha}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className="lado-direito">
                <LadoDireito
                    cadastroNome={cadastroNome}
                    cadastroEmail={cadastroEmail}
                    cadastroSenha={cadastroSenha}
                />
            </div>
        </div>
    );
}