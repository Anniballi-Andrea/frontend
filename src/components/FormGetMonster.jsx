import { useMonster } from "../context/MonsterContext"

export default function FormGetMoster() {

    const { allMonsters, getMonster, monsterName, setMonsterName, encounterNumb, setEncounterNumb } = useMonster();

    const allMonsterFiltred = allMonsters.filter((el) => {
        return el.name.toLowerCase().includes(monsterName.toLowerCase())
    });


    return (
        <form className="mt-2" onSubmit={getMonster}>
            <div className="row justify-content-center">
                <div className="col-4">
                    <div>
                        <label htmlFor="serch_encounter" className="custom-label">
                            Mostro da cercare:
                        </label>
                        <input
                            id="serch_encounter"
                            className="form-control"
                            type="text"
                            value={monsterName}
                            onChange={e => { setMonsterName(e.target.value) }}
                            autoComplete="off"
                            required
                        />
                        {
                            monsterName.length >= 3 && allMonsterFiltred.map((el, i) => (
                                <div key={i} onClick={() => setMonsterName(el.name)}>{el.name}</div>
                            ))
                        }

                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <label htmlFor="serch_quantity" className="custom-label">
                            Quantità:
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