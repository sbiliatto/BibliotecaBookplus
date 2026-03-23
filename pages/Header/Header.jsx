import css from "./Header.module.css";
import Button from "../Button/Button.jsx";
import { Link } from "react-router-dom";

export default function Header({ titulo = "BOOKPLUS" }) {

    const token = localStorage.getItem("token");

    return (
        <header className={css.fundoHeader}>
            <nav className="navbar navbar-expand-lg container">

                <a className="navbar-brand fw-bold" href="#">
                    {titulo}
                </a>

                <div className="collapse navbar-collapse show">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {/* 👉 NÃO LOGADO */}
                        {!token && (
                            <li className="nav-item">
                                <Link to={"/login"}>
                                    <Button texto="Login Admin" tipo="light" />
                                </Link>
                            </li>
                        )}

                        {/* 👉 LOGADO */}
                        {token && (
                            <>
                                <li className="nav-item me-2">
                                    <Link to={"/cadastro_livro"}>
                                        <Button texto="Cadastrar Livro" tipo="light" />
                                    </Link>
                                </li>

                                <li className="nav-item me-2">
                                    <Link to={"/adm_livro"}>
                                        <Button texto="Visão ADM" tipo="light" />
                                    </Link>
                                </li>

                                {/*<li className="nav-item">*/}
                                {/*    <Link to={"/home"}>*/}
                                {/*        <Button texto="Sair" tipo="light" />*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                            </>
                        )}

                    </ul>
                </div>
            </nav>
        </header>
    );
}