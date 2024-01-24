import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import UnderlineText from "../common/UnderlineText";
import TitleText from "../common/TitleText";
import ThankYouModal from "../modal/ThankYouModal";

const Form = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobile, setIsMobile] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitText, setSubmitText] = useState("Submit!");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //send data using api
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("data after submit:", e);

      if (!name) {
          setErrorMessage("Please enter Name");
      } else if (!email) {
          setErrorMessage("Please enter Email Address");
      } else if (!number) {
          setErrorMessage("Please enter Number");
      } else if (!subject) {
          setErrorMessage("Please enter Subject");
      } else if (!message) {
          setErrorMessage("Please enter Message");
      } else {
          setSubmitText("...");

          let data = {
              name,
              email,
              number,
              subject,
              message,
          };

          fetch("/api/contact", {
              method: "POST",
              headers: {
                  Accept: "application/json, */*",
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
          }).then((res) => {
              console.log("Response received:", res);
              console.log("data:", data);

              if (res.status === 200) {
                  console.log("Response succeeded!");
                  setName("");
                  setEmail("");
                  setNumber("");
                  setSubject("");
                  setMessage("");
                  setSubmitText("Submitted");
                  setIsModalOpen(true);
              }
          });
      }
  };

  return (
    <>
      <div className="container " id="contact-us">
        <div className="md:grid grid-cols-2 md:pt-16 pt-10 pr-4 rounded-3xl">
          <div className="col-span-1 md:block hidden">
            <img
              src="/home/contactimg.png"
              className=" object-cover rounded-xl md:h-[600px] w-full"
            />
          </div>
          <div className="col-span-1 md:ml-4 md:pt-10 py-12 md:py-0 md:pl-5">
            <UnderlineText title="Contact Us" />
            <TitleText title="Reach Out and Let's Make Your Party Perfect" />
            <form>
            <div className="pt-10">
           
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="outline-0 focus:text-[black] focus:bg-gray-50 w-[100%] border-b-[1px] py-3 px-2 border-primary "
                placeholder="Your Name"
              ></input>
            </div>
            <div className="pt-4">
              <input
                type="textarea"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                className="outline-0 focus:text-[black] focus:bg-gray-50 w-[100%] border-b-[1px] py-3 px-2 border-primary "
                placeholder="Email Address"
              ></input>
            </div>
            
              <div className="pt-4"> 
                <input
                  type="text"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                  className="outline-0 focus:text-[black] focus:bg-gray-50 w-[100%] border-b-[1px] py-3 px-2 border-primary "
                placeholder="Phone Number"
               ></input>
              </div>
              <div className="pt-4">
                 <input
                  type="text"
                  name="state"
                  onChange={(e) => setState(e.target.value)}
                  className="outline-0 focus:text-[black] focus:bg-gray-50 w-[100%] border-b-[1px] py-3 px-2 border-primary "
                  placeholder="Subject"
                ></input>
              </div>
          
            <div className="pt-4">
              <input
               type="textarea"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                className="outline-0 focus:text-[black] focus:bg-gray-50 w-[100%] border-b-[1px] py-3 px-2 border-primary "
                  placeholder="Message"
                 ></input>
            </div>
          

            <div className="text-left pt-8">
              {errorMessage ? (
                <p className="text-sm text-red-500">{errorMessage}</p>
              ) : (
                ""
              )}
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="border-2 border-primary rounded-full text-primary py-3 px-8 w-fit"
              >
                {submitText}
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      {isModalOpen ? <ThankYouModal /> : ""}
    </>
  );
};

export default Form;
