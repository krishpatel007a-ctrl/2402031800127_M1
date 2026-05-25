import { useState } from 'react'

function AdvancedForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [country, setCountry] = useState("")
  const [subscribe, setSubscribe] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Password:", password)
    console.log("Country:", country)
    console.log("Subscribe:", subscribe)
  }

  return (
    <div>
      <h2>Advanced Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
            <label>
            Country:
            <select name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
            </select>
        </label>
        <br />
        <label>
            <input type="checkbox" name="subscribe" checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} />
            Subscribe to newsletter
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <hr />
      </form>
    </div>
  );
}

export default AdvancedForm;