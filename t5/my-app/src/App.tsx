import reactlog from './assets/react.svg'


import Hello from './Hello'
import Bye from './Bye'
function App() {
  

  return (
  <>
    <h1>My App</h1>
    <Hello />
    <img src={reactlog} width={200} />
    <Bye />
  </> 
  )
}

export default App
