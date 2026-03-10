import css from "./Footer.module.css";

export default function Footer() {
        return (
            <footer className={css.rodape}>
                <div className="container">

                    <div className={css.topo}>

                        {/* ESQUERDA */}
                        <div className={css.esquerda}>
                            <h3 className={css.logo}>
                                 BOOKPLUS
                            </h3>

                            <p className={css.descricao}>
                                Sua livraria digital de confiança. Uma curadoria
                                minimalista das obras mais impactantes para o
                                seu crescimento.
                            </p>

                        </div>

                        {/* DIREITA */}
                        <div className={css.links}>

                            <div>
                                <h6>EXPLORAR</h6>
                                <a href="#">Lançamentos</a>
                                <a href="#">Mais Vendidos</a>
                                <a href="#">E-books</a>
                            </div>

                            <div>
                                <h6>SUPORTE</h6>
                                <a href="#">Ajuda</a>
                                <a href="#">Envios</a>
                                <a href="#">Trocas</a>
                            </div>

                            <div>
                                <h6>INSTITUCIONAL</h6>
                                <a href="#">Sobre Nós</a>
                                <a href="#">Contato</a>
                                <a href="#">Privacidade</a>
                            </div>

                        </div>

                    </div>

                    <hr className={css.linha} />
                    
                    </div>

            </footer>
        );
}