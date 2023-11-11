import CardImage from "./CardImage";
import Description from "./Description";
import "../../styles/detailsItems.css";
import ButtonDetalles from "./Buttondetalles";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/ClipLoader";

const DetailsItems = () => {
    const [datos, setDatos] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {

        setDatos([])

        fetchSimultion(productos.filter(flt => flt.id === idItem), 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
    }, [idItem])

    return (
        <div className="detailsItem">
            {
                (datos.length === 0) ? <MoonLoader color="#328a00ef" />
                    : datos.map(items => (
                        <>
                            <div className="containerLeft">
                                <CardImage
                                    imagen={items.imageProduct.firtsImage}
                                    id={items.id}
                                />
                            </div>

                            <div className="containerRigth">
                                <Description
                                    title={items.title}
                                    cantidad={items.stock}
                                    precio={items.price}
                                />

                                <div className="buttons">

                                    <ButtonDetalles
                                        txt="Agregar al carrito"
                                    />
                                </div>
                            </div>
                        </>
                    ))
            }
        </div>
    )
}

export default DetailsItems;