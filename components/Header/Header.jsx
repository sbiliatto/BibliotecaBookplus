import css from "./Header.module.css";
import Button from "../Button/Button.jsx";


export default function Header({ titulo = "BOOKPLUS" }) {
    return (
        <header className={css.fundoHeader}>
            <nav className="navbar navbar-expand-lg container">

                <a className="navbar-brand fw-bold" href="#">
                    {titulo}
                </a>

                <div className="collapse navbar-collapse show">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Catálogo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lançamentos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mais vendidos</a>
                        </li>
                        <li className="nav-item">
                            <Button
                                texto="Login Admin"
                                tipo="light"
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
