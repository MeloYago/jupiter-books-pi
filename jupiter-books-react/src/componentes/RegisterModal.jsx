import { Link } from "react-router-dom";


function RegisterModal() {
    return (
        <div className="backdrop">
            <div className="modal">
                <h1>Cadastre-se!</h1>
                <form>
                    <input type="text" placeholder="nome" />
                    <input type="text" placeholder="telefone" />
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="senha" />
                    <button>CADASTRAR</button>
                    <Link to="/login">Já tenho uma conta!</Link>
                    <hr />
                    <Link to="/">FECHAR</Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterModal;