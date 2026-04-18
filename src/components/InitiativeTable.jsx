import { useInitiative } from "../context/InitiativeContext"
import Button from "./Button"

export default function InitiativeTable() {
    const { updateInitName, updateInit, updateDex, deleteFromInit, finalInitiative } = useInitiative()

    return (
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
                            <td>{el.name}</td>
                            <td>{el.initiative}</td>
                            <td>{el.dex}</td>
                            <td> <button type="button" onClick={() => deleteFromInit(el.id)} className="btn btn-sm btn-danger">elimina</button> </td>
                        </tr>

                    ))
                }


            </tbody>
        </table>
    )
}