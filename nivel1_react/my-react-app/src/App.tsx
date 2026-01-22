function App() {
  return (
    <div className="p-4">
      <div className="border p-4 rounded">
        <h2 className="text-lg font-bold">
          Título de la tarjeta
        </h2>

        <p className="text-sm mt-2">
          Descripción corta de la tarjeta.
        </p>

        <button className="mt-3 text-blue-600 hover:underline">
          Ver más
        </button>
      </div>
    </div>
  );
}

export default App;
