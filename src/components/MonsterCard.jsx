
import { useState } from "react";
import { useMonster } from "../context/MonsterContext";

export default function MonsterCard({ el }) {

    const { removeFromBattle, applicaDanno, applicaCura } = useMonster();

    const [inputDanno, setInputDanno] = useState("");
    const [inputCura, setInputCura] = useState("");

    const handleDanno = (e) => {
        e.preventDefault();
        let danno = Number(inputDanno)
        if (danno < 0) {
            danno = 0
        }
        applicaDanno(el.instanceId, Number(danno))

        setInputDanno("")
    }
    const handleCura = (e) => {
        e.preventDefault();
        let cura = Number(inputCura)
        if (cura < 0) {
            cura = 0
        }
        applicaCura(el.instanceId, Number(cura))

        setInputCura("")
    }


    return (
        <>
            <div className="card">
                <div className="card-header text-center">
                    <div>
                        {el.name}
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="me-2">{
                            el.status == 0 ? "morto" : "PF:" + el.status}

                        </div>
                        <div>
                            CA: {el.armorClass}
                        </div>
                    </div>


                </div>
                <div className="card-body">

                    <form onSubmit={handleDanno}>
                        <div className="d-flex align-items-center">
                            <div className="me-2 mt-2">
                                <input
                                    className="form-control"
                                    type="number"
                                    value={inputDanno}
                                    onChange={(e) => setInputDanno(e.target.value)}
                                    placeholder="danno"
                                />
                            </div>
                            <div className="mt-2 ms-2">
                                <button className="btn btn-sm btn-warning" type="submit">Danno</button>
                            </div>
                        </div>
                    </form>

                    <form onSubmit={handleCura}>
                        <div className="d-flex align-items-center">
                            <div className="me-2 mt-2">
                                <input
                                    className="form-control "
                                    type="number"
                                    value={inputCura}
                                    onChange={(e) => setInputCura(e.target.value)}
                                    placeholder="cura"
                                />
                            </div>
                            <div className="mt-2 ms-2">
                                <button className="btn btn-sm btn-success" type="submit">Cura</button>
                            </div>

                        </div>
                    </form>
                    <div className="row row-cols-3">
                        {el.strength < 0 ? <div className="col">str: {el.strength}</div> : <div className="col">str: + {el.strength}</div>}
                        {el.dexterity < 0 ? <div className="col">dex: {el.dexterity}</div> : <div className="col">dex: + {el.dexterity}</div>}
                        {el.constitution < 0 ? <div className="col">cons:  {el.constitution}</div> : <div className="col">cons: + {el.constitution}</div>}
                        {el.intelligence < 0 ? <div className="col">int:  {el.intelligence}</div> : <div className="col">int: + {el.intelligence}</div>}
                        {el.wisdom < 0 ? <div className="col">sag:  {el.wisdom}</div> : <div className="col">sag: + {el.wisdom}</div>}
                        {el.charisma < 0 ? <div className="col">car:  {el.charisma}</div> : <div className="col">car: + {el.charisma}</div>}
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                        <button className="btn btn-sm btn-danger " onClick={() => removeFromBattle(el.instanceId)}>rimuovi</button>
                    </div>
                </div>
            </div>

        </>

    )
}