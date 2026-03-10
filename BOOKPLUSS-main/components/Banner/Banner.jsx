import css from "./Banner.module.css";
import Button from "../Button/Button.jsx";

export default function Banner() {
    return (
        <section className={css.banner}>
            <div className={css.bannerImg}></div>
            <div className="container">
                <div className="row align-items-center">

                    {/* TEXTO */}
                    <div className="col-md-6 text-white">
                        <span className={css.tag}>Curadoria exclusiva</span>

                        <h2 className={css.titulo}>
                            Descubra seu próximo <br />
                            <span>capítulo.</span>
                        </h2>

                        <p className={css.texto}>
                            Mergulhe em histórias que transformam.
                            Explore nossa seleção premium de obras
                            clássicas e contemporâneas.
                        </p>

                        <div className="d-flex gap-3">
                            <Button
                                texto="EXPLORAR CATÁLOGO"
                                tipo="light"
                            />

                            <Button
                                texto="Ver promoções"
                                tipo="borda"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}