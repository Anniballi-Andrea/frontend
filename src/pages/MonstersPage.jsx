import { useMonster } from "../context/MonsterContext"

export default function MonstersPage() {
    const { allMonsters } = useMonster()

    /*
    [
    {
        "actions": [
            {
                "effect": "Attacco con arma da mischia: +4 al tiro per colpire, portata 1,5m. Danno: 5 (1d6 + 2) danni taglienti.",
                "id": 1,
                "name": "Scimitarra"
            }
        ],
        "armorClass": 15,
        "charisma": -1,
        "constitution": 0,
        "dexterity": 2,
        "id": 1,
        "image": "1776266229884_1775049324441_goblin.JPG",
        "immunity": "",
        "intelligence": 0,
        "level": 0.25,
        "lifePoint": 7,
        "moviment": "9m",
        "name": "Goblin",
        "resistence": "",
        "savingThrow": "",
        "sense": "Scurovisione 18m",
        "skills": "Furtività +6",
        "strength": -1,
        "trait": [
            {
                "effect": "Il goblin può effettuare l'azione di Disimpegno o Nascondersi come azione bonus in ogni suo turno.",
                "id": 1,
                "name": "Fuga Agile"
            }
        ],
        "wisdom": -1
    }, 
    */

    return (
        <div className="container-fluid mt-5">
            <div className="row row-cols-4 justify-content-center">
                {allMonsters.length > 0 &&
                    allMonsters.map((el) => (
                        <div className="col">
                            <div key={el.id} className="card bg_bage mb-4 mx-4">
                                <div className="card-header bg_name text-center">
                                    {el.name}
                                </div>
                                <div className="card-body card_all_monsters">
                                    <div className="d-flex justify-content-between mb-2">
                                        <div>pf: {el.lifePoint}</div>
                                        <div>ca: {el.armorClass}</div>
                                    </div>
                                    <div className="text-start mb-2">
                                        movimento: {el.moviment}
                                    </div>
                                    <div className="row row-cols-3 mb-2" >
                                        <div className="col">str: {el.strength}</div>
                                        <div className="col">dex: {el.dexterity} </div>
                                        <div className="col">cons: {el.constitution} </div>
                                        <div className="col">int: {el.intelligence}</div>
                                        <div className="col">sag: {el.wisdom}</div>
                                        <div className="col">car: {el.charisma}</div>
                                    </div>
                                    {el.immunity &&
                                        <div className="text-start mb-2">

                                            <span className="fw-bold">immunità:</span>  {el.immunity}
                                        </div>
                                    }
                                    {el.resistence &&
                                        <div className="text-start mb-2">
                                            <span className="fw-bold">resistenze:</span>  {el.resistence}
                                        </div>
                                    }
                                    {el.savingThrow &&
                                        <div className="text-start mb-2">
                                            <span className="fw-bold">tiri salvezza:</span>  {el.savingThrow}
                                        </div>
                                    }
                                    {el.skills &&
                                        <div className="text-start mb-2">
                                            <span className="fw-bold">abilità:</span> {el.skills}
                                        </div>
                                    }
                                    {el.trait.length > 0 &&
                                        <div className="mb-2"><h5>Tratti:</h5></div>}
                                    {el.trait.length > 0 && el.trait.map((trait) => (
                                        <div key={trait.id} className="mb-2">
                                            <div><span className="fw-bold">{trait.name}</span>: {trait.effect}</div>

                                        </div>
                                    ))}
                                    {el.actions.length > 0 &&
                                        <div className="mb-2"><h5>Azioni:</h5></div>}
                                    {el.actions.length > 0 && el.actions.map((action) => (
                                        <div key={action.id} className="mb-2">
                                            <div><span className="fw-bold">{action.name}</span>: {action.effect}</div>

                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    ))

                }

            </div>
        </div>
    )
}