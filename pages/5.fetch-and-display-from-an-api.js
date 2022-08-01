import { useState, useEffect } from "react"

const githubUrl = "https://api.github.com/users/imsaifun"


export default function TestName() {
    const [data, setData] = useState({})

    useEffect(() => {
        getGitHubUserWithFetch()
    }, [])

    const getGitHubUserWithFetch = async () => {
        const response = await fetch(githubUrl);
        const jsonData = await response.json();
        setData(jsonData)
    }

    return (
        <>
            <header className="App-header">
                <h2>GitHub User Data</h2>
            </header>
            <div className="user-container">
                <h5 className="info-item">{data.name}</h5>
            </div>

        </>
    )
}
