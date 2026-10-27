import { Link } from "react-router-dom";
import FundoNavBar from '../assets/lampada.png'

export default function Body(){
    return(
        <div>   
            <div className="absolute bg-[#092435] w-full h-screen flex items-center justify-center overflow-hidden 
                            sm:absolute sm:bg-[#092435] sm:w-full sm:h-screen sm:flex sm:items-center sm:justify-center sm:overflow-hidden"> 
                <img src={ FundoNavBar } alt="" className="h-[80vh] w-auto object-contain opacity-90 mix-blend-lighten pointer-events-none select-none
                            sm:h-[80vh] sm:w-auto sm:object-contain sm:absolute sm:opacity-90 sm:mix-blend-lighten sm:pointer-events-none sm:select-none"/>
                
                <div className=" flex flex-col justify-center items-center gap-[50vh] sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-[40vh] ">
                    <div className=" flex flex-col bg-orange-500 h-[60vh] w-[40vh] sm:flex sm:flex-col sm:bg-orange-500 sm:h-[60vh] sm:w-[40vh] sm:gap-[5vh]">
                        <h1 className="text-white text-[1.7rem] sm:text-white sm:text-[2rem]">Inove o seu negócio</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius sunt quasi sapiente sit. Sequi provident ab numquam iste praesentium maiores ea. Fugit provident delectus maxime voluptate voluptatem voluptates enim?</p>
                        <a href="#" className="sm:text-white">Contate-nos</a>
                    </div>
                    <div className="sm:text-white sm:bg-amber-500 sm:h-[10vh] sm:w-[10vh]">
                            <span>A</span>
                            <span>A</span>
                            <span>A</span>
                            <span>A</span>   
                    </div>
                </div>
                
            </div>
        </div>
    );
}