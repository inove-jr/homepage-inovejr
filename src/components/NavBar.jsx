import { Link } from "react-router-dom";
import logoUrl from '../assets/logo.png'


export default function NavBar() {
  return (
    <div>
      <nav className="
          bg-[#092435]
          w-full
          h-30
          flex
          items-center
          justify-center
          text-white
          gap-[5vh]

          sm:bg-[#092435] 
          sm:w-full 
          sm:h-30 
          sm:text-white 
          sm:flex 
          sm:items-center 
          sm:justify-center 
          sm:gap-[50vh]       
          ">
        <div>
          <img src={logoUrl} alt="" className=" w-[8vh] h-[8vh] cursor-pointer sm:w-[12vh] sm:h-[12vh] sm:cursor-pointer"/>
        </div>

        <ul className="flex gap-4 text-[0.6rem] sm:text-[0.9rem] sm:flex sm:gap-10">
            <li>
                <Link to="/" className="
                  hover:border-b-3 
                  border-solid 
                  border-orange-500 
                  py-3 

                  sm:hover:border-b-3 
                  sm:border-solid 
                  sm:border-orange-500 
                  sm:py-3">
                    QUEM SOMOS
                </Link>
            </li>
            <li>
                <Link to="/" className="
                hover:border-b-3 
                border-solid 
                border-orange-500 
                py-3 

                sm:hover:border-b-3 
                sm:border-solid 
                sm:border-orange-500 
                sm:py-3">
                  SERVIÇOS
                </Link>
            </li>
            <li>
                <Link to="/" className="
                hover:border-b-3 
                border-solid 
                border-orange-500 
                py-3 
                
                sm:hover:border-b-3 
                sm:border-solid 
                sm:border-orange-500 
                sm:py-3">CONTATO</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}