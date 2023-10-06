import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import FetchSimulation from "./FetchSimulation";
import productos from "./utils/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddCantCart from "./AddCantCart";
import BotonAdicional from "./botonadicional";
import "../components-card/card.css"

const Descrip = () => {
    const [datos, setDatos] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        FetchSimulation(productos.filter(flt => flt.id == idItem), 0)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
    }, [idItem])

    return (
        <div className="detailsItem">
            {
                datos.map(items => (
                    <>
                        <div className="card mb-3" id="CartaDescrip">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <CardImage
                                        image={items.image}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <CardDescription
                                            titulo={items.titulo}
                                            description={items.description}
                                            cantidad={items.cantidad}
                                            precio={items.precio}
                                        />
                                    </div>
                                </div>
                                <div className="CajaDeDescrip">
                                    <AddCantCart
                                        cant={5}
                                    />

                                    <BotonAdicional
                                        txt="Agregar a carrito" />

                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default Descrip;