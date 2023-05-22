import { Link } from "react-router-dom";

function Card() {
    return (
        <div className="card">
            <h2>Nome Livro</h2>
            <p>Preço</p>
            <div className="card-info">
                <img src="" alt="Capa do Livro" />
                <p>Autor</p>
            </div>
            <Link to={'produtos/:id'} class="btn btn-primary">Saiba Mais</Link>
        </div>
    )
}

export default Card;