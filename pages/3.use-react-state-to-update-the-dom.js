import { useState } from "react"

export default function TestName() {
    const [search, setsearch] = useState()
    return (
        <>
            <h2>Update Data from an input</h2>

            <div className="input-display">
                Seached Keyword: <b>{search}</b>
            </div>
            <br />
            <div className="inputs">
                <input type="text"
                    value={search}
                    placeholder="Search Here"
                    onChange={(e) => setsearch(e.target.value)}
                />
            </div>
        </>
    )
}
