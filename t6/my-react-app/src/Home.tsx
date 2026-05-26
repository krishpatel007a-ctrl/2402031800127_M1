import { useNavigate } from "react-router-dom"


export default function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <button onClick={goToAbout}>Go to About Page</button>
       
    </div>
  )
}