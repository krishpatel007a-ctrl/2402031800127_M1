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
import UncontrolledForm from './UncontrolledForm'
import BasicValidationForm from './BasicValidationForm'
import Todo from './Todo'
import First from './First'

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
    <UncontrolledForm />
    <BasicValidationForm />
    <Todo />
    <First />
  </> 
  )
}

export default App
