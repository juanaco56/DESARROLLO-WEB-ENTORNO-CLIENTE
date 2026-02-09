import { useState } from 'react';


function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.length < 7) {
      setUsernameError('El username debe tener al menos 7 caracteres');
    } else {
      setUsernameError('');
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes('@') || !value.includes('.')) {
      setEmailError('El email debe contener @ y .');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado correctamente');
  };

  const hasErrors = usernameError || emailError || passwordError;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Username:
        <input type="text" value={username} onChange={handleUsername} />
        <p className="error">{usernameError}</p>
      </div>

      <div>
        Email:
        <input type="text" value={email} onChange={handleEmail} />
        <p className="error">{emailError}</p>
      </div>

      <div>
        Password:
        <input type="password" value={password} onChange={handlePassword} />
        <p className="error">{passwordError}</p>
      </div>

      <button type="submit" disabled={hasErrors}>
        Submit
      </button>
    </form>
  );
}

export default App;
