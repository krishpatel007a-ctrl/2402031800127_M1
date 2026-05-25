import { useState } from 'react'

export default function ToggleText() {
  const [isHello, setIsHello] = useState(false)

  return (
    <div>
      <h1>{isHello ? "Hello" : "Bye"}</h1>
      <button onClick={() => setIsHello(!isHello)}>Toggle</button>
      <hr />
    </div>
  )
}