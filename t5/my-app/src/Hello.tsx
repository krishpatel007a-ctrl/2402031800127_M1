import './App.css'

function Hello({name="Krish", age=20 ,city="Ahmedabad" , hobbies=["Coding", "Traveling", "Cooking"]}) {

   
    const getname = (name: string) => {
        return name 
    }

    const handleclick = () => {
        alert("Button Clicked")
    }

    const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console. clear()
        console.log(event.target.value)
    }

    const fruits = ["Apple", "Banana", "Cherry"]
     const isLoggedIn = true
     let message;

     if(isLoggedIn){
        message = <h1>Welcome, {getname(name)}!</h1>
     } else {
        message = <h1>Please log in to continue.</h1>
     }

     const isVisible = true;

    return (
        <>
         <h1>Hello {getname(name)}</h1>

          
          <h3>Fruits:</h3>
          <ul>
            {fruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
              
            ))}
          </ul>

            <button onClick={handleclick}>Click Me</button>
            <button onClick={()=>alert("Button Clicked")}>Say Hello</button>
            <br />
            <input type="text" onChange={handlechange} placeholder="Type Something"/>
            <p>{message}</p>
            {isVisible ? <p className="visible">This is a conditional message.</p> : <p className="unvisible">This is a conditional message.</p>}
            <p>Hobbies: {hobbies.join(", ")}</p>
            <p>City: {city}</p>
            <p>Age: {age}</p>
           
        </>
    )
}

export default Hello