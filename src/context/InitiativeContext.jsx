
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const InitiativeContext = createContext();

export function InitiativeProvider({ children }) {
    const [initiative, setInitiative] = useState([])
    const [playerName, setPlayerName] = useState("")
    const [playerInit, setPlayerInit] = useState("")
    const [playerDex, setPlayerDex] = useState("")

    const addInitiative = (e) => {
        e.preventDefault()

        const player = {
            name: playerName,
            initiative: playerInit,
            dex: playerDex
        }

        setInitiative([...initiative, player]);
        setPlayerDex("")
        setPlayerName("")
        setPlayerInit("")


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
                addInitiative
            }}
        >
            {children}
        </InitiativeContext.Provider>
    );

}

export function useInitiative() {
    return useContext(InitiativeContext);
}