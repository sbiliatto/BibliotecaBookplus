
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Titulo from "../../components/Titulo/Titulo";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [alerta, setAlerta] = useState("");

    async function realizarLogin() {
        let retorno = await fetch("https://apps-api-livros.ucxocw.easypanel.host/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
                email: email,
                senha: senha,
            }),
        });

        retorno = await retorno.json();
        console.log(retorno);

        if (retorno.token) {
            setAlerta("Login realizado com sucesso!");
            localStorage.setItem("token", retorno.token);
            localStorage.setItem("usuario_nome", retorno.usuario.nome);
            localStorage.setItem("usuario_email", retorno.usuario.email);
            localStorage.setItem("usuario_id", retorno.usuario.id);
        } else {
            setAlerta("Email ou senha estão incorretos");
        }
    }

    useEffect(function () {
        let token = localStorage.getItem("token");

        if (token) {
            let nome = localStorage.getItem("usuario_nome");
            setAlerta("Olá, " + nome + " você está logado");
        }
    }, []);

    return (
        <>
            <Header titulo="BOOKPLUS" />

            <div className="container mt-5">
                <Titulo
                    subtitulo="ACESSO"
                    titulo="Login"
                />

                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card p-4 shadow">
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Digite sua senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            <div className="d-grid">
                                <div onClick={realizarLogin}>
                                    <Button texto="Login" tipo="acesso" />
                                </div>
                            </div>

                            {alerta && (
                                <p className="text-center mt-3 mb-0">
                                    {alerta}
                                </p>
                            )}

                            <p className="text-center mt-3 mb-0">
                                Não tem conta? <Link to="/cadastro">Cadastre-se agora</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}