import { useEffect, useRef, useState } from "react";
import { theme } from "../global_components/data";
import themeChange from "../images/theme.png";
import ReactLoading from "react-loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiURL_artciles = "http://localhost:4000/api/articles";
const apiURL_stories = "http://localhost:4000/api/stories";

function Article() {
    const no = parseInt(localStorage.getItem("theme-no") || "0");
    const [done, setDone] = useState(false);
    const [done2, setDone2] = useState(false); 
    var articles = useRef([]);
    var stories = useRef([]);   

    function changeTheme(e) {
        let index = parseInt(e.target.name);
        localStorage.setItem("theme-no", index.toString());
        document.getElementById("article-div").style.backgroundImage = `linear-gradient(to right, ${theme[index]["bg-color1"]} 0%, ${theme[index]["bg-color2"]} 100%)`;
    }
    const navigate = useNavigate();
    const goToArticleFull = (e) => {
        e.preventDefault();
        localStorage.setItem("article_id",e.target.value);
        navigate("/articlefull")
    }
    useEffect(() => {
        if (done === false || done2 === false) {
            setTimeout(() => {
                axios
                    .get(apiURL_artciles)
                    .then((response) => {
                        articles.current = response.data;
                    })
                    .then((json) => setDone(true));
            }, 2000);
            setTimeout(() => {
                axios
                    .get(apiURL_stories)
                    .then((response) => {
                        stories.current = response.data;
                    })
                    .then((json) => setDone2(true));
            }, 2000);
        } else {
            document.getElementById("loader").style.opacity = "0";
            document.getElementById("article-div").style.opacity = "100";
            document.getElementById("article-div").style.backgroundImage = `linear-gradient(to right, ${theme[no]["bg-color1"]} 0%, ${theme[no]["bg-color2"]} 100%)`;
            theme.map((value, index) => {
                document.getElementById(
                    `button` + index.toString()
                ).style.backgroundImage = `linear-gradient(to right, ${value["bg-color1"]} 0%, ${value["bg-color2"]} 100%)`;
                return false;
            });
        }
    });

    return (
        <div>
            <div
                id="article-div"
                className="absolute z-10 bg-gradient-to-r h-screen w-screen opacity-0 transition duration-1000 ease-in-out"
            >
                {/* <Navbar bg="from-white/5 via-white/10 via-65% to-white/30" shadow="shadow-2xl shadow-black" round="rounded-b-2xl"/> */}
                <div className="h-20 bg-gradient-to-r from-white/5 via-white/10 via-65% to-white/30 shadow-2xl shadow-black rounded-b-2xl"></div>
                <div className="flex flex-row h-10/12 mt-4">
                    <div className="flex flex-row h-full w-7.5/10 mx-auto">
                        <div className="m-4 w-2/3">
                            <div className="bg-gradient-to-tr from-black/20 via-white/10 via-50% to-black/20 px-5 py-3 m-2 rounded-3xl text-white shadow-xl shadow-black/50">
                                <h1>Articles</h1>
                            </div>

                            <div className="relative h-10/12 overflow-x-hidden overflow-y-scroll text-white font-serif">
                                {articles.current.map((value, index) => (
                                    <div className="bg-gradient-to-tr from-black/20 via-white/10 via-50% to-black/20 h-fit m-4 p-4 rounded-3xl shadow-lg shadow-black/70">
                                        <div className="grid grid-cols-2 gap-4">
                                            <img src={value.src} alt="" loading="lazy" className="rounded-3xl w-full"/>
                                            <div className="mx-2">
                                                <p className="text-2xl text-left">{value.anime}</p>
                                                <p className="text-xl text-justify">{value.sdesc}</p>
                                                <button value={value._id} onClick={goToArticleFull} className="hover:text-[#8aeddce9] italic font-bold">Read More..</button>
                                            </div>
                                        </div>
                                    </div>                                   
                                ))}
                            </div>
                        </div>
                        <div className="m-4 w-1/3">
                            <div className="bg-gradient-to-tr from-black/20 via-white/10 via-50% to-black/20 px-5 py-3 m-2 text-center rounded-full text-white shadow-xl shadow-black/50">
                                <h1>Latest Stories</h1>
                            </div>
                            <div className="bg-gradient-to-tr from-black/20 via-white/10 via-50% to-black/20 relative my-4 h-10/12 overflow-x-hidden overflow-y-scroll text-white font-serif shadow-lg shadow-black/70 rounded-xl">
                                <div className="my-2 text-black ">
                                    {stories.current.map((value, index) => (
                                        <div className="h-fit py-2">
                                            <div className="flex flex-row w-full px-4 py-2">
                                                <img src={value.src} alt="" loading="lazy" className="relative rounded-xl w-1/4"/>
                                                <div className="relative text-md text-justify w-3/4 p-2">
                                                    <b><i>{value.anime}</i></b>
                                                    <p className="text-white truncate">{value.sdesc}</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="group fixed w-14 bottom-8 left-8">
                        <img
                            className="scale-90 transition duration-500 ease-in-out group-hover:scale-100"
                            src={themeChange}
                            alt=""
                        ></img>
                        <div
                            id="theme-btn-div"
                            className="w-full flex flex-col items-center absolute h-fit bottom-full scale-y-0 transition duration-500 ease-in-out origin-bottom group-hover:scale-y-100"
                        >
                            {theme.map((value, index) => {
                                return (
                                    <div className={`w-full text-center m-1`}>
                                        <button
                                            id={`button` + index}
                                            key={index}
                                            onClick={changeTheme}
                                            className="w-8 h-8 text-center text-lg rounded-full border-2 border-solid border-white"
                                            name={index.toString()}
                                        ></button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="loader"
                className="absolute h-screen w-screen z-0 bg-black flex justify-center items-center transition duration-1000 ease-in-out opacity-100"
            >
                <ReactLoading type={"bubbles"} color={"blue"} />
            </div>
        </div>
    );
}

export default Article;
