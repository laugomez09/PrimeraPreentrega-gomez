import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import { Modal } from "./modal";
import "../components/nav.css"


const NavBar = () => {
    return (
        <header>
            <nav  className="navbar navbar-expand-lg bg-body-tertiary">
                <div id="nav" className="container-fluid">
                    <div className="containerBrand">
                        <Brand />

                    </div>

                    <div className="containerItemList">
                        <ItemListContainer
                            ItemUno = "Mates"
                            ItemDos = "Termos"
                            ItemTres = "Bombillas"
                        />

                    </div>

                    <div className="containerCart">
                        <CartWidget/>


                    </div>
                    <div className="ContainerModal">
                        <Modal/>

                    </div>
                </div>
            </nav>
        </header>

    )

}

export default NavBar;
