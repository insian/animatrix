import logo from "../images/logo.png";
import user from "../images/user.png";
import search from "../images/search2.png";
import signInPic from "../images/signinpic.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState, useCallback } from "react";
import { Popup } from "./popUp";
import InputTextV from "../pages/inputTextV";
import tick from "../images/accept.png";


const apiURL_user = "http://localhost:4000/api/user";


const Navbar = (props) => {
	const navigate = useNavigate();
	const userDetails = useRef({});
	const [openSignUp, setOpenSignUp] = useState(false);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const toggleUser = () => {
		setOpenSignUp(!openSignUp);
	}
	function navigateHome() {
		navigate("/");
	}
	function navigateToArticle() {
		navigate("/article");
	}
	function navigateToAbout() {
		navigate("/about");
	}
    function navigateToContact() {
		navigate("/contact");
	}
	function navigateToContributor() {
		navigate("/contributor");
	}
	function navigateToGallery() {
		navigate("/gallery");
	}
    

	function searchToggle(e) {
		e.preventDefault();
		if(document.getElementById("search-input").style.display !== "inline") {
			document.getElementById("search-div").style.backgroundColor = 'rgba(0,0,0,0.2)';
			document.getElementById("search-input").style.display = "inline"    
		}
		else{
			if(document.getElementById("search-input").value !== ''){
					alert(document.getElementById("search-input").value);
			}
		}
	}

	window.onclick = function(e) {
			e.preventDefault();
			if(e.target !== document.getElementById("search-div") && 
			e.target !== document.getElementById("search-input") &&
			e.target !== document.getElementById("search-btn")){
					document.getElementById("search-div").style.backgroundColor = 'rgba(0,0,0,0)';
					document.getElementById("search-input").style.display = "none";
					document.getElementById("search-input").value = null;
			}
	}

	const onClickUser = (e) => {
		e.preventDefault();
		if (!userLoggedIn) {
			toggleUser();
		}
	}

	const [isFail, setIsFail] = useState(false);
    const toggleFail = () => {
        setIsFail(!isFail);
    }
    const [isSucess, setIsSucess] = useState(false);
    const toggleSuccess = () => {
        setIsSucess(!isSucess);
    }
	const [valid, setValid] = useState([]);
    const [forceValidation, setForceValidation] = useState(false);

    const handleInformValidity = useCallback((component, state) => {
		setValid((prevValid) => {
            console.log(prevValid);
            const updatedValid = [...prevValid];
            updatedValid[component] = state;
            return updatedValid;
        });
    }, []);
	
	const handleOnClick = function (e) {
        e.preventDefault();
        let isValid = true;
        valid.forEach((element) => {
			isValid = isValid && element;
        });
        const forceValidationCondition = isValid && valid.length >= 2;
		if (!forceValidationCondition) {
            setForceValidation(true);
            toggleFail();
        }
        else {
            toggleSuccess();
        }
    };
	
	const toggleLogin = () => {
		document.getElementById("btn").classList.add('left-0');
		document.getElementById("btn").classList.remove('right-0');
		document.getElementById("Login").style.transform = "translateX(0)";
		document.getElementById("Register").style.transform = "translateX(120%)";
	}

	const toggleSignup = () => {
		document.getElementById("btn").classList.remove('left-0');
		document.getElementById("btn").classList.add('right-0');
		document.getElementById("Login").style.transform = "translateX(-120%)";
		document.getElementById("Register").style.transform = "translateX(0)";
	}

	/*useEffect(() => {
		setTimeout(() => {
			axios
				.get(apiURL_user)
				.then((response) => {
					userDetails.current = response.data;
					setUserLoggedIn(true);
				})
				.catch((error) => {
					console.log(error);
					setUserLoggedIn(false);
				})
		}, 2000);
	},[])
	*/

	return (
		<div >
			<div className={`flex flex-row bg-gradient-to-r ${props.bg} ${props.shadow} ${props.round}  fixed w-full h-20 z-40 `}>
				<button onClick={navigateHome} className="inline-block bg-transparent border-0 transition duration-300 ease-in-out my-auto mx-8 hover:scale-110">
					<img className="h-14 p-0.5 ease-in-out duration-500" src={logo} alt="home" />
				</button>
				<div className="flex flex-row w-1/2 justify-between my-auto ml-2 mr-8 text-lg font-serif text-white"> 
					<button onClick={navigateToGallery} className="inline-block bg-transparent border-0 transition duration-300 ease-in-out hover:scale-125" > GALLERY </button>	
					<button onClick={navigateToArticle} className="inline-block bg-transparent border-0 transition duration-300 ease-in-out hover:scale-125"> ARTICLES </button>
					<button onClick={navigateToAbout} className="inline-block bg-transparent border-0 transition duration-300 ease-in-out hover:scale-125"> ABOUT </button>
					<button onClick={navigateToContact} className="inline-block bg-transparent border-0 transition duration-300 ease-in-out hover:scale-125"> CONTACT </button>
					<button onClick={navigateToContributor} className="inline-block bg-transparent border-0 transition duration-300 ease-in-out hover:scale-125"> CONTRIBUTOR </button>
				</div>
				<div id="search-div" className="flex flex-row h-16 my-auto mx-4 rounded-full w-1/7">
					<input id="search-input" className="hidden m-4 px-3 w-2/3 border-0 rounded-full origin-left outline-none text-base bg-white/20"></input>
					<button onClick={searchToggle}  className="mr-4 transition duration-300 ease-in-out hover:scale-125">
						<img id="search-btn" src={search} alt='' className="h-5 invert"/>
					</button>
				</div>
				<div className="group cursor-pointer flex my-auto mr-12 ml-auto justify-center">
					<button onClick={onClickUser}><img className="menu-hover h-12 transition duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-200" src={user} alt="user"/></button>
					{openSignUp && <Popup
						handleClose={toggleUser}
						content={
							<div style={{ backgroundImage: `url(${signInPic})` }} className="bg-cover bg-no-repeat bg-center p-5 rounded-2xl w-[25vw] h-[50vh] mx-auto relative flex flex-col items-center">
								{/* <div className="bg-gradient-to-tr from-[#178959] to-[#1C5B8E] bg-clip-padding rounded-2xl w-full h-95% my-0 mx-auto flex flex-col justify-center items-center opacity-30 border-double border-2 background-signup bg-origin-border">
								</div> */}
								<div className="bg-black bg-clip-padding rounded-2xl w-full h-95% my-0 mx-auto flex flex-col justify-center items-center opacity-30 border-double border-2 background-signup bg-origin-border">
								</div>
								<div className="absolute top-50% left-50% -translate-x-50% -translate-y-50%  w-full h-95% p-5 flex flex-col items-center ">
									<div className="w-95% h-95% relative mx-auto p-1 overflow-hidden overflow-y-scroll">
										<div className="w-2/3 mx-auto mb-2 relative rounded-3xl bg-[#087979]">
											<div id="btn" className="top-0 left-0 absolute w-1/2 h-full bg-[#45f3ff] rounded-3xl transition duration-500"></div>
											<button type="button" className="py-1 px-4 w-1/2 cursor-pointer bg-transparent text-black font-serif font-bold border-0 outline-none relative" onClick={toggleLogin}>Log In</button>
											<button type="button" className="py-1 px-4 w-1/2 cursor-pointer bg-transparent text-black font-serif font-bold border-0 outline-none relative" onClick={toggleSignup}>Sign Up</button>
										</div>
										<div id="Login" className="top-14 absolute w-95% transition duration-500 transalte-x-0">
											<form>
												<InputTextV
													id="email2"
													name="email2"
													placeholder="Email"
													className="w-full py-1 px-3 my-3 mx-0 border-0 border-b-4 border-[#45F3ff] rounded-lg ouline-none focus:outline-none bg-transparent text-[#45f3ff] placeholder-[#45f3ff]"
													validations={[
														{
															handle: "isEmpty",
															errorMsg: "Field is mandatory",
															not: true,
														},
														{
															handle: "isEmail",
															errorMsg: "Invalid email",
														},
													]}
													type="text"
													componentId={0}
													informValidity={handleInformValidity}
													forceValidation={forceValidation}
												/>
												<InputTextV
													id="pw2"
													name="pw2"
													placeholder="Password"
													className="w-full py-1 px-3 my-3 mx-0 border-b-4 border-[#45F3ff] rounded-lg ouline-none bg-transparent focus:outline-none text-[#45F3ff] placeholder-[#45f3ff]"
													validations={[
														{
															handle: "isEmpty",
															errorMsg: "Field is mandatory",
															not: true,
														}
													]}
													type="password"
													componentId={1}
													informValidity={handleInformValidity}
													forceValidation={forceValidation}
												/>
												<div className="w-full flex flex-row justify-center">
													<button id="save2" type="submit" value="Login" onClick={handleOnClick} className="w-1/3 py-1 my-4 rounded-full font-serif font-semibold border-0 outline-none bg-gradient-to-r from-[#a1fbe3] to-[#45f3ff]">Login</button>
												</div>
												
											</form>
										</div>
										<div id="Register" className="top-14 absolute w-95% transition duration-500 translate-x-12/10">
											<form>
												<InputTextV
													id="name"
													name="name"
													placeholder="Name"
													className="w-full py-1 px-3 my-3 mx-0 border-b-4 border-[#45F3ff] rounded-lg ouline-none focus:outline-none bg-transparent text-[#45F3ff] placeholder-[#45f3ff]"
													validations={[
														{
															handle: "isEmpty",
															errorMsg: "Field is mandatory",
															not: true,
														}
													]}
													type="text"
													componentId={0}
													informValidity={handleInformValidity}
													forceValidation={forceValidation}
												/>
												<InputTextV
														id="email"
														name="email"
														placeholder="Email"
														className="w-full py-1 px-3 my-3 mx-0 border-b-4 border-[#45F3ff] rounded-lg ouline-none bg-transparent text-[#45F3ff] placeholder-[#45f3ff]"
														validations={[
															{
																handle: "isEmpty",
																errorMsg: "Field is mandatory",
																not: true,
															},
															{
																handle: "isEmail",
																errorMsg: "Invalid email",
															},
														]}
														type="text"
														componentId={1}
														informValidity={handleInformValidity}
														forceValidation={forceValidation}
												/>
												<InputTextV
													id="pw2"
													name="pw2"
													placeholder="Password"
													className="w-full py-1 px-3 my-3 mx-0 border-b-4 border-[#45F3ff] rounded-lg ouline-none focus:outline-none bg-transparent text-[#45F3ff] placeholder-[#45f3ff]"
													validations={[
														{
															handle: "isEmpty",
															errorMsg: "Field is mandatory",
															not: true,
														}
													]}
													type="password"
													componentId={2}
													informValidity={handleInformValidity}
													forceValidation={forceValidation}
												/>
												<div className="w-full flex flex-row justify-center">
													<button id="save" type="submit" value="SignUp" onClick={handleOnClick} className="w-1/3 py-1 my-4 rounded-full font-serif font-semibold border-0 outline-none bg-gradient-to-r from-[#a1fbe3] to-[#45f3ff]">Sign Up</button>
												</div>
											</form>
        								</div>
									</div>	
								</div>

							</div>
						}
					/>}
					{isFail && <Popup 
                    handleClose={toggleFail}
                    content={
                        <div className="bg-[#f00] p-4 rounded-xl">
                            <div className=" text-white text-xl font-bold font-serif">
                                Please Enter All the Details Correctly!!
                            </div>
                        </div>
                    }
					/>}
					{isSucess && <Popup 
						handleClose={toggleSuccess}
						content={
							<div className="bg-white p-4 rounded-xl">
								<div className=" text-black text-lg font-semibold font-serif">
									<img src={tick} alt="" className="w-8 inline mr-2"/>Success
								</div>
							</div>
						}
					/>}
				</div>
			</div>
			
		</div>
	);
}
		
export default Navbar;