import css from "./Button.module.css";

export default function Button({ texto, tipo, onClick }) {

    if (tipo === "dark") {
        return (
            <button className={"btn btn-primary " + css.botao} onClick={onClick}>
                {texto}
            </button>
        );
    }

    if (tipo === "light") {
        return (
            <button className={"btn btn-light " + css.button_ligth} onClick={onClick}>
                {texto}
            </button>
        );
    }

    if (tipo === "borda") {
        return (
            <button className={"btn btn-outline-light " + css.button_borda} onClick={onClick}>
                {texto}
            </button>
        );
    }

    if (tipo === "login") {
        return (
            <button className={"btn btn-primary " + css.button_header} onClick={onClick}>
                {texto}
            </button>
        );
    }

    if (tipo === "completo") {
        return (
            <button className={"btn btn-outline-secondary"} onClick={onClick}>
                {texto}
            </button>
        );
    }

    if (tipo === "acesso") {
        return (
            <button className={"btn btn-primary " + css.button_header} onClick={onClick}>
                {texto}
            </button>
        );
    }

    return (
        <button className="btn btn-secondary" onClick={onClick}>
            {texto}
        </button>
    );
}