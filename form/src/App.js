import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [formData, setFormData] = useState({ name: '', email: '', city: '', contact: '', country: '' });
  const [users, setUsers] = useState([]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('http://backend:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    fetchUsers();
  };

  const fetchUsers = async () => {
    const res = await fetch('http://backend:5000/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'city', 'contact', 'country'].map(field => (
          <input key={field} name={field} placeholder={field} onChange={handleChange} />
        ))}
        <button type="submit">Submit</button>
      </form>
      <ul>
        {users.map((u, i) => <li key={i}>{u.name} - {u.email}</li>)}
      </ul>
    </div>
  );
}

export default App;
