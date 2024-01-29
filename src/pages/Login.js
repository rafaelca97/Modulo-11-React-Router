import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import checkCredentials from '../services/AuthService';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const isValidCredentials = checkCredentials(email, password);

    if (isValidCredentials) {
      navigate('/welcome');
    } else {
      alert('Credenciales incorrectas');
    }
  }
    

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}