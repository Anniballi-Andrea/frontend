
import { useEffect } from "react";
import FormGetMoster from "../components/FormGetMonster";
import { useMonster } from "../context/MonsterContext";
import MonsterCard from "../components/MonsterCard";



export default function Home() {
    const { battle, removeFromBattle } = useMonster();



    useEffect(() => {
        console.log("Stato Battle aggiornato:", battle);
    }, [battle]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">
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