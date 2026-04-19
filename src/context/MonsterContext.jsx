import axios from "axios"
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const MonsterContext = createContext();

export function MonsterProvider({ children }) {
    const [encounterNumb, setEncounterNumb] = useState("");
    const [monsterName, setMonsterName] = useState("");
    const [allMonsters, setAllMonsters] = useState([])





    //variabile per l'elenco dei nemici in battaglia salvata nel local storage
    const [battle, setBattle] = useState(() => {
        const savedMonsters = localStorage.getItem(`battle-monster`);
        return savedMonsters ? JSON.parse(savedMonsters) : []
    });

    //caricare nel local storage lo stato della battaglia ad ogni sua modifica
    useEffect(() => {
        localStorage.setItem(`battle-monster`, JSON.stringify(battle));
    }, [battle]);


    function getAllMonster() {
        axios
            .get("http://localhost:8080/api/monsters")
            .then((response) => {
                const data = response.data;
                setAllMonsters(data);
            })
            .catch((err) => console.error("errore:", err));
    }

    const getMonster = (e) => {
        e.preventDefault();

        axios
            .get(`http://localhost:8080/api/monsters/serchByName/${monsterName}`)
            .then((response) => {
                const data = response.data;
                const newBattle = [];
                const quantity = Number(encounterNumb)
                const timeStamp = Date.now()


                for (let index = 1; index <= quantity; index++) {

                    const randomNumber = Math.floor(Math.random() * 100)


                    const newId = `id-${timeStamp}-${randomNumber}-${index}`

                    if (battle.length == 0) {
                        const encounterInstance = {
                            ...data,
                            name: `${data.name} ${index}`,
                            status: `${data.lifePoint}`,
                            instanceId: newId
                        };
                        newBattle.push(encounterInstance);
                    } else {
                        const number = battle.length + index
                        const encounterInstance = {
                            ...data,
                            name: `${data.name} ${number}`,
                            status: `${data.lifePoint}`,
                            instanceId: newId
                        };
                        newBattle.push(encounterInstance);
                    }
                }
                setBattle([...battle, ...newBattle]);
                setEncounterNumb("")
                setMonsterName("")
            })
            .catch((err) => console.error("errore:", err));

    }

    const removeFromBattle = (id) => {
        setBattle((prev) => prev.filter((el) => el.instanceId !== id));
    };

    const applicaDanno = (id, danno) => {

        setBattle(prevBattle =>
            prevBattle.map(el => {
                if (el.instanceId === id) {
                    let newStatus = el.status - danno;
                    if (newStatus < 0) {
                        newStatus = 0;
                    };
                    return {
                        ...el, status: newStatus
                    };
                }
                return el;
            }
            )
        )
    }

    const applicaCura = (id, danno) => {
        setBattle(prevBattle =>
            prevBattle.map(el => {
                if (el.instanceId === id) {
                    let newStatus = el.status + danno;
                    if (newStatus > el.lifePoint) {
                        newStatus = el.lifePoint;
                    };
                    return {
                        ...el, status: newStatus
                    };
                }
                return el;
            }
            )
        )
    }

    useEffect(() => { getAllMonster() }, [])


    return (
        <MonsterContext.Provider
            value={{
                encounterNumb,
                setEncounterNumb,
                monsterName,
                setMonsterName,
                battle,
                setBattle,
                getMonster,
                removeFromBattle,
                applicaDanno,
                applicaCura,
                allMonsters
            }}
        >
            {children}
        </MonsterContext.Provider>
    );

}

export function useMonster() {
    return useContext(MonsterContext);
}