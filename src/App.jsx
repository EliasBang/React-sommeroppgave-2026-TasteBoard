import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { FavoriteProvider } from "./context/FavoriteContext";
import "./App.css";

function App() {
  return (
    <FavoriteProvider>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </FavoriteProvider>
  );
}

export default App;
