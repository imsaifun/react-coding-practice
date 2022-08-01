import { useState } from "react"

export default function TestName() {
    const [phase, setPhase] = useState()
    if (phase === "Hello React") {
        alert("You may pass!");
    }
    return (
        <>
            <h2>Whats the secret phrase?</h2>



            <div className="inputs">
                <input type="text"
                    value={phase}
                    placeholder="Enter a secret"
                    onChange={(e) => setPhase(e.target.value)}
                />
            </div>

            <p>
                Hint: Its <strong>Hello React</strong>
            </p>

        </>
    )
}
