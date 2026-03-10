import styles from "./Titulo.module.css";

export default function Titulo({ subtitulo, titulo }) {
    return (
        <section className={styles.container}>
            <div className={styles.linha}></div>
            <p className={styles.subtitulo}>{subtitulo}</p>
            <h2 className={styles.titulo}>{titulo}</h2>
        </section>
    );
}