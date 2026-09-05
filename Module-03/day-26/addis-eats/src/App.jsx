import Menu from "./component/Main/Menu/Menu.jsx";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Addis Eats</h1>
        <p>Order your favorite Ethiopian dishes</p>
      </header>

      <main>
        <Menu />
      </main>
    </div>
  );
}

export default App;