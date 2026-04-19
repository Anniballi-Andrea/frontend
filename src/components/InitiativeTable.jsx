import { useInitiative } from "../context/InitiativeContext"

export default function InitiativeTable() {
    const { updateInitName, updateInit, updateDex, deleteFromInit, finalInitiative, resetInitiative } = useInitiative()

    return (
        <>
            <table className="mt-3 table">
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
                        finalInitiative.map((el) => (
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
                                /></td>
                                <td><input
                                    type="number"
                                    value={el.dex}
                                    className="form-control "
                                    onChange={(e) => updateDex(el.id, e.target.value)}
                                /></td>
                                <td> <button type="button" onClick={() => deleteFromInit(el.id)} className="btn btn-sm btn-danger">elimina</button> </td>
                            </tr>

                        ))
                    }


                </tbody>

            </table>
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={resetInitiative}>reset</button>
            </div>
        </>
    )
}