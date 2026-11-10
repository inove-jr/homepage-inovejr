import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"
import Body from "./components/Body"

export default function App() {
  return (
    <div>
      <NavBar />
      <Body />
      <Outlet />
    </div>
  );
}