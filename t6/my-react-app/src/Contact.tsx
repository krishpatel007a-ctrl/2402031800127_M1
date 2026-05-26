import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const goToUsers = () => {
    navigate("/users");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the contact page.</p>
       <button onClick={goToUsers}>Go to User Page</button>
    </div>
  )
}