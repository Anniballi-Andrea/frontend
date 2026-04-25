import { useInitiative } from "../context/InitiativeContext";

export default function RoundComponent() {
    const { nextPlayer, round } = useInitiative();

    return (
        <>
            <div className="d-flex justify-content-center align-items-center color_round">
                <span className="fw-bold fs-5 me-1">Round:</span><span className="fw-bold fs-5"> {round}</span>
            </div>
            {/* indicatore round*/}
            <div className="d-flex justify-content-around mb-4">
                <div>
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#resetRound`}>
                        Reset
                    </button>
                </div>
                {/* bottone per il reset iniziativa*/}
                <div>
                    <button
                        className="btn btn-warning"
                        type="button"
                        onClick={nextPlayer}>
                        next
                    </button>
                </div>
                {/* bottone per avanzamento round*/}
            </div>
        </>
    )
}