import './index.css'

function App() {
    const users = [
      { id: 1, name: 'Jose', role: 'WebDeveloper' },
      { id: 2, name: 'Estefanía', role: 'WebDesigner' },
      { id: 3, name: 'Rubén', role: 'TeamLeader' },
      { id: 4, name: 'Antoñico', role: 'ProfesorDAW2'},
      { id: 5, name: 'Juanaco', role: 'AlumnodeAntoñico'},
      { id: 6, name: 'Juanky', role: 'AlumnodeAntoñico'},
    ]
    return (
    <>
      <p>Lista de usuarios activos:</p>
      <ul>
      {users.map(function (user) {
      return (
      <li key={user.id} className={user.role}>
      {user.name} — {user.role}
      </li>
    )
    })}
    </ul>
    </>
  )
}

export default App