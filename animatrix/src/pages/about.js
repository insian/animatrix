import { aboutbg } from "../global_components/data";
import anime1 from "../images/anime-image-1.jpg";
import anime2 from "../images/anime-image-2.jpg";
import anime3 from "../images/anime-image-3.jpg";

const About = () => {
    
    
    //style={{backgroundImage: `url(${bgs[no]})` }}
    /*
    <div className="h-0">
                <img className="w-screen z-0" src={bgs[0]} alt='' />
            </div>
    */

    return (
        <>  
            <div style={{ backgroundImage: `url(${aboutbg})` }} id="about-div" className="h-screen overflow-hidden bg-no-repeat bg-center bg-cover">
                <section className="mt-20 bg-black/60 rounded-3xl p-2.5 h-fit w-2/3 mx-auto font-serif">
                    <div className="my-0 mx-auto p-3 text-justify text-[#fff]">
                        <h2>About Animatrix</h2>
                        <i><p>Welcome to Animatrix, your source for the latest updates, 
                            reviews, and news about all anime things. Our team of passionate 
                            anime enthusiasts is dedicated to bringing you the most relevant 
                            and exciting information from the world of anime.</p>
                        <p>Whether you're a casual viewer or an avid fan, Animatrix is 
                            here to keep you informed and entertained. We cover a wide 
                            range of topics, including new anime releases, character 
                            spotlights, industry insights, and much more.</p>                    
                        <p>At Animatrix, we believe that anime is more than just a form 
                            of entertainment—it's a vibrant and diverse culture that 
                            connects people from all walks of life. We strive to foster 
                            a welcoming community where anime lovers can come together 
                            to share their thoughts, engage in discussions, and celebrate 
                            their passion for this amazing art form.</p>                    
                        <p>Join us on this exciting journey as we explore the
                            ever-expanding world of anime. Stay tuned for the latest news, 
                            in-depth articles, and exclusive interviews with industry 
                            professionals. We hope you enjoy your stay!</p></i>
                    </div>
                </section>
                <section className="">
                    <div className="h-screen bg-transparent my-0 p-5 flex flex-row justify-center">
                        <div className="group bg-gradient-to-tr from-black/30 to-[#1C5B8E]/20 w-1/5 h-.9/2 rounded-xl p-1 text-center my-0 bg-transparent border-2 border-solid border-black transition duration-500 ease-in-out scale-90 hover:scale-100">
                            <div className="relative w-full h-0 cursor-pointer">
                                <div className="relative flex flex-row top-7 justify-center rounded-xl transition duration-700 ease-in-out group-hover:rotate-y-180 style-preserve-3d">
                                    <div className="absolute rounded-lg text-center backface-hidden rotate-y-0">
                                        <img className="relative h-60 rounded-xl" src={anime1} alt="Anime 1" />
                                    </div>
                                    <div className="absolute backface-hidden w-52 h-60 rounded-xl rotate-y-180 bg-black/50 via p-1 text-[#f87e9e] flex flex-col justify-center items-center">
                                        <h2>Latest Updates</h2>
                                        <p className="text-[#777]">Stay up to date with the latest anime releases, episodes, and news from the anime industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="group bg-gradient-to-tr from-black/30 to-[#1C5B8E]/40 w-1/5 h-.9/2 rounded-xl p-1 text-center bg-transparent border-2 border-solid border-black transition duration-500 ease-in-out scale-90 hover:scale-100">
                            <div className="relative w-full h-0 cursor-pointer">
                                <div className="relative flex flex-row top-7 justify-center rounded-xl transition duration-700 ease-in-out group-hover:rotate-y-180 style-preserve-3d">
                                    <div className="absolute rounded-lg text-center backface-hidden rotate-y-0">
                                        <img className="relative h-60 rounded-xl" src={anime2} alt="Anime 2" />
                                    </div>
                                    <div className="absolute backface-hidden w-52 h-60 rounded-xl rotate-y-180 bg-black/50 p-1 text-[#f87e9e] flex flex-col justify-center items-center">
                                        <h2>Reviews</h2>
                                        <p className="text-[#777]">Discover insightful reviews and recommendations for popular anime series, movies, and OVAs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="group bg-gradient-to-tr from-black/30 to-[#1C5B8E]/40 w-1/5 h-.9/2 rounded-xl p-1 text-center bg-transparent border-2 border-solid border-black transition duration-500 ease-in-out scale-90 hover:scale-100">
                            <div className="relative w-full h-0 cursor-pointer">
                                <div className="relative flex flex-row top-7 justify-center rounded-xl transition duration-700 ease-in-out group-hover:rotate-y-180 style-preserve-3d">
                                    <div className="absolute rounded-lg text-center backface-hidden rotate-y-0" >
                                        <img className="relative h-60 rounded-xl" src={anime3} alt="Anime 3" />
                                    </div>
                                    <div className="absolute backface-hidden w-52 h-60 rounded-xl rotate-y-180 bg-black/50 p-1 text-[#f87e9e] flex flex-col justify-center items-center" >
                                        <h2>Community</h2>
                                        <p className="text-[#777]">Join our vibrant community of anime lovers to engage in discussions, share your thoughts, and connect with fellow fans.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About;