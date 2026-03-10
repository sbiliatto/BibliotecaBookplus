import css from "./Cards.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Cards({ imagem, titulo, descricao }) {
        return (
            <div className="card">
                <img src={imagem} className="card-img-top" alt={titulo} />
                <div className="card-body">
                    <p className="text-secondary mb-1" style={{fontSize:"12px"}}>
                        POESIA
                    </p>
                    <h6 className="card-title">{titulo}</h6>
                    <p className="text-muted">{descricao}</p>
                </div>
            </div>
        );
    }
