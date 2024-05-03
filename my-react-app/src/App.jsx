import "./App.css";
import Header from "./components/Header";
import NavbarInterne from "./components/NavbarInterne";
import NavbarPages from "./components/NavbarPages";

function App() {
  return (
    <>
      <NavbarPages/>
      <Header />
      <NavbarInterne/>
    </>
  );
}

export default App;
