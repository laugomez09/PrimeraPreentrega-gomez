import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartCompleto from "./CartCompleto";
import { Modal } from "./modal";


const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
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
                        <CartCompleto/>


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
