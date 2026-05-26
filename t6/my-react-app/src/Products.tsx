import { useNavigate } from "react-router-dom"

export default function Products() {
  const navigate = useNavigate()
    const goToLaptop = () => {
      navigate("/laptop");
    };
  return (
    <div>
      <h1>Products Page</h1>
        <p>This is the products page.</p>
        <button onClick={goToLaptop}>Go to Laptop</button>
    </div>
  );
}