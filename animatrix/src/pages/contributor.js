import React, { useState, useCallback } from "react";
import { contributorbg } from "../global_components/data";
import InputTextV from "./inputTextV";
import TextAreaV from "./textAreaV";
import { Popup } from "../global_components/popUp";
import tick from "../images/accept.png";

const Contributor = () => {
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
        const forceValidationCondition = isValid && valid.length === 4;
        if (!forceValidationCondition) {
            setForceValidation(true);
            toggleFail();
        }
        else {
            toggleSuccess();
        }
    };

    return (
        <div>
            <div style={{ backgroundImage: `url(${contributorbg})` }}
                id="contact-div" className="h-screen overflow-hidden bg-no-repeat bg-bottom bg-cover">
                <div className="h-20 bg-gradient-to-r from-black/70 to-white/10 shadow-2xl shadow-black rounded-b-2xl"></div>
                <section className="w-1/3 h-10/12 mx-auto mt-6 text-center bg-black/60 border-2 border-white/20 rounded-3xl p-5 overflow-hidden overflow-y-scroll">
                    {/* <h1 className="text-white text-[2.5rem] mb-2" >Get in Touch</h1>
                    <span className="text-white block mb-4 font text-md"><b>Contact Us</b></span> */}
                    {/* <div className='w-full mx-auto justify-center pb-1 text-white'>
                        <h3 className="text-center text-[1.75rem] font-normal mb-4">Give your feedback</h3>
                        <form className="w-5/6 mx-auto grid grid-flow-row gap-4 place-items-center" >
                            <input className="text-left font-serif text-[1.2rem] p-1 px-4 rounded-2xl w-full bg-white/20 border-0 outline-none text-black placeholder-black/60 focus:bg-white/70" type="text" placeholder="Name" ref={nameRef} required="required" />
                            <input className="addlb-input text-black" type="text" placeholder="Name"
                            required="required" ref={nameRef} />
                            <input className="text-left font-serif text-[1.2rem] p-1 px-4 rounded-2xl w-full bg-white/20 border-0 outline-none text-black placeholder-black/60 focus:bg-white/70" type="text" placeholder="Topic" required="required" /> 
                            <textarea className="text-left font-serif text-[1.2rem] p-1 px-4 rounded-2xl w-full h-64 resize-none bg-white/20 border-0 outline-none text-black placeholder-black/60 focus:bg-white/70" type="text" placeholder="Feedback" /> 
                            <input type="submit" value="Send" onClick={sendEmail} className="w-1/4 bg-white/70 text-black font-serif px-5 py-1 rounded-xl hover:bg-white " />
                        </form>
                    </div> */}
                    {/*<form onSubmit={sendEmail} >
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder="Email ID" name="name" onChange={handleChange} />   
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div>
                            <label >EmailID</label>
                            <input type="email" placeholder="password" name="email" onChange={handleChange} />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div>
                            <label >Feedback</label>
                            <input type="text" placeholder="feedback" name="message" value={formData.message} onChange={handleChange} />
                            {errors.message && <p>{errors.message}</p>}
                        </div>
                        
                        <button type="submit" value="Submit" onClick={sendEmail}>Send</button>
                </form>*/}
                    <h3 className="text-center text-[1.75rem] font-normal mb-4 text-white font-serif">
                        Please Contribute Your Articles
                    </h3>

                    <form
                        className="w-5/6 mx-auto place-items-center"
                    >
                        <div className="">
                            <InputTextV
                                id="anime"
                                name="anime"
                                placeholder="Anime Name"
                                className="w-full text-lg py-2 px-4 my-2 rounded-xl bg-transparent border-2 border-white text-[#45F3ff] placeholder-[#45F3ff] hover:bg-black/30 focus:bg-black/70 "
                                validations={[
                                    {
                                        handle: "isEmpty",
                                        errorMsg: "Field is mandatory",
                                        not: true,
                                    },
                                ]}
                                type="text"
                                componentId={0}
                                informValidity={handleInformValidity}
                                forceValidation={forceValidation}
                            />
                        </div>
                        <div>
                            <TextAreaV
                                id="sdesc"
                                name="sdesc"
                                placeholder="Short Description"
                                className="w-full h-24 text-lg py-2 px-4 my-2 resize-none text-[#45F3ff] placeholder-[#45F3ff] rounded-xl bg-transparent border-2 border-white hover:bg-black/30 focus:bg-black/70 "
                                validations={[
                                    {
                                        handle: "isEmpty",
                                        errorMsg: "Field is mandatory",
                                        not: true,
                                    }
                                ]}
                                type="text"
                                componentId={1}
                                informValidity={handleInformValidity}
                                forceValidation={forceValidation}
                            />
                        </div>
                        <div>
                            <TextAreaV
                                id="ldesc"
                                name="ldesc"
                                placeholder="Long Description"
                                className="w-full h-48 text-lg py-2 px-4 my-2 resize-none text-[#45F3ff] placeholder-[#45F3ff] rounded-xl bg-transparent border-2 border-white hover:bg-black/30 focus:bg-black/70 "
                                validations={[
                                    {
                                        handle: "isEmpty",
                                        errorMsg: "Field is mandatory",
                                        not: true,
                                    },
                                ]}
                                componentId={2}
                                informValidity={handleInformValidity}
                                forceValidation={forceValidation}
                            />
                        </div>
                        <div className="">
                            <InputTextV
                                id="pic"
                                name="pic"
                                placeholder="Picture"
                                className="w-full text-lg py-2 px-4 my-2 rounded-xl bg-transparent border-2 border-white text-[#45F3ff] placeholder-[#45F3ff] hover:bg-black/30 focus:bg-black/70 "
                                validations={[
                                    {
                                        handle: "isEmpty",
                                        errorMsg: "Field is mandatory",
                                        not: true,
                                    },
                                ]}
                                type="file"
                                componentId={3}
                                informValidity={handleInformValidity}
                                forceValidation={forceValidation}
                            />
                        </div>
                        <div className="">
                            <InputTextV
                                id="contributor"
                                name="contributor"
                                placeholder="Contributor Name"
                                className="w-full text-lg py-2 px-4 my-2 rounded-xl bg-transparent border-2 border-white text-[#45F3ff] placeholder-[#45F3ff] hover:bg-black/30 focus:bg-black/70 "
                                validations={[
                                    {
                                        handle: "isEmpty",
                                        errorMsg: "Field is mandatory",
                                        not: true,
                                    },
                                ]}
                                type="text"
                                componentId={3}
                                informValidity={handleInformValidity}
                                forceValidation={forceValidation}
                            />
                        </div>
                        <button
                            onClick={handleOnClick}
                            className="text-black font-serif text-lg bg-[#8ff7fe] hover:bg-[#00edfe] focus:bg-[#00edfe] transition duration-300 ease-in-out py-1 px-2 w-1/2 rounded-2xl m-4"
                        >
                            Contribute
                        </button>
                    </form>
                </section>
                {isFail && <Popup 
                    handleClose={toggleFail}
                    content={
                        <div className="bg-[#f00] p-4 rounded-xl">
                            <div className=" text-white text-xl font-bold font-serif">
                                Please Enter All the Details
                            </div>
                        </div>
                    }
                />}
                {isSucess && <Popup 
                    handleClose={toggleSuccess}
                    content={
                        <div className="bg-white p-4 rounded-xl">
                            <div className=" text-black text-lg font-semibold font-serif">
                                <img src={tick} alt="" className="w-8 inline mr-2"/>Successfully Contributed
                            </div>
                        </div>
                    }
                />}
            </div>
        </div>
    );
};

export default Contributor;
