function App() {
  return (
    <>
      {/* Luego comenta una línea dentro del JSX usando: */}
      <h1>Nivel 1 de React desbloqueado</h1>
      <h2>Segundo encabezado pedido en el punto 6 o 7</h2>

      {/* Composición de componentes */}
      <ParentComponent />
    </>
  );
}

function ParentComponent() {
  return (
    <>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
    </>
  );
}

function UserComponent() {
  return <h2>User component</h2>;
}

function ProfileComponent() {
  return <h2>Profile component</h2>;
}

function FeedComponent() {
  return <h2>Feed component</h2>;
}

export default App;
