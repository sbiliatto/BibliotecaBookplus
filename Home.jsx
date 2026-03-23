import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Titulo from "../../components/Titulo/Titulo.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Home() {
    const [livros, setLivros] = useState([]);
    const [total, setTotal] = useState(0);
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    async function buscarLivros() {
        let url = "https://apps-api-livros.ucxocw.easypanel.host/livro";

        let filtro = "";

        if (titulo !== "") {
            filtro += "?titulo=" + titulo;
        }

        if (autor !== "") {
            if (filtro === "") {
                filtro += "?autor=" + autor;
            } else {
                filtro += "&autor=" + autor;
            }
        }

        url += filtro;

        let busca = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        busca = await busca.json();

        setLivros(busca.livros);
        setTotal(busca.total);
    }

    useEffect(function () {
        buscarLivros();
    }, [titulo, autor]);

    return (
        <>
            <Header titulo="BOOKPLUS" />
            <Banner />

            <Titulo
                subtitulo="NOVIDADES"
                titulo="Destaques da Semana"
            />

            <div className="container mt-5">
                <div className="row mb-4 g-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por título..."
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por autor..."
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                        />
                    </div>
                </div>

                <p>Total de livros: {total}</p>

                <div className="row g-4">
                    {livros.length > 0 ?
                        livros.map(function (livro, index) {
                            return (
                                <div className="col-6 col-md-4 col-lg-3" key={index}>
                                    <Cards
                                        titulo={livro.titulo}
                                        descricao={livro.autor}
                                        imagem={livro.imagem}
                                    />
                                </div>
                            );
                        }
                    ) : (
                        <p>Nenhum livro encontrado.</p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}