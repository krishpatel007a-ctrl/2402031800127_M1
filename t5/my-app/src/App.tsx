import reactlog from './assets/react.svg'
import Hello from './Hello'
import Bye from './Bye'
import Counter from './Counter'
import ToggleText from './ToggleText'
import UserProfile from './UserProfile'
import Student from './Student'
import SimpleForm from './SimpleForm'
import MultiInputForm from './MultiInputForm'
import AdvancedForm from './AdvancedForm'

function App() {

    const hobbies = ["Coding", "Traveling", "Cooking"]
/*
  const isLoggedIn = true;
   if(isLoggedIn){
    return <Hello />
   } else {
    return <Bye />
   }
   */
  return (
  <>
    <h1>My App</h1>
    <Hello name="Krish" age={20} city="Ahmedabad" hobbies={hobbies} />
    <img src={reactlog} width={200} />
    <Bye />
    <Counter />
    <ToggleText />
    <UserProfile />
    <Student />
    <SimpleForm />
    <MultiInputForm />
    <AdvancedForm />
  </> 
  )
}

export default App
