import React, { useRef, useState, useCallback } from "react";
import { contactbg } from "../global_components/data";
import InputTextV from "./inputTextV";
import TextAreaV from "./textAreaV";
import emailjs from "@emailjs/browser";
import { Popup } from "../global_components/popUp";
import tick from "../images/accept.png";

const Contact = () => {
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

    const formData = useRef();
    const handleOnClick = function (e) {
        e.preventDefault();
        let isValid = true;
        valid.forEach((element) => {
            isValid = isValid && element;
        });
        const forceValidationCondition = isValid && valid.length === 3;
        console.log(valid.length);
        if (!forceValidationCondition) {
            setForceValidation(true);
            toggleFail();
        }
        else {
            emailjs.sendForm('service_7xl5x48', 'template_wgo84k8', formData.current, 'pWNZHMw96pXKa83HW')
                .then((result) => {
                    console.log(result.text);
                    window.location.reload(false);
                }, (error) => {
                    console.log(error.text);
                });
            toggleSuccess();
        }
    };

    return (
        <div>
            <div style={{ backgroundImage: `url(${contactbg})` }}
                id="contact-div" className="pt-16 h-screen overflow-hidden bg-no-repeat bg-bottom bg-cover">
                <section className="w-1/3 h-fit mx-auto mt-6 text-center bg-gradient-to-tr from-black/50 via-white/10 via-50% to-black/50 border-2 border-white/20 rounded-3xl p-5">
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
                        Give your feedback
                    </h3>

                    <form
                        ref={formData}
                        className="w-5/6 mx-auto place-items-center"
                    >
                        <div className="">
                            <InputTextV
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full text-lg py-2 px-4 my-2 rounded-xl text-[#45F3ff] placeholder-[#45F3ff] bg-transparent border-2 border-white hover:bg-black/30 focus:bg-black/70 "
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
                            <InputTextV
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full text-lg py-2 px-4 my-2 rounded-xl text-[#45F3ff] placeholder-[#45F3ff] bg-transparent border-2 border-white hover:bg-black/30 focus:bg-black/70 "
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
                        </div>
                        <div>
                            <TextAreaV
                                id="feedback"
                                name="feedback"
                                placeholder="Feedback"
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
                        <button
                            onClick={handleOnClick}
                            className="text-black font-serif text-lg bg-[#8ff7fe] hover:bg-[#00edfe] focus:bg-[#00edfe] transition duration-300 ease-in-out py-1 px-2 w-1/4 rounded-2xl m-4"
                        >
                            Send
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

export default Contact;
