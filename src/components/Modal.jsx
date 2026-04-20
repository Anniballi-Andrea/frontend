export default function Modal({ id, removeElement, el }) {
    return (
        <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Conferma</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Vuoi davvero eliminare
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                        <button className="btn btn-sm btn-danger " data-bs-dismiss="modal" onClick={() => removeElement(el)}>
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}