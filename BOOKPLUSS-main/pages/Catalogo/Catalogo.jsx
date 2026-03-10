import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Titulo from "../../components/Titulo/Titulo.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const LIVROS_DATA = [
    { id: 1, titulo: "O Silêncio do Mar", autor: "Helena Vasconcelos", categoria: "Romance", imagem: "/img1.png" },
    { id: 2, titulo: "Caminhos de Areia", autor: "Marcos Dutra", categoria: "Aventura", imagem: "/img2.png" },
    { id: 3, titulo: "Arquitetura da Alma", autor: "Beatriz Muniz", categoria: "Autoajuda", imagem: "/img3.png" },
    { id: 4, titulo: "O Último Inverno", autor: "Ricardo Almeida", categoria: "Suspense", imagem: "/img4.png" },
];

export default function Catalogo() {
    const [busca, setBusca] = useState("");
    const [filtroAutor, setFiltroAutor] = useState("");
    const [filtroCategoria, setFiltroCategoria] = useState("");


    const livrosFiltrados = LIVROS_DATA.filter(livro => {
        return (
            livro.titulo.toLowerCase().includes(busca.toLowerCase()) &&
            (filtroAutor === "" || livro.autor === filtroAutor) &&
            (filtroCategoria === "" || livro.categoria === filtroCategoria)
        );
    });

    return (
        <>
            <Header titulo="BOOKPLUS" />
            <div className="container mt-5">
                <Titulo subtitulo="EXPLORE" titulo="Nosso Catálogo" />

                {/* Área de Filtros */}
                <div className="row mb-5 g-3">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar por título..."
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <select className="form-select" onChange={(e) => setFiltroAutor(e.target.value)}>
                            <option value="">Todos os Autores</option>
                            <option value="Helena Vasconcelos">Helena Vasconcelos</option>
                            <option value="Marcos Dutra">Marcos Dutra</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select className="form-select" onChange={(e) => setFiltroCategoria(e.target.value)}>
                            <option value="">Todas as Categorias</option>
                            <option value="Romance">Romance</option>
                            <option value="Aventura">Aventura</option>
                            <option value="Suspense">Suspense</option>
                        </select>
                    </div>
                </div>

                {/* Listagem de Cards */}
                <div className="row g-4 mb-5">
                    {livrosFiltrados.length > 0 ? (
                        livrosFiltrados.map(livro => (
                            <div key={livro.id} className="col-6 col-md-4 col-lg-3">
                                <Cards
                                    titulo={livro.titulo}
                                    descricao={livro.autor}
                                    imagem={livro.imagem}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-center">Nenhum livro encontrado.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}