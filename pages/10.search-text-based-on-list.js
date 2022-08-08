import { useState, useEffect } from "react"
const people = [
    "Shashi Koshy",
    "Dhriti Taneja",
    "Dipa Mishra"
];
export default function TestName() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const result = people.filter((person) => person.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResult(result)
        console.log(result);

    }, [searchTerm])

    // console.log(searchTerm);


    return (
        <>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />

            <ul>
                {searchResult.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

        </>
    )
}
