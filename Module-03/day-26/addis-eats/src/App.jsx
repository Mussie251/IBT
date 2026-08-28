import Header from "./component/Header/Header.jsx";
import Main from "./component/Main/Main.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Card from "./component/Card/Card.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <Card>
        <h2>Addis Eats Menu</h2>
        <p>Welcome to our delicious Ethiopian menu.</p>
      </Card>

      <Main />
      <Footer />
    </div>
  );
}

export default App;