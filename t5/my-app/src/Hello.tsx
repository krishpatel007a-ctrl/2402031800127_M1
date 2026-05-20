

function Hello() {

   
  
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

    const handleMouseover = () => console.log("Hovering")
    const handleDoubleclick = () => console.log("Double-clicked")
      
    const name = "Krish"
    const name2 = "Patel"

    return (
        <>
         <h1>Hello {getname(name)}</h1>
         <h2>Bye {getname(name2)}</h2>

         <p onMouseOver={handleMouseover} onDoubleClick={handleDoubleclick}>Hover or double-click me!</p>



            <button onClick={handleclick}>Click Me</button>
            <button onClick={()=>alert("Button Clicked")}>Say Hello</button>
            <br />
            <input type="text" onChange={handlechange} placeholder="Type Something"/>
        </>
    )
}

export default Hello