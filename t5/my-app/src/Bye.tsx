import styles from "./Bye.module.css"

function Bye() {

  

    const users = [
        {
            name: "Krish Patel",
            age: 20,
            city: "Los Angeles"
        },
        {
            name: "Dhruv Patel",
            age: 22,
            city: "New York"
        },
        {
            name: "Rudra Patel",
            age: 20,
            city: "Chicago"
        }
    ]
    const name2 = "Patel"
const getname = (name: string) => {
        return name 
    }


    return (
        <div>
            <h2 className={styles.test}>Bye Component</h2>

            {users.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>City: {user.city}</p>
                    <hr />
                </div>
            ))}
         <h2>Bye {getname(name2)}</h2>
         

        </div>
    )
}

export default Bye