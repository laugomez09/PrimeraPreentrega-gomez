export const Modal = () =>{
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Carrito</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" id="contenedor_carrito">
                    </div>
                    <div>
                        <p className="text-center" id="total"></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" id="vaciar_carrito">Vaciar carrito</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Seguir
                            comprando</button>

                        <button type="button" className="btn btn-danger" id="finalizar_compra">Finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}