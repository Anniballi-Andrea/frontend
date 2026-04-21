import { useState } from "react"
import { useInitiative } from "../context/InitiativeContext"

export default function InitiativeTable() {
    const { updateInitName, updateInit, updateDex, deleteFromInit, finalInitiative, resetInitiative, nextPlayer, turnOn, round } = useInitiative()


    return (
        <><div className="col text-center mt-3">
            <p>INIZIATIVA:</p>
        </div>
            <table className="mt-3 table beckground_table text-center">

                <thead>
                    <tr>
                        <th> Name</th>
                        <th> Iniziativa</th>
                        <th>Des</th>
                        <th >Elimina</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        finalInitiative.map((el, i) => (turnOn == i ?
                            <tr className="active-tab" key={el.id}>
                                <td><input
                                    type="text"
                                    value={el.name}
                                    className="form-control "
                                    onChange={(e) => updateInitName(el.id, e.target.value)}

                                /></td>
                                <td><input
                                    type="number"
                                    value={el.initiative}
                                    className="form-control "
                                    onChange={(e) => updateInit(el.id, e.target.value)}
                                    placeholder="0"
                                /></td>
                                <td>
                                    <input
                                        type="number"
                                        value={el.dex}
                                        className="form-control "
                                        onChange={(e) => updateDex(el.id, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button type="button" onClick={() => deleteFromInit(el.id)} className="btn btn-sm btn-danger">
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                </td>
                            </tr>

                            :
                            <tr key={el.id}>
                                <td><input
                                    type="text"
                                    value={el.name}
                                    className="form-control "
                                    onChange={(e) => updateInitName(el.id, e.target.value)}

                                /></td>
                                <td><input
                                    type="number"
                                    value={el.initiative}
                                    className="form-control "
                                    onChange={(e) => updateInit(el.id, e.target.value)}
                                    placeholder="0"
                                /></td>
                                <td>
                                    <input
                                        type="number"
                                        value={el.dex}
                                        className="form-control "
                                        onChange={(e) => updateDex(el.id, e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button type="button" onClick={() => deleteFromInit(el.id)} className="btn btn-sm btn-danger">
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                </td>
                            </tr>

                        ))
                    }


                </tbody>

            </table>
            <div className="d-flex justify-content-center align-items-center color_round">
                <span className="fw-bold fs-5 me-1">Round:</span><span className="fw-bold fs-5"> {round}</span>
            </div>
            <div className="d-flex justify-content-around mb-4">
                <div>
                    <button
                        className="btn btn-warning"
                        type="button"
                        onClick={resetInitiative}>
                        Reset
                    </button>
                </div>
                <div>
                    <button
                        className="btn btn-warning"
                        type="button"
                        onClick={nextPlayer}>
                        next
                    </button>
                </div>

            </div>
        </>
    )
}