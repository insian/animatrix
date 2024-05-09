import { theme } from "../global_components/data";
import sideframe from "../images/side_frame.png";
import world from "../images/world.png"
import ig from "../images/instagram.png";
import yt from "../images/youtube.png";
import right from "../images/right.png"
import { useEffect, useState } from "react";

function Home(){
    const [no, setNo] = useState(parseInt(localStorage.getItem("theme-no")));
    const len = theme.length;
    function handleOnClickIg(e){
        e.preventDefault();
        window.open("https://www.instagram.com/");
    }

    function handleOnClickYt(e){
        e.preventDefault();
        window.open("https://www.youtube.com/");
    }

    function onCickLeft(){
        let index = (((no-1)%len)+len)%len;
        setNo(index);
        localStorage.setItem("theme-no",index);
        document.getElementById("home-div").style.backgroundImage = `linear-gradient(to right, ${theme[index]["bg-color1"]} 0%, ${theme[index]["bg-color2"]} 100%)`;
        document.getElementById("side-frame-1").style.backgroundImage = `linear-gradient(to top, ${theme[index]["sd-color1"]} 0%, ${theme[index]["sd-color2"]} 100%)`;
        document.getElementById("side-frame-2").style.backgroundImage = `linear-gradient(to right, ${theme[index]["sd-color1"]} 0%, ${theme[index]["bg-color2"]} 100%)`;
        document.getElementById("bg-image").src = theme[index]["bg-image"];
        document.getElementById("image-1").src = theme[index]["image-1"];
        document.getElementById("image-2").src = theme[index]["image-2"];
        document.getElementById("image-3").src = theme[index]["image-3"];
    }

    function onCickRight(){
        let index = (no+1)%len;
        setNo(index);
        localStorage.setItem("theme-no", index); 
        document.getElementById("home-div").style.backgroundImage = `linear-gradient(to right, ${theme[index]["bg-color1"]} 0%, ${theme[index]["bg-color2"]} 100%)`; 
        document.getElementById("side-frame-1").style.backgroundImage = `linear-gradient(to top, ${theme[index]["sd-color1"]} 0%, ${theme[index]["sd-color2"]} 100%)`;
        document.getElementById("side-frame-2").style.backgroundImage = `linear-gradient(to right, ${theme[index]["sd-color1"]} 0%, ${theme[index]["bg-color2"]} 100%)`;
        document.getElementById("bg-image").src = theme[index]["bg-image"];
        document.getElementById("image-1").src = theme[index]["image-1"];
        document.getElementById("image-2").src = theme[index]["image-2"];
        document.getElementById("image-3").src = theme[index]["image-3"];
    }

    useEffect (()=>{
        document.getElementById("home-div").style.backgroundImage = `linear-gradient(to right, ${theme[no]["bg-color1"]} 0%, ${theme[no]["bg-color2"]} 100%)`;
        document.getElementById("side-frame-1").style.backgroundImage = `linear-gradient(to top, ${theme[no]["sd-color1"]} 0%, ${theme[no]["sd-color2"]} 100%)`;
        document.getElementById("side-frame-2").style.backgroundImage = `linear-gradient(to right, ${theme[no]["sd-color1"]} 0%, ${theme[no]["bg-color2"]} 100%)`;
        document.getElementById("bg-image").src = theme[no]["bg-image"];
        document.getElementById("image-1").src = theme[no]["image-1"];
        document.getElementById("image-2").src = theme[no]["image-2"];
        document.getElementById("image-3").src = theme[no]["image-3"];
    }) 

    return (
        <>
            <div id="home-div" className="h-screen pt-20 overflow-hidden" >
                <div className="h-0 w-full">
                    <img id="bg-image" className="relative z-0 -rotate-7 scale-x-110" src="" alt="" />
                    <div>
                        <img id="image-1" className="absolute z-20 right-30% bottom-16 w-1/5 drop-shadow-home" src="" alt="" />
                        <img id="image-2" className="absolute z-30 right-60 bottom-10 w-1/6 drop-shadow-home" src="" alt="" />
                        <img id="image-3" className="absolute z-20 right-20 bottom-52 w-14% drop-shadow-home" src="" alt="" />
                    </div>
                </div>
                <div className="relative w-1/12 left-8 top-2/5">
                    <img className='block relative w-full' src={sideframe} alt='' />
                    <div className="group relative w-2/3 flex flex-row left-4 rounded-full ">
                        <img className="inline-block transition duration-700 rounded-full scale-90 ease-in-out group-hover:rotate-90 group-hover:scale-100" src={world} alt='world'/>
                        <div id="side-frame-2" className="absolute left-12/10 h-1.5 w-full2 bottom-1/2 "></div>
                        <div className="scale-x-0 transition duration-500 ease-in-out origin-left flex flex-row absolute mx-4 left-full w-3/2 top-3 justify-evenly group-hover:scale-x-100">
                            <button className="w-1/2 transition duration-500 ease-in-out scale-75 opacity-75 hover:scale-90 hover:opacity-100" onClick={handleOnClickIg}><img src={ig} alt="ig" /></button>
                            <button className="w-1/2 transition duration-500 ease-in-out scale-75 opacity-75 hover:scale-90 hover:opacity-100" onClick={handleOnClickYt}><img src={yt} alt="yt" /></button> 
                        </div>               
                    </div>
                    <div id="side-frame-1" className="absolute h-14  w-1/3 right-9 bottom-2/5 "></div>
                    
                </div>
                <button onClick={onCickLeft}>
                    <img src={right} alt='' className="z-50 rotate-180 fixed top-.9/2 left-20 text-6xl w-18 h-18 rounded-full transition duration-300 ease-in-out opacity-5 hover:bg-black/75 hover:opacity-100 hover:brightness-150" />
                </button>
                <button onClick={onCickRight}>
                    <img src={right} alt='' className="z-50 fixed top-.9/2 right-8 text-6xl w-18 h-18 rounded-full transition duration-300 ease-in-out opacity-5 hover:bg-black/75 hover:opacity-100 hover:brightness-150" />
                </button>
            </div>
        </>
    )
}

export default Home;