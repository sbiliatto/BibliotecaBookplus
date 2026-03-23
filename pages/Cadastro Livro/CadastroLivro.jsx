import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Titulo from "../../components/Titulo/Titulo.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function CadastroLivro() {
    const [imagem, setImagem] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [autor, setAutor] = useState("");
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const [mensagem, setMensagem] = useState("");

    async function cadastrarLivro(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        if (!token) {
            setMensagem("Usuário não logado.");
            return;
        }

        const livro = {
            imagem: imagem,
            titulo: titulo,
            categoria: categoria,
            descricao: descricao,
            autor: autor,
            faixa_etaria: faixaEtaria
        };

        const resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(livro)
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            setMensagem("Livro cadastrado com sucesso!");
        } else {
            setMensagem(dados?.mensagem || "Erro ao cadastrar livro.");
            console.log(dados);
        }
    }

    return (
        <>
            <Header titulo="BOOKPLUS" />

            <div className="container mt-5">
                <Titulo
                    subtitulo="ÁREA PRIVADA"
                    titulo="Cadastro de Livros"
                />

                <form onSubmit={cadastrarLivro} className="mt-4">
                    <div className="mb-3">
                        <label className="form-label">Imagem</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="URL da imagem"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite o título do livro"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Categoria</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite a categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descrição</label>
                        <textarea
                            className="form-control"
                            placeholder="Digite a descrição"
                            rows="4"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Autor</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite o autor"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Faixa etária</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ex: 16+"
                            value={faixaEtaria}
                            onChange={(e) => setFaixaEtaria(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-dark">
                        Cadastrar Livro
                    </button>
                </form>

                {mensagem !== "" && (
                    <p className="mt-3">{mensagem}</p>
                )}
            </div>

            <Footer />
        </>
    );
}