import { Link } from "react-router-dom";
import FundoNavBar from '../assets/lampada.png'
import data from "../data.json"

export default function Body(){
    return(
        <div>   
            <div className="absolute bg-[#092435] w-full h-screen flex items-center justify-center overflow-hidden sm:w-full sm:h-screen"> 
                <img src={ FundoNavBar } alt="" className="h-screen w-full object-contain opacity-90 mix-blend-lighten pointer-events-none select-none
                            sm:h-[80vh] sm:w-auto sm:object-contain sm:absolute sm:opacity-90 sm:mix-blend-lighten sm:pointer-events-none sm:select-none"/>
                
                <div className="absolute flex flex-col justify-center items-center text-center text-white gap-10 sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-100 ">
                    <div className=" flex flex-col items-center justify-center bg-orange-500 h-auto w-70 gap-10 sm:h-auto sm:w-70 sm:gap-10">
                        <h1 className="text-white text-[1.7rem] text-center sm:text-[2rem]">Inove o seu negócio</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius sunt quasi sapiente sit. Sequi provident ab numquam iste praesentium maiores ea. Fugit provident delectus maxime voluptate voluptatem voluptates enim?</p>
                        <a href="#" className="sm:text-white">Contate-nos</a>
                    </div>
                    <div className="text-white flex h-auto flex-row gap-10 justify-center items-center bg-amber-500 sm:h-auto sm:w-[10vh] sm:flex-col">
                            <a className="h-5 w-5 bg-blue-900 rounded-[50%] flex justify-center items-center">{data.redes_sociais[1].icone}</a>
                            <a className="h-5 w-5 bg-blue-900 rounded-[50%] flex justify-center items-center">A</a>
                            <a className="h-5 w-5 bg-blue-900 rounded-[50%] flex justify-center items-center">A</a>
                            <a className="h-5 w-5 bg-blue-900 rounded-[50%] flex justify-center items-center">A</a>   
                    </div>
                </div>
                
            </div>
        </div>
    );
}