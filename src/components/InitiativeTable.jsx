import { useInitiative } from "../context/InitiativeContext"
import Modal from "./Modal"

export default function InitiativeTable() {
    const { updateInitName, updateInit, updateDex, deleteFromInit, finalInitiative, turnOn } = useInitiative()


    return (
        <>
            <div className="col text-center mt-3">
                <p>INIZIATIVA:</p>
            </div>
            {/* titolo */}

            <table className="mt-3 table beckground_table text-center">
                <thead>
                    <tr>
                        <th> Name</th>
                        <th> Iniziativa</th>
                        <th>Des</th>
                        <th >Elimina</th>
                    </tr>
                </thead>
                {/* testa della tabella */}
                <tbody>
                    {
                        finalInitiative.map((el, i) => (turnOn == i ?
                            <tr key={el.id} className="active-tab" >
                                <td>
                                    <input
                                        type="text"
                                        value={el.name}
                                        className="form-control "
                                        onChange={(e) => updateInitName(el.id, e.target.value)}

                                    />
                                    {/* input del nome*/}
                                </td>
                                {/* area del nome */}
                                <td>
                                    <input
                                        type="number"
                                        value={el.initiative}
                                        className="form-control "
                                        onChange={(e) => updateInit(el.id, e.target.value)}
                                        placeholder="0"
                                    />
                                    {/* input dell'iniziativa */}
                                </td>
                                {/* area dell'iniziativa */}
                                <td>
                                    <input
                                        type="number"
                                        value={el.dex}
                                        className="form-control "
                                        onChange={(e) => updateDex(el.id, e.target.value)}
                                    />
                                    {/* input destrezza */}
                                </td>
                                {/* area della destrezza */}
                                <td>
                                    <button type="button" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target={`#initiativeDelete${el.id}${i}`}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                    <Modal confirm={deleteFromInit} el={el.id} id={`initiativeDelete${el.id}${i}`} />
                                </td>
                                {/* tasto per eliminare dall'iniziativa */}
                            </tr>
                            //se la riga della tabella è quella attiva vale il codice sopra
                            :
                            <tr key={el.id}>
                                <td>
                                    <input
                                        type="text"
                                        value={el.name}
                                        className="form-control "
                                        onChange={(e) => updateInitName(el.id, e.target.value)}

                                    />
                                </td>
                                {/* area del nome */}
                                <td>
                                    <input
                                        type="number"
                                        value={el.initiative}
                                        className="form-control "
                                        onChange={(e) => updateInit(el.id, e.target.value)}
                                        placeholder="0"
                                    />
                                </td>
                                {/* area dell'iniziativa */}
                                <td>
                                    <input
                                        type="number"
                                        value={el.dex}
                                        className="form-control "
                                        onChange={(e) => updateDex(el.id, e.target.value)}
                                    />
                                </td>
                                {/* area della destrezza */}
                                <td>
                                    <button type="button" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target={`#initiativeDelete${el.id}${i}`}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                    <Modal confirm={deleteFromInit} el={el.id} id={`initiativeDelete${el.id}${i}`} />
                                </td>
                                {/* tasto per eliminare dall'iniziativa */}
                            </tr>
                            //se la riga della tabella è quella non attiva vale il codice sopra
                        ))
                        //tutte le righe della tabella
                    }
                </tbody>
                {/* corpo della tabella*/}
            </table>
            {/* tabella iniziativa*/}

        </>
    )
}