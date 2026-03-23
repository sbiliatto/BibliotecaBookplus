import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Titulo from "../../components/Titulo/Titulo.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Livro() {
    const { id } = useParams();

    const [livro, setLivro] = useState(null);

    async function buscarLivro() {
        let resposta = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        let dados = await resposta.json();
        setLivro(dados.livro);
    }

    useEffect(function () {
        buscarLivro();
    }, []);

    return (
        <>
            <Header titulo="BOOKPLUS" />

            <div className="container mt-5">
                <Titulo
                    subtitulo="DETALHES"
                    titulo="Informações do Livro"
                />

                {livro ? (
                    <div className="row mt-4 align-items-center">
                        <div className="col-md-4 text-center mb-4">
                            <img
                                src={livro.imagem}
                                alt={livro.titulo}
                                className="img-fluid rounded shadow"
                            />
                        </div>

                        <div className="col-md-8">
                            <h2>{livro.titulo}</h2>
                            <p><strong>Autor:</strong> {livro.autor}</p>
                            <p><strong>Categoria:</strong> {livro.categoria}</p>
                            <p><strong>Faixa etária:</strong> {livro.faixa_etaria}</p>
                            <p><strong>Descrição:</strong> {livro.descricao}</p>
                        </div>
                    </div>
                ) : (
                    <p>Carregando livro...</p>
                )}
            </div>

            <Footer />
        </>
    );
}