import { useState } from "react";
import { useMonster } from "../context/MonsterContext"

export default function FormGetMoster() {

    const { allMonsters, getMonster, monsterName, setMonsterName, encounterNumb, setEncounterNumb } = useMonster();
    const [search, setSearch] = useState(false)



    const allMonsterFiltred = allMonsters.filter((el) => {
        return el.name.toLowerCase().includes(monsterName.toLowerCase())
    });

    const searchForAdd = ((name) => {
        setSearch(true)
        setMonsterName(name)
    })

    const stopSearch = ((name) => {
        setSearch(false)
        setMonsterName(name)
    })


    return (
        <form className="mt-2" onSubmit={getMonster}>
            <div className="row justify-content-center">
                <div className="col-4">
                    <div>
                        <label htmlFor="serch_encounter" className="custom-label">
                            Mostro da cercare:
                        </label>
                        <div className="relative">
                            <input

                                id="serch_encounter"
                                className="form-control"
                                type="text"
                                value={monsterName}
                                onChange={(e) => { searchForAdd(e.target.value) }}
                                autoComplete="off"
                                placeholder="nome..."
                                required
                            />
                            <div className="searchbox">
                                {
                                    (monsterName.length >= 3 && search) && allMonsterFiltred.map((el, i) => (
                                        <div className="search_content" key={i} onClick={() => stopSearch(el.name)}>{el.name}</div>
                                    ))
                                }
                            </div>
                        </div>

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
                            placeholder="0"
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