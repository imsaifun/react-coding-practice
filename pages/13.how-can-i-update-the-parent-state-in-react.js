import { useState, useEffect } from "react"
export default function TestName() {

  const [text, setText] = useState("Click Me !")

  const handleUpdate = (newText) => {
    setText(newText)
  }
  return (
    <>
      <Child text={text} handleUpdate={handleUpdate} />

    </>
  )
}

const Child = ({text, handleUpdate}) => {
  return (
    <>
      <button onClick={()=>handleUpdate("Parent State Changed")}>{text}</button>
    </>
  )
}
