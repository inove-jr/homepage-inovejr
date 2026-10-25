import { Link } from "react-router-dom";
import logoUrl from '../assets/logo.png'


export default function NavBar() {
  return (
    <div>
      <nav className="bg-[#092435] w-full h-30 text-white flex items-center justify-center gap-[50vh]">
        <div>
          <img src={logoUrl} alt="" className="w-[12vh] h-[12vh] cursor-pointer"/>
        </div>

        <ul className="flex gap-10">
            <li>
                <Link to="/" className="hover:border-b-3 border-solid border-orange-500 py-3">QUEM SOMOS</Link>
            </li>
            <li>
                <Link to="/" className="hover:border-b-3 border-solid border-orange-500 py-3">SERVIÇOS</Link>
            </li>
            <li>
                <Link to="/" className="hover:border-b-3 border-solid border-orange-500 py-3">CONTATO</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}