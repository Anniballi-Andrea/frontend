
export default function MonsterCard({ el }) {





    return (
        <>
            <div className="col">
                <div key={el.id} className="card bg_bage mb-4 mx-4">
                    <div className="card-header bg_name text-center">
                        <div className="d-flex justify-content-around">
                            <div className="fw-bold">{el.name}</div>
                            <div>Sfida: {el.level}</div>
                        </div>

                    </div>
                    <div className="card-body card_all_monsters">
                        <div className="d-flex justify-content-between mb-2 ">
                            <div > <span className="fw-bold">pf:</span>{el.lifePoint}</div>
                            <div ><span className="fw-bold">ca:</span> {el.armorClass}</div>
                        </div>
                        <div className="text-start mb-2">
                            <span className="fw-bold"> movimento:</span> {el.moviment}
                        </div>
                        <div className="row row-cols-3 mb-2 border-top border-top border-danger" >
                            <div className="col"><span className="fw-bold">str:</span> {el.strength}</div>
                            <div className="col"><span className="fw-bold">dex:</span> {el.dexterity} </div>
                            <div className="col"><span className="fw-bold">cons:</span> {el.constitution} </div>
                            <div className="col"><span className="fw-bold">int:</span> {el.intelligence}</div>
                            <div className="col"><span className="fw-bold">sag:</span> {el.wisdom}</div>
                            <div className="col"><span className="fw-bold">car:</span> {el.charisma}</div>
                        </div>

                        {el.immunity &&
                            <div className="row row-cols-12 border-top border-danger text-start mb-2 ">
                                <div className="col">
                                    <span className="fw-bold">immunità:</span>  {el.immunity}
                                </div>

                            </div>
                        }
                        {el.resistence &&
                            <div className="row row-cols-12 border-top border-danger text-start mb-2">
                                <div className="col">
                                    <span className="fw-bold">resistenze:</span>  {el.resistence}
                                </div>

                            </div>
                        }
                        {el.savingThrow &&
                            <div className="row row-cols-12 border-top border-danger text-start mb-2">
                                <div className="col">
                                    <span className="fw-bold">tiri salvezza:</span>  {el.savingThrow}
                                </div>

                            </div>
                        }
                        {el.skills &&
                            <div className="row row-cols-12 border-top border-danger text-start mb-2">
                                <div className="col">
                                    <span className="fw-bold">abilità:</span> {el.skills}
                                </div>

                            </div>
                        }


                        {el.trait.length > 0 &&
                            <div className="row row-cols-12 border-top border-danger">
                                <div className="mb-2 ">
                                    <h5>Tratti:</h5>
                                </div>
                            </div>
                        }

                        {el.trait.length > 0 && el.trait.map((trait) => (

                            <div key={trait.id} className="mb-2">
                                <div><span className="fw-bold">{trait.name}</span>: {trait.effect}</div>

                            </div>

                        ))}


                        {el.actions.length > 0 &&
                            <div className="row row-cols-12 border-top border-danger">
                                <div className="mb-2 ">
                                    <h5>Azioni:</h5>
                                </div>
                            </div>
                        }
                        {el.actions.length > 0 && el.actions.map((action) => (
                            <div key={action.id} className="mb-2">
                                <div><span className="fw-bold">{action.name}</span>: {action.effect}</div>

                            </div>
                        ))}

                    </div>
                </div>

            </div >
        </>

    )
}