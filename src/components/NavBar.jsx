import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/">Quem Somos</Link>
            </li>
            <li>
                <Link to="/">Servicos</Link>
            </li>
            <li>
                <Link to="/">Contato</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}