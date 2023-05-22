import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';


function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <img src={Logo} alt="Logotipo da Livraria" />
                < Link to="/" className="nav-item nav-link">
                    Home
                </Link>
                < Link to="/sobre" className="nav-item nav-link">
                    Sobre Nós
                </Link>
                <Link to="/login" className="nav-item nav-link">
                    Acesse sua Conta!
                </Link>
            </div>
        </nav>
    )
}

export default Nav;