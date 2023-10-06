import { Link } from "react-router-dom";

const ItemListContainer = (listas) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><Link to="category/Mates">{listas.ItemUno}</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="category/Termos">{listas.ItemDos}</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="category/Bombillas">{listas.ItemTres}</Link></a>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer;