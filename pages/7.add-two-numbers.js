import { useState, useEffect } from "react"
export default function TestName() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(number1 + number2);

  const handleClick = () => {
    setTotal(number1 + number2)
  }

  return (
    <>
      <input type="text" value={number1} onChange={(e) => setNumber1(+e.target.value)} />
      <input type="text" value={number2} onChange={(e) => setNumber2(+e.target.value)} />

      <button onClick={handleClick}>Submit</button>
      {total && total}

    </>
  )
}
