import React from "react";

const Popup = props => {
    window.onclick = function(e) {
        e.preventDefault();
        if(e.target === document.getElementById("overlay")){
            props.handleClose();
        }
}

    return (
        <div id="overlay" className="fixed left-0 top-0 bg-black/50 w-screen h-screen" >
            <div className="relative mt-40 h-fit w-fit mx-auto">
                {/* <button className="cursor-pointer text-[0.75rem] w-6 h-6 border-2 border-solid border-[#999] rounded-full absolute -right-6 -top-6 bg-white transition duration-200 ease-in-out hover:scale-125" onClick={props.handleClose}>&#9587;</button> */}
                {props.content}
            </div>
        </div>
    );
}

export { Popup };