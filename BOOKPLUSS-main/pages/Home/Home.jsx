import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from "../../components/Titulo/Titulo.jsx";
import Button from "../../components/Button/Button.jsx";
import Footer from "../../components/Footer/Footer.jsx";


export default function Home() {
    return (
        <>
            <Header titulo="BOOKPLUS" />
            <Banner />
            <Titulo
                subtitulo="NOVIDADES"
                titulo="Destaques da Semana"
            />
            <div className="container mt-5">
                <div className="row g-4">
                    <div className="col-6 col-md-4 col-lg-3">
                        <Cards
                            titulo="O Silêncio do Mar"
                            descricao="Helena Vasconcelos"
                            imagem="/img1.png"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <Cards
                            titulo="Caminhos de Areia"
                            descricao="Marcos Dutra"
                            imagem="/img2.png"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <Cards
                            titulo="Arquitetura da Alma"
                            descricao="Beatriz Muniz"
                            imagem="/img3.png"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <Cards
                            titulo="O Último Inverno"
                            descricao="Ricardo Almeida"
                            imagem="/img4.png"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <Cards
                            titulo="Crônicas da Capital"
                            descricao="Fernanda Costa"
                            imagem="/img5.png"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <Cards
                            titulo="Além do Horizonte"
                            descricao="Juliano Mendes"
                            imagem="/img6.png"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <Cards
                            titulo="O Despertar da Mente"
                            descricao="Dra. Sônia Luz"
                            imagem="/img7.png"
                        />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                        <Cards
                            titulo="Fragmentos"
                            descricao="Carlos Eduardo"
                            imagem="/img8.png"
                        />
                    </div>
                    <Button texto="Ver catálogo completo" tipo="completo"/>


                </div>
            </div>
            <Footer />

        </>
    );
}