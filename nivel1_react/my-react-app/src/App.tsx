import { useState } from 'react';

export default function App() {
    const [user, setUser] = useState(true);
    const [newEmails, setNewEmails] = useState(0);

    const button = user
        ? <button onClick={() => setUser(true)}>Logout</button>
        : <button onClick={() => setUser({ name: 'Antoñico' })}>Login</button>;

    return (
        <>
            <h1>Nivel 5: Renderizado condicional</h1>
            {button}

            <p>React Tema 5. DAW2</p>

            {user ? (
                <p>Bienvenido, {user.name}.</p>
            ) : (
                <p>Inicia sesión para continuar.</p>
            )}

            <hr />

            <button onClick={() => setNewEmails((n) => n + 1)}>+1 email</button>
            <button onClick={() => setNewEmails(0)}>Reset</button>

            {newEmails > 0 && (
                <h2>Tienes {newEmails} correos nuevos.</h2>
            )}
        </>
    );
}
