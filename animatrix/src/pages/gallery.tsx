import * as React from "react";
import { useState,useEffect, useRef} from "react";
import { theme } from "../global_components/data";
import axios from "axios";
import { PhotoAlbum,  RenderPhoto } from "react-photo-album";
//import { RenderContainer, RenderRowContainer } from "react-photo-album";
import themeChange from "../images/theme.png";

import ReactLoading from "react-loading";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const apiURL_gallery = "http://localhost:4000/api/gallery";

/*const renderContainer: RenderContainer = ({ containerProps, children, containerRef }) => (
    <div
        style={{
        }}
    >
        <div ref={containerRef} {...containerProps}>
            {children}
        </div>
    </div>
);

/*const renderRowContainer: RenderRowContainer = ({ rowContainerProps, rowIndex, rowsCount, children }) => (
    <>
        <div {...rowContainerProps}>{children}</div>
        {rowIndex < rowsCount - 1 && (
            <div
                style={{
                }}
            />
        )}
    </>
);*/

const renderPhoto: RenderPhoto = ({ layout, layoutOptions, imageProps: { alt, style, ...restImageProps } }) => (
    <div
        style={{
            border: "0.125rem solid #eee",
            boxSizing: "content-box",
            alignItems: "center",
            width: style?.width,
        }}
    >
        <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
    </div>
);

const Gallery = () => {
    const no = parseInt(localStorage.getItem("theme-no") || "0");
    const [done,setDone] = useState(false);
    const [index, setIndex] = useState(-1);
    var album = useRef([]);    

    function changeTheme(e){
        let index = parseInt(e.target.name);
        localStorage.setItem("theme-no", index.toString());
        document.getElementById("gallery-div")!.style.backgroundImage = `linear-gradient(to right, ${theme[index]["bg-color1"]} 0%, ${theme[index]["bg-color2"]} 100%)`;
    };

    useEffect(() => {
        if (done === false) {
            setTimeout(() => {
                axios.get(apiURL_gallery).then((response) => {
                    album.current = response.data;
                }).then((json) => setDone(true));
            }, 1200);
        }
        else {
            document.getElementById("loader")!.style.opacity= "0";
            document.getElementById("gallery-div")!.style.opacity = "100";
            document.getElementById("gallery-div")!.style.backgroundImage = `linear-gradient(to right, ${theme[no]["bg-color1"]} 0%, ${theme[no]["bg-color2"]} 100%)`;
            theme.map((value, index) => {
                document.getElementById(`button` + index.toString())!.style.backgroundImage = `linear-gradient(to right, ${value["bg-color1"]} 0%, ${value["bg-color2"]} 100%)`;
                return false;
            })
        }
    });

    return (
        <div> 
            <div>
                <div id="gallery-div" className="absolute z-10 bg-gradient-to-r h-screen w-screen pt-24 transition duration-1000 ease-in-out opacity-0">
                    <div className="flex flex-row overflow-y-hidden w-7.5/10 mx-auto p-6 h-95% bg-black rounded-3xl">
                        <div id="gallery-pane" className="w-full h-full mx-auto inline-block overflow-x-hidden overflow-y-scroll">
                            <PhotoAlbum layout="rows" photos={album.current}
                                targetRowHeight={200} onClick={({ index }) => setIndex(index)}
                                renderPhoto={renderPhoto}
                            />
                            <Lightbox
                                slides={album.current}
                                open={index >= 0}
                                index={index}
                                close={() => setIndex(-1)}
                                // enable optional lightbox plugins
                                slideshow={{ delay: 2500 }}
                                plugins={[Fullscreen, Slideshow, Thumbnails, Download, Share]}
                            />
                        </div>
                    </div>
                    <div className="group fixed w-14 bottom-8 left-8">
                        <img className="scale-90 transition duration-500 ease-in-out group-hover:scale-100" src={themeChange} alt=""></img>
                        <div id="theme-btn-div" className="w-full flex flex-col items-center absolute h-fit bottom-full scale-y-0 transition duration-500 ease-in-out origin-bottom group-hover:scale-y-100" >
                            {theme.map((value, index) => {
                                return (
                                    <div className={`w-full text-center m-1`}>
                                        <button id={`button` + index} onClick={changeTheme} className="w-8 h-8 text-center text-lg rounded-full border-2 border-solid border-white" name={index.toString()}></button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div id="loader" className="absolute h-screen w-screen z-0 bg-black flex justify-center items-center transition duration-1000 ease-in-out opacity-100">
                <ReactLoading type={"bubbles"} color={"blue"} />
            </div>
        </div>
    );   
}

export default Gallery;

