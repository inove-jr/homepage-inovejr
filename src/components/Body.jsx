import { Link } from "react-router-dom";
import FundoNavBar from '../assets/lampada.png'

export default function Body(){
    return(
        <div>   
            <div className="relative bg-[#092435] w-full h-screen flex items-center justify-center overflow-hidden"> 
                <img src={ FundoNavBar } alt="" className="h-[80vh] w-auto object-contain opacity-90 mix-blend-lighten pointer-events-none select-none"/>
            </div>
        </div>
    );
}