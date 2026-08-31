import React from 'react'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";

import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Footer />
      <Main />

    </div>

  );
}

export default App;


