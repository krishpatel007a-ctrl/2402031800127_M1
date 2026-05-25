import { useState } from 'react'
import type { FormEvent } from 'react'

function MultiInputForm() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")

     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form submitted")
        console.log("Name:", name)
        console.log("Age:", age)
        console.log("City:", city)
    }

    // Removed unused handleInputChange to avoid unused variable warning
        
    return (
        <form onSubmit={handleSubmit}>
            <h2>Multi Input Form</h2>

           <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            </label>
            <br />
            <label>
                Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
            </label>
            <br />
            <label>
                City:
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city" />
            </label>
            <br />
            <button type="submit">Submit</button>
            <hr />
        </form>
    )
}

export default MultiInputForm