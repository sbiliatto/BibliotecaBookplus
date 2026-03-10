import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.jsx";
import Button from "../../components/Button/Button.jsx";

export default function Livros() {
    const { id } = useParams();

    const livro = {
        titulo: "O Silêncio do Mar",
        autor: "Helena Vasconcelos",
        categoria: "Romance",
        descricao: "Uma história profunda sobre as memórias de uma vila costeira e os segredos guardados pelas marés. Helena Vasconcelos explora a conexão humana com a natureza e o tempo.",
        imagem: "/img1.png",
        faixaEtaria: "14 anos"
    };

    return (
        <>
            <Header titulo="BOOKPLUS" />
            <div className="container mt-5 mb-5">
                <Link to="/catalogo" className="btn btn-outline-secondary mb-4">
                    ← Voltar ao catálogo
                </Link>

                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={livro.imagem}
                            alt={livro.titulo}
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-8">
                        <span className="badge bg-primary mb-2">{livro.categoria}</span>
                        <h1 className="display-4">{livro.titulo}</h1>
                        <h4 className="text-muted mb-4">Por: {livro.autor}</h4>

                        <div className="mb-4">
                            <h5>Sinopse</h5>
                            <p className="lead">{livro.descricao}</p>
                        </div>

                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item"><strong>Classificação:</strong> {livro.faixaEtaria}</li>
                            <li className="list-group-item"><strong>ID do Produto:</strong> {id}</li>
                        </ul>

                        <Button texto="Adicionar aos Favoritos" tipo="acesso" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}