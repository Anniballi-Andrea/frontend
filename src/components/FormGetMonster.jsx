import { useMonster } from "../context/MonsterContext"

export default function FormGetMoster() {

    const { getMonster, monsterName, setMonsterName, encounterNumb, setEncounterNumb } = useMonster();

    return (
        <form className="mt-4" onSubmit={getMonster}>
            <div className="row justify-content-center">
                <div className="col-4">
                    <div>
                        <label htmlFor="serch_encounter" className="custom-label">
                            mostro da cercare:
                        </label>
                        <input
                            id="serch_encounter"
                            className="form-control"
                            type="text"
                            value={monsterName}
                            onChange={e => { setMonsterName(e.target.value) }}
                            required
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <label htmlFor="serch_quantity" className="custom-label">
                            quantità:
                        </label>
                        <input
                            id="serch_quantity"
                            className="form-control"
                            type="number"
                            value={encounterNumb}
                            onChange={e => { setEncounterNumb(e.target.value) }}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-primary" type="submit">crea</button>
                </div>
            </div>
        </form>
    )
}