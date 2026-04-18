
import { useEffect } from "react";
import FormGetMoster from "../components/FormGetMonster";
import { useMonster } from "../context/MonsterContext";
import MonsterCard from "../components/MonsterCard";
import FormInitiative from "../components/FormInitiative";



export default function Home() {
    const { battle } = useMonster();





    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 mt-4">
                        <div className="text-center">
                            <h5>inserisci giocatori e nemici</h5>
                        </div>
                        <FormInitiative />
                    </div>
                    <div className="col-8 mt-4">
                        <div className="text-center">
                            <h5>Aggiungi nemici</h5>
                        </div>
                        <FormGetMoster />
                        <div className="row">
                            {
                                battle.length > 0 ? (battle.map((el, i) => (
                                    <div key={el.instanceId} className="col-3 mt-3">
                                        <MonsterCard el={el} />
                                    </div>

                                ))
                                ) : (<div className="col text-center mt-3">
                                    <p>per iniziare scegli un mostro</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}