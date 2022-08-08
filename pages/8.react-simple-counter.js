import { useState } from "react"
export default function TestName() {
    const [counter, setCounter] = useState(0)
    const handleClick = (type) => {
        if (type === "increment") {
            setCounter(counter + 1)
        } else {
            setCounter(counter - 1)
        }
    }
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={() => handleClick("increment")}>Increment</button>
            <button onClick={() => handleClick("decrement")}>Increment</button>
        </>
    )
}
