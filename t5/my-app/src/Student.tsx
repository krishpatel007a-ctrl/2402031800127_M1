

import { useState } from 'react';

function Student() {

    const [students, setStudents] = useState([
        { name: "Krish", age: 20, city: "Los Angeles" },
        { name: "Dhruv", age: 21, city: "New York" },
        { name: "Rudra", age: 22, city: "Chicago" }
    ])

    const changeCity = () => {
        setStudents([...students.map((student, index) => 
            index === 0 ? {...student, city: "Ahmedabad"} : student
        )])
    }

    return (
        <div>
            <h2>Name : {students[0].name}</h2>
            <h2>Age : {students[0].age}</h2>
            <h2>City : {students[0].city}</h2>
            <button onClick={changeCity}>Change City</button>
            <hr />
        </div>
    )
}

export default Student 