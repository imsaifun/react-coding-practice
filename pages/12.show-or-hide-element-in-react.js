import { useState } from "react"
export default function TestName() {
  const [data, setData] = useState(true)
  const handleClick = () => {
    setData(!data)
  }
  return (
    <>
      <button onClick={handleClick}>Click</button>
      {data ? "Show" : "Hide"}
    </>
  )
}
