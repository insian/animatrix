import { useEffect, useRef, useState } from "react";
import { theme } from "../global_components/data";
import themeChange from "../images/theme.png";
import ReactLoading from "react-loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiURL_artciles = "http://localhost:4000/api/articles";

const ArticleFull = () => {
    const no = parseInt(localStorage.getItem("theme-no") || "0");
    const [done, setDone] = useState(false);
    var articles = useRef([]);
    const navigate = useNavigate();
    function navigateToArticle() {
		navigate("/article");
	}
    function changeTheme(e) {
        let index = parseInt(e.target.name);
        localStorage.setItem("theme-no", index.toString());
        document.getElementById(
            "article-div"
        ).style.backgroundImage = `linear-gradient(to right, ${theme[index]["bg-color1"]} 0%, ${theme[index]["bg-color2"]} 100%)`;
    }

    useEffect(() => {
        if (done === false) {
            setTimeout(() => {
                axios
                    .post(apiURL_artciles, {
                        '_id' : localStorage.getItem("article_id"),
                    })
                    .then((response) => {
                        articles.current = response.data;
                    })
                    .then((json) => setDone(true));
            }, 2000);
        } else {
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("article-div").style.opacity = "100";
        document.getElementById(
            "article-div"
        ).style.backgroundImage = `linear-gradient(to right, ${theme[no]["bg-color1"]} 0%, ${theme[no]["bg-color2"]} 100%)`;
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
                <div className="h-20 bg-gradient-to-r from-white/5 via-white/10 via-65% to-white/30 shadow-2xl shadow-black rounded-b-2xl">
                </div>
                <div className="text-white bg-transparent mx-auto h-fit mt-4 w-7.5/10">
                    <button className={`m-2 border-2 border-white transition duration-300 ease-in-out hover:bg-black p-2 rounded-full`} onClick={navigateToArticle}>&lt; Back To Articles</button>
                </div>
                <div className="text-white flex flex-col h-7.5/10 mt-2 w-7.5/10 mx-auto overflow-hidden overflow-y-scroll">
                    <h1 className="italic m-4">{articles.current.anime}</h1>
                    <h3 className="mx-4 italic">{articles.current.sdesc}</h3>
                    <img className="m-4" src={articles.current.src} alt={articles.current.anime} />
                    <p className="mx-4 text-xl text-justify italic">{articles.current.ldesc}</p>
                    <p className="mx-4 mt-8 italic">~ {articles.current.contributor}</p>
                </div>
                
            </div>
            <div className="group fixed w-14 bottom-8 left-8">
                <img
                    className="scale-90 transition duration-500 ease-in-out group-hover:scale-100"
                    src={themeChange}
                    alt=""
                ></img>
                <div id="theme-btn-div" className="w-full flex flex-col items-center absolute h-fit bottom-full scale-y-0 transition duration-500 ease-in-out origin-bottom group-hover:scale-y-100">
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
            <div
                id="loader"
                className="absolute h-screen w-screen z-0 bg-black flex justify-center items-center transition duration-1000 ease-in-out opacity-100"
            >
                <ReactLoading type={"bubbles"} color={"blue"} />
            </div>
        </div>
    );
};

export default ArticleFull;
