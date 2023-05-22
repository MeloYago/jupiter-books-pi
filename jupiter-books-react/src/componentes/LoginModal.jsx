import { Link } from "react-router-dom";


function LoginModal() {
    return (
        <div className="backdrop">
            <div className="modal">
                <h1>Acesse sua conta</h1>
                <form>
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="senha" />
                    <button>ENTRAR</button>
                    <Link to="/cadastro">Não possuo conta</Link>
                    <hr />
                    <Link to="/">FECHAR</Link>
                </form>
            </div>
            
        </div>
    )
}

export default LoginModal;