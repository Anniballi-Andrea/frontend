import { useState } from "react";
import { useMonster } from "../context/MonsterContext";

export default function SearchMonster({ name, setName }) {
    const { allMonsters } = useMonster();
    const [search, setSearch] = useState(false)

    const allMonsterFiltred = allMonsters.filter((el) => {
        if (name) {
            return el.name.toLowerCase().includes(name.toLowerCase())
        }

    });

    const searchForAdd = ((name) => {
        setSearch(true)
        setName(name)
    })

    const stopSearch = ((name) => {
        setSearch(false)
        setName(name)
    })



    return (
        <div>
            <label htmlFor="serch_encounter" className="custom-label">
                cerca:
            </label>
            <div className="relative">
                <input

                    id="serch_encounter"
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => { searchForAdd(e.target.value) }}
                    autoComplete="off"
                    placeholder="nome..."
                    required
                />
                <div className="searchbox">
                    {
                        (name && name.length >= 3 && search) && allMonsterFiltred.map((el, i) => (
                            <div className="search_content" key={i} onClick={() => stopSearch(el.name)}>{el.name}</div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}