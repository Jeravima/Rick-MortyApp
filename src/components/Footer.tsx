
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-5xl mx-auto p-6 text-center">
        <h3 className="text-lg font-semibold">Rick and Morty App</h3>

        <p className="text-sm text-gray-400 mt-2">
          Aplicación hecha con React y la API de Rick and Morty
        </p>

        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
