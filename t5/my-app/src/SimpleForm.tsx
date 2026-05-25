import React, { useState } from "react"

function SimpleForm() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form submitted")
        console.log("Name:", name)
        console.log("Age:", age)
        console.log("City:", city)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>React Form Example</h2>

            <label>
                Name:
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            
            <label>
                Age:
                <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <br />

            <label>
                City:
                <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </label>
            <br />

            <button type="submit">Submit</button>
            <hr />
        </form>
    )
}

export default SimpleForm