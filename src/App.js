import { useState } from "react";
import Login from "./Login";
import ProductPage from "./ProductPage";

function App() {

  const [logged, setLogged] = useState(false);

  if (!logged) {
    return <Login setLogged={setLogged} />;
  }

  return <ProductPage />;
}

export default App;