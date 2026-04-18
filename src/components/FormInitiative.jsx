
import { useEffect } from "react"
import { useInitiative } from "../context/InitiativeContext"

export default function FormInitiative() {
    const { initiative, playerName, setPlayerName, playerInit, setPlayerInit, playerDex, setPlayerDex, addInitiative } = useInitiative()




    useEffect(() => {
        console.log("Stato Battle aggiornato:", initiative);
    }, [initiative]);

    return (

        <form onSubmit={addInitiative}>
            <div className="d-flex">
                <div className="me-2">
                    <label htmlFor="add-name">Nome:</label>
                    <input
                        id="add-name"
                        className="form-control"
                        type="text"
                        value={playerName}
                        onChange={e => { setPlayerName(e.target.value) }}
                        required
                    />
                </div>
                <div className="me-2">
                    <label htmlFor="add-initiative">Iniziativa:</label>
                    <input
                        id="add-initiative"
                        className="form-control"
                        type="number"
                        value={playerInit}
                        onChange={e => { setPlayerInit(e.target.value) }}
                        required

                    />
                </div>
                <div className="me-2">
                    <label htmlFor="add-dex">Destrezza:</label>
                    <input
                        id="add-dex"
                        className="form-control"
                        type="number"
                        value={playerDex}
                        onChange={e => { setPlayerDex(e.target.value) }}
                        required
                    />
                </div>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <button type="submit" className="btn btn-sm btn-primary">Aggiungi</button>
            </div>

        </form>
    )
}