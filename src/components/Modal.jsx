import ReactDOM from 'react-dom';
export default function Modal({ id, confirm, el }) {

    const content = (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" data-bs-focus="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Conferma</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Vuoi davvero procedere?
                    </div>
                    <div className="modal-footer">
                        {el ? <button className="btn btn-sm btn-danger " data-bs-dismiss="modal" onClick={(e) => {
                            e.currentTarget.blur();
                            confirm(el)
                        }
                        }>
                            Conferma
                        </button> : <button className="btn btn-sm btn-danger " data-bs-dismiss="modal" onClick={(e) => {
                            e.currentTarget.blur();
                            confirm()
                        }
                        }>
                            Conferma
                        </button>}
                    </div>
                </div>
            </div>
        </div >
    )

    return ReactDOM.createPortal(content, document.body);

}