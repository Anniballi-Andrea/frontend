import { useState } from "react";
import { useMonster } from "../context/MonsterContext"
import SearchMonster from "./SearchMonster";

export default function FormGetMoster() {

    const { getMonster, encounterName, setEncounterName, encounterNumb, setEncounterNumb } = useMonster();






    return (
        <form className="mt-2" onSubmit={getMonster}>
            <div className="row justify-content-center">
                <div className="col-4">
                    <SearchMonster name={encounterName} setName={setEncounterName} />
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
                    <button className="btn btn-primary btn-sm" type="submit">Aggiungi</button>
                </div>
            </div>
        </form>
    )
}