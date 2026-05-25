import { useState } from 'react'

export default function UserProfile() {
  const [name, setName] = useState("Krish")
  const [age, setAge] = useState(20)
  const [city, setCity] = useState("Ahmedabad")

  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>City: {city}</h3>
      <button onClick={() => setName("Dhruv")}>Change Name</button>
      <button onClick={() => setAge(21)}>Change Age</button>
      <button onClick={() => setCity("Mumbai")}>Change City</button>
    </div>
  )
}