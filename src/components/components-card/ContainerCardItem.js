import CardItem from "./CardItem"
import FetchSimulation from "./FetchSimulation";
import { useState, useEffect } from "react";
import productos from "./utils/productos";
import "../components-card/card.css"
import { useParams } from "react-router-dom";

const ContainerCardItem = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory == undefined) {
            FetchSimulation(productos, 0)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
        } else {
            FetchSimulation(productos.filter(filter => filter.type == idCategory))
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
        }
    }, [idCategory])


    return (
        <div className="cardcontainer">
            {
                datos.map(product => (
                    <CardItem
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        titulo={product.titulo}
                        cantidad={product.cantidad}
                        precio={product.precio}
                    />
                ))
            }
        </div>
    )
}

export default ContainerCardItem;