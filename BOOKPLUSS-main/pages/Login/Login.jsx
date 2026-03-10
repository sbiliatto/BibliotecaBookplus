import Header from "../../components/Header/Header.jsx";
import Titulo from "../../components/Titulo/Titulo.jsx";
import Button from "../../components/Button/Button.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Link } from "react-router-dom";

export default function Login() {
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
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <div className="d-grid">
                                <Button texto="Login" tipo="acesso"/>
                            </div>

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