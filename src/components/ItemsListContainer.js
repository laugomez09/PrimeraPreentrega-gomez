const ItemListContainer = (listas) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{listas.ItemUno}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{listas.ItemDos}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{listas.ItemTres}</a>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer;