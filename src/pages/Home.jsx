

import FormGetMoster from "../components/FormGetMonster";
import { useMonster } from "../context/MonsterContext";
import FormInitiative from "../components/FormInitiative";
import InitiativeTable from "../components/InitiativeTable";
import { useInitiative } from "../context/InitiativeContext";
import EncounterCard from "../components/EncounterCard";
import Modal from "../components/Modal";
import RoundComponent from "../components/RoundComponent";




export default function Home() {
    const { battle } = useMonster();
    const { finalInitiative, resetInitiative, } = useInitiative();


    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-around ">
                    <div className="col-4 mt-4 background_custom border_r_none border_l_none border_radius_left p-3">
                        <div className="text-center mt-3">
                            <h5>inserisci giocatori e nemici</h5>
                        </div>
                        {/*titolo */}
                        <FormInitiative />
                        <div className="row mt-4 background_custom initiative_container ">
                            <div className="col-12 " >{finalInitiative.length > 0 ?
                                <>
                                    <InitiativeTable />

                                </>
                                :
                                <div className="col text-center mt-3">
                                    <p>inserisci i giocatori</p>
                                </div>
                                //alternativa
                            }
                                <RoundComponent />
                            </div>
                        </div>
                        {/* tabella iniziativa */}
                    </div>
                    {/* lato destro con sistema iniziatva */}

                    <div className="col-8 mt-4 background_custom border_r_none border_l_none border_radius_right p-3">
                        <div className="text-center mt-3">
                            <h5>Aggiungi nemici</h5>
                        </div>
                        <FormGetMoster />
                        <div className="row">
                            {
                                battle.length > 0 ? (battle.map((el, i) => (
                                    <div key={el.instanceId} className="col-md-4 col-lg-3 mt-3 mb-5">
                                        <EncounterCard el={el} i={i} />
                                    </div>

                                ))
                                ) : (<div className="col text-center mt-3">
                                    <p>per iniziare inserisci un mostro</p>
                                </div>)
                            }
                            {/* */}
                        </div>
                        {/*card dell'encounter */}
                    </div>
                    {/*lato sinistro con sistema encounter */}
                </div>
            </div>
            <Modal confirm={resetInitiative} id={`resetRound`} />
        </>
    )
}