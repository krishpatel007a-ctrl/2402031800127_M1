import { useNavigate } from "react-router-dom";

export default function Phone() {
    const navigate = useNavigate();

    const goToLaptop = () => {
        navigate("/laptop");
    };

    return (
        <div>
            <h1>Phone List</h1>

            <ul>
                <li>iPhone 14 Pro Max</li>
                <li>Samsung Galaxy S23 Ultra</li>
                <li>Google Pixel 7 Pro</li>
                <li>OnePlus 11 Pro</li>
                <li>Sony Xperia 1 IV</li>
            </ul>

            <button onClick={goToLaptop}>
                Go to Laptop Page
            </button>
        </div>
    );
}