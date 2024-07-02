import { useState } from "react";

import LadoEsquerdo from './LadoEsquerdo'
import LadoDireito from './LadoDireito'
import './styles.css'

export default function Card() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [repeteEmail, setRepeteEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [repeteSenha, setRepeteSenha] = useState('')

    const [cadastroNome, setCadastroNome] = useState('')
    const [cadastroEmail, setCadastroEmail] = useState('')
    const [cadastroSenha, setCadastroSenha] = useState('')

    function cadastro() {
        if(!nome || !email || !repeteEmail || !senha || !repeteSenha) {
            alert('Preencha todos os campos')
            return
        }

        if(senha!== repeteSenha) {
            alert('As senhas não são iguais')
            return
        }

        if(email!== repeteEmail) {
            alert('Os emails não são iguais')
            return
        }

        setCadastroNome(nome)
        setCadastroEmail(email)
        setCadastroSenha(senha)

        setNome('')
        setEmail('')
        setRepeteEmail('')
        setSenha('')
        setRepeteSenha('')
    }

    return (
        <div>
            <div className="card">
                <div className="ladoEsquerdo">
                    <LadoEsquerdo
                        setNome={setNome}
                        setEmail={setEmail}
                        setRepeteEmail={setRepeteEmail}
                        setSenha={setSenha}
                        setRepeteSenha={setRepeteSenha}
                    />
                </div>
                <div className="ladoDireito">
                    <LadoDireito
                        setCadastroNome={setCadastroNome}
                        setCadastroEmail={setCadastroEmail}
                        setCadastroSenha={setCadastroSenha}
                    />
                </div>
            </div>
        </div>
    )
}