
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const InitiativeContext = createContext();

export function InitiativeProvider({ children }) {
    const [playerName, setPlayerName] = useState("")
    const [playerInit, setPlayerInit] = useState("")
    const [playerDex, setPlayerDex] = useState("")
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

        const randomNumber = Math.floor(Math.random() * 100)
        const timeStamp = Date.now()

        const player = {
            id: `${timeStamp}${randomNumber}`,
            name: playerName,
            initiative: playerInit,
            dex: playerDex
        }

        setInitiative([...initiative, player]);

        setPlayerDex("")
        setPlayerName("")
        setPlayerInit("")


    }







    const updateInitName = (id, name) => {
        setInitiative((prev) => prev.map((el) => (el.id === id ? { ...el, name: name } : el))
        );
    }

    const updateInit = (id, init) => {
        const value = init === "" ? 0 : Number(init);
        setInitiative((prev) => prev.map((el) => (el.id === id ? { ...el, initiative: value } : el))
        );
    }
    const updateDex = (id, dex) => {
        const value = dex === "" ? 0 : Number(dex);
        setInitiative((prev) => prev.map((el) => (el.id === id ? { ...el, dex: value } : el))
        );
    }




    const deleteFromInit = (id) => {
        console.log("sto facendo qualcosa")

        setInitiative((prev) => prev.filter((el) => el.id !== id))


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
                deleteFromInit
            }}
        >
            {children}
        </InitiativeContext.Provider>
    );

}

export function useInitiative() {
    return useContext(InitiativeContext);
}