import css from "./Button.module.css";

export default function Button({ texto, tipo }) {
    if (tipo === "dark") {
        return (
            <button className={"btn btn-primary " + css.botao}>
                {texto}
            </button>
        );
    }

    if (tipo === "light") {
        return (
            <button className={"btn btn-light " + css.button_ligth}>
                {texto}
            </button>
        );
    }

    if (tipo === "borda") {
        return (
            <button className={"btn btn-outline-light " + css.button_borda}>
                {texto}
            </button>
        );
    }

    if (tipo === "login") {
        return (
            <button className={"btn btn-primary" + css.button_header}>
                {texto}
            </button>
        );
    }

    if (tipo === "completo") {
        return (
            <button className={"btn btn-outline-secondary"}>
                {texto}
            </button>
        );
    }

    if (tipo === "acesso") {
        return (
            <button className={"btn btn-primary " + css.button_header}>
                {texto}
            </button>
        );
    }
}