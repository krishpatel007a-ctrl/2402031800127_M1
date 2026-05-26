import reactlogo from './assets/react.svg';
import Hello from './Hello';
import Bye from './Bye';
import Counter from './Counter';
import ToggleText from './ToggleText';
import UserProfile from './UserProfile';
import Student from './Student';
import SimpleForm from './SimpleForm';
import MultiInputForm from './MultiInputForm';
import AdvancedForm from './AdvancedForm';
import UncontrolledForm from './UncontrolledForm';
import BasicValidationForm from './BasicValidationForm';
import Todo from './Todo';
import First from './First';
import Timer from './Timer';
import WindowSizeTracker from './WindowSizeTracker';
import Users from './Users';

function App() {
    const hobbies = ['Coding', 'Traveling', 'Cooking'];

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>
                My App
            </h1>

            <Hello
                name="Krish"
                age={20}
                city="Ahmedabad"
                hobbies={hobbies}
            />

            {/* Center React Image */}
            <div style={{ textAlign: 'center' }}>
                <img
                    src={reactlogo}
                    width={100}
                    alt="React Logo"
                />
            </div>

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
            <Timer />
            <WindowSizeTracker />
            <Users />
        </>
    );
}

export default App;