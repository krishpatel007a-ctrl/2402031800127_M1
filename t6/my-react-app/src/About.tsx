import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
       <button onClick={goToContact}>Go to Contact Page</button>
    </div>
  )
}