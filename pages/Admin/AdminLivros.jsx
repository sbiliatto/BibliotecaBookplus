import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Titulo from "../../components/Titulo/Titulo.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {Link} from "react-router-dom";

export default function AdminLivros() {
    const [livros, setLivros] = useState([]);
    const [mensagem, setMensagem] = useState("");

    async function buscarLivros() {
        let resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        let dados = await resposta.json();
        setLivros(dados.livros);
    }

    async function excluirLivro(id) {
        let token = localStorage.getItem("token");

        if (!token) {
            setMensagem("Você precisa estar logado.");
            return;
        }

        let resposta = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });

        if (resposta.ok) {
            setMensagem("Livro excluído com sucesso!");
            buscarLivros();
        } else {
            setMensagem("Erro ao excluir livro.");
        }
    }
    useEffect(function () {
        buscarLivros();
    }, []);

    return (
        <>
            <Header titulo="BOOKPLUS" />

            <div className="container mt-5">
                <Titulo
                    subtitulo="ÁREA ADMINISTRATIVA"
                    titulo="Gerenciamento de Livros"
                />

                {mensagem && <p className="mt-3">{mensagem}</p>}

                <div className="row g-4 mt-2">
                    {livros.length > 0 ? (
                        livros.map(function (livro) {
                            return (
                                <div className="col-12" key={livro.id}>
                                    <div className="card shadow-sm">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-md-2 text-center p-3">
                                                <img
                                                    src={livro.imagem}
                                                    alt={livro.titulo}
                                                    className="img-fluid rounded"
                                                    style={{ maxHeight: "120px", objectFit: "cover" }}
                                                />
                                            </div>

                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className="card-title">{livro.titulo}</h5>
                                                    <p className="card-text mb-1"><strong>Autor:</strong> {livro.autor}</p>
                                                    <p className="card-text mb-1"><strong>Categoria:</strong> {livro.categoria}</p>
                                                    <p className="card-text mb-1"><strong>Faixa etária:</strong> {livro.faixa_etaria}</p>
                                                    <p className="card-text">
                                                        <strong>Descrição:</strong> {livro.descricao}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="d-flex flex-column gap-2 p-3">
                                                    <button className="btn btn-warning">
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => excluirLivro(livro.id)}
                                                    >
                                                        Excluir
                                                    </button>

                                                    <Link to={`/livro/${livro.id}`} className="btn btn-warning">
                                                        Ver detalhes
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Nenhum livro encontrado.</p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}