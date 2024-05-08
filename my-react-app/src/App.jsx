import "./App.css";
import Header from "./components/Header";
import NavbarInterne from "./components/NavbarInterne";
import NavbarPages from "./components/NavbarPages";
import Presentation from "./components/Presentation";

function App() {
  return (
    <>
      <NavbarPages/>
      <Header />
      <NavbarInterne/>
      <Presentation/>
    </>
  );
}

export default App;
