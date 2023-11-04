import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";
import { Modal } from "./modal";
import "../../styles/nav.css"

const NavBar = () => {

    return (
        <ContextCart>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id="NavBar">
                    <div className="Piedepag">
                        <div id="nav" className="container-fluid">
                            <div className="containerBrand">
                                <Brand />
                            </div>

                            <nav className="containerItemList">
                                <ItemListContainer
                                    ItemUno="Mates"
                                    ItemDos="Termos"
                                    ItemTres="Bombillas"
                                />
                            </nav>

                            <div className="containerCart">
                                <CartWidget />
                            </div>
                            <div className="ContainerModal">
                                <Modal />

                            </div>

                            <ContainerCart />
                        </div>
                    </div>
                </nav>
            </header>
        </ContextCart>
    )
}

export default NavBar;