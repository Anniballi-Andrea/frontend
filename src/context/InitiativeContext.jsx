
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const InitiativeContext = createContext();

export function InitiativeProvider({ children }) {
    const [playerName, setPlayerName] = useState("")
    const [playerInit, setPlayerInit] = useState("")
    const [playerDex, setPlayerDex] = useState("")
    const [turnOn, setTurnOn] = useState(0)
    const [round, setRound] = useState(0)
    const [initiative, setInitiative] = useState(() => {
        const savedInitiative = localStorage.getItem("battle-initiative");
        return savedInitiative ? JSON.parse(savedInitiative) : []
    });

    useEffect(() => {
        localStorage.setItem("battle-initiative", JSON.stringify(initiative));
    }, [initiative]);

    const finalInitiative = [...initiative].sort((a, b) => {
        if (Number(b.initiative) !== Number(a.initiative)) {
            return Number(b.initiative) - Number(a.initiative);
        }
        return Number(b.dex) - Number(a.dex);
    })

    const addInitiative = (e) => {

        e.preventDefault()
        let init = playerInit
        let dex = playerDex


        const randomNumber = Math.floor(Math.random() * 100)
        const timeStamp = Date.now()

        const player = {
            id: `${timeStamp}${randomNumber}`,
            name: playerName,
            initiative: init,
            dex: dex
        }

        if (player.initiative == "") {
            player.initiative = 0
        }
        if (player.dex == "") {
            player.dex = 0
        }

        setInitiative([...initiative, player]);

        setPlayerDex("")
        setPlayerName("")
        setPlayerInit("")


    }

    useEffect(() => { console.log(initiative) }, [initiative])

    const log = (el) => console.log(el)


    const updateInitName = (id, name) => {
        setInitiative((prev) => prev.map((el) => (el.id === id ? { ...el, name: name } : el))
        );
    }

    const updateInit = (id, init) => {
        const value = Number(init);
        setInitiative((prev) => prev.map((el) => (el.id === id ? { ...el, initiative: value } : el))
        );
    }
    const updateDex = (id, dex) => {
        const value = Number(dex);
        setInitiative((prev) => prev.map((el) => (el.id === id ? { ...el, dex: value } : el))
        );
    }


    const deleteFromInit = (id) => {
        setInitiative((prev) => prev.filter((el) => el.id !== id))


    }

    const nextPlayer = () => {
        if (turnOn == finalInitiative.length - 1) {
            setTurnOn(0)
            setRound(round + 1)
        } else {
            setTurnOn(turnOn + 1)
        }
    }

    function resetInitiative() {
        const newInit = []
        initiative.map((el) => {
            const newElement = {
                id: el.id,
                name: el.name,
                initiative: "",
                dex: el.dex
            }
            newInit.push(newElement)
        }

        )
        setRound(0)
        setTurnOn(0)
        setInitiative(newInit)
    }




    return (
        <InitiativeContext.Provider
            value={{
                initiative,
                setInitiative,
                playerName,
                setPlayerName,
                playerInit,
                setPlayerInit,
                playerDex,
                setPlayerDex,
                addInitiative,
                finalInitiative,
                updateInitName,
                updateInit,
                updateDex,
                deleteFromInit,
                resetInitiative,
                nextPlayer,
                turnOn,
                setTurnOn,
                round,
                setRound
            }}
        >
            {children}
        </InitiativeContext.Provider>
    );

}

export function useInitiative() {
    return useContext(InitiativeContext);
}