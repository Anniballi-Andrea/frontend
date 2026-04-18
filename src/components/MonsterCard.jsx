
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
                        <input
                            type="number"
                            value={inputDanno}
                            onChange={(e) => setInputDanno(e.target.value)}
                        />
                        <button type="submit">Danneggia</button>
                    </form>
                    <form onSubmit={handleCura}>
                        <input
                            type="number"
                            value={inputCura}
                            onChange={(e) => setInputCura(e.target.value)}
                        />
                        <button type="submit">Cura</button>
                    </form>


                    <button onClick={() => removeFromBattle(el.instanceId)}>rimuovi</button>
                </div>
            </div>

        </>

    )
}