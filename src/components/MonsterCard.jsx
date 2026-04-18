
import { useState } from "react";
import { useMonster } from "../context/MonsterContext";

export default function MonsterCard({ el }) {

    const { removeFromBattle, applicaDanno, applicaCura } = useMonster();

    const [inputDanno, setInputDanno] = useState("");
    const [inputCura, setInputCura] = useState("");

    const handleDanno = (e) => {
        e.preventDefault();
        applicaDanno(el.instanceId, Number(inputDanno))

        setInputDanno("")
    }
    const handleCura = (e) => {
        e.preventDefault();
        applicaCura(el.instanceId, Number(inputCura))

        setInputCura("")
    }


    return (
        <>
            <div className="card">
                <div className="card-header text-center">
                    <div>
                        {el.name}
                    </div>
                    <div>
                        pf: {el.status}
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
                    <div className="mt-2 d-flex justify-content-center">
                        <button className="btn btn-sm btn-danger " onClick={() => removeFromBattle(el.instanceId)}>rimuovi</button>
                    </div>
                </div>
            </div>

        </>

    )
}