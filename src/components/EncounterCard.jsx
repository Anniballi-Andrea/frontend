
import { useState } from "react";
import { useMonster } from "../context/MonsterContext";
import Modal from "./Modal";
export default function EncounterCard({ el, i }) {

    const { removeFromBattle, applicaDanno, applicaCura, monsterText, setMonsterText, setBattle } = useMonster();

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

    const cangeMonsterText = ((id, text) => {
        setBattle(prevBattle =>
            prevBattle.map(element =>
                element.instanceId === id ? { ...element, text: text } : element

            )
        )
    })

    return (
        <>
            <div className="card card_home">
                <div className="card-header text-center">
                    <div className="mb-2">
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
                <div className="card-body ">
                    <div className="d-flex align-items-center">
                        <form className="me-3" onSubmit={handleDanno}>
                            <div className=" input-group">
                                <input
                                    className="form-control"
                                    type="number"
                                    value={inputDanno}
                                    onChange={(e) => setInputDanno(e.target.value)}
                                    placeholder="danno"
                                />
                                <button className="btn btn-sm btn-warning" type="submit"><img src="/img/sword_icon.svg" alt="" /></button>
                            </div>
                        </form>
                        {/*input danno*/}
                        <form onSubmit={handleCura}>
                            <div className="input-group ">
                                <input
                                    className="form-control "
                                    type="number"
                                    value={inputCura}
                                    onChange={(e) => setInputCura(e.target.value)}
                                    placeholder="cura"
                                />
                                <button className="btn btn-sm btn-success text-dark" type="submit"><i className="bi bi-heart-fill"></i></button>
                            </div>
                        </form>
                        {/*input cura*/}
                    </div>
                    {/*input danno/cura */}
                    <div className="row row-cols-3 mt-3">
                        {el.strength <= 0 ? <div className="col">str: {el.strength}</div> : <div className="col">str: +{el.strength}</div>}
                        {el.dexterity <= 0 ? <div className="col">dex: {el.dexterity}</div> : <div className="col">dex: +{el.dexterity}</div>}
                        {el.constitution <= 0 ? <div className="col">cons:  {el.constitution}</div> : <div className="col">cons: +{el.constitution}</div>}
                        {el.intelligence <= 0 ? <div className="col">int:  {el.intelligence}</div> : <div className="col">int: +{el.intelligence}</div>}
                        {el.wisdom <= 0 ? <div className="col">sag:  {el.wisdom}</div> : <div className="col">sag: +{el.wisdom}</div>}
                        {el.charisma <= 0 ? <div className="col">car:  {el.charisma}</div> : <div className="col">car: +{el.charisma}</div>}
                    </div>
                    {/*stats*/}
                    <div className="row row-cols-1">
                        {el.savingThrow && <div className="col border_t_custom mt-2 pt-2">tiri salvezza: {el.savingThrow}</div>}
                        {el.skills && <div className="col border_t_custom mt-2 pt-2" >tiri abilità: {el.skills}</div>}
                        {el.resistence && <div className="col border_t_custom mt-2 pt-2">resistenze: {el.resistence}</div>}
                        {el.immunity && <div className="col border_t_custom mt-2 pt-2">immunità: {el.immunity}</div>}

                    </div>
                    {/*abilità e resistenze*/}
                    <div className="row row-cols-1 mt-3">
                        <textarea
                            name="malus"
                            placeholder="testo..."
                            value={el.text}
                            onChange={(e) => cangeMonsterText(el.instanceId, e.target.value)}
                        >
                        </textarea>
                    </div>
                    {/*text area*/}
                    <div className="mt-2 d-flex justify-content-center mt-3">
                        <button type="button" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target={`#encounterDelete${el.id}${i}`}>
                            Elimina
                        </button>
                        <Modal confirm={removeFromBattle} el={el.instanceId} id={`encounterDelete${el.id}${i}`} />
                    </div>
                    {/*elimina*/}
                </div>
            </div>

        </>

    )
}