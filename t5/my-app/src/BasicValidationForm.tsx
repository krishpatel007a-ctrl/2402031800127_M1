import { useState } from 'react';

function BasicValidationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0 && name && email) {
      console.log({ name, email });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Validation Form</h2>
      <label>
        Name:
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      <button type="submit">Submit</button>
      <hr />
    </form>
  );
}

export default BasicValidationForm;