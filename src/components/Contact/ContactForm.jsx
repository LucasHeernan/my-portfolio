import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
// import { motion } from "framer-motion";
const serviceId = import.meta.env.SERVICE_ID;
const templateId = import.meta.env.TEMPLATE_ID;
const publicKey = import.meta.env.PUBLIC_KEY;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const regexs = { email: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ }

const validate = (input) => {
  let errors = {};

  if (!input.name) { errors.name = "Name is required"}
  if (input.name.length < 3) { errors.name = "The name must be more than 2 characthers"}

  if (!input.email) { errors.email = "Email address is required"}
  if (!regexs.email.test(input.email.trim())) { errors.email = "Email must be an valid email"}

  if (!input.subject) { errors.subject = "Subject is required"}
  if (input.subject.length < 3) { errors.subject = "The subject must be more than 2 characthers"}

  if (!input.message) { errors.message = "Message is required"}
  if (input.message.length < 9) { errors.message = "The message must be more than 10 characters"}

  return errors;
}

// const container = {
//   initial: { opacity: 0, y: 60 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.3,
//       delayChildren: 0.1,
//       ease: [0.25, 0.6, 0.3, 0.8]
//     }
//   }
// }

// const item = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 1, ease: [0.25, 0.25, 0.25, 0.75] } }
// };s

export default function ContactForm() {

  const form = useRef();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
    setErrors(validate(input));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: input.name,
      email: input.email,
      message: input.message,
      subject: input.subject
    }

    emailjs.sendForm(serviceId, templateId, templateParams, publicKey )
      .then((result) => {
        if (Object.keys(errors).length === 0 && Object.values(input).every(el => el !== "")) {
          console.log("Email sent successfully!", result);
          alert('YOUR EMAIL HAS BEEN SENT SUCCESSFULLY');
          setInput({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
          e.target.reset();
        }
      }, (error) => {
        console.log("Error sending email:", error);
        alert('MISSING DATA OR ERRORS IN DATA LOADING');
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && Object.values(input).every(el => el !== "")) {
      console.log("INPUT -> ", input);
      console.log("ERRORS ->", errors);
      toast.success("Correo enviado con exito!");
      setInput({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      e.target.reset();
    } else {
      toast.error("No se pudo enviar el correo, intente nuevamente");
      console.log("INPUT -> ", input);
      console.log("ERRORS ->", errors);
    }
  }

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      // variants={container}
      // initial="initial"
      // whileInView="animate"
      // viewport={{ once: true }}
      className="w-full flex flex-col items-center text-[#2a2a2a] text-base font-medium md:w-1/2 md:justify-end md:pb-8"
    >
      <ToastContainer />
      <div
        // variants={item}
        className="relative w-full my-3 rounded-sm"
      >
        <input
          name="name"
          onChange={(e) => handleChange(e)}
          value={input.name}
          className={`w-full py-3 px-5 bg-slate-600/20 border border-transparent placeholder:text-black/60 focus:outline-none dark:bg-[#cacaca] transform transition-all duration-500 ease-linear peer/contact ${errors.name ? "border-[rgb(255,0,0)]" : ""}`}
          type="text"
          // autoComplete="off"
          placeholder="Nombre"
        />
        <span className="absolute -bottom-0.5 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 dark:border-blue-600 peer-focus/contact:w-full" />
      </div>
      <div
        // variants={item}
        className="relative w-full my-3 rounded-sm"
      >
        <input
          name="email"
          onChange={(e) => handleChange(e)}
          value={input.email}
          className={`w-full py-3 px-5 bg-slate-600/20 border border-transparent placeholder:text-black/60 focus:outline-none dark:bg-[#cacaca] transform transition-all duration-500 ease-linear peer/contact ${errors.email ? "border-[rgb(255,0,0)]" : ""}`}
          type="email"
          // autoComplete="off"
          placeholder="Correo electrónico"
        />
        <span className="absolute -bottom-0.5 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 dark:border-blue-600 peer-focus/contact:w-full" />
      </div>
      <div
        // variants={item}
        className="relative w-full my-3 rounded-sm"
      >
        <input
          name="subject"
          onChange={(e) => handleChange(e)}
          value={input.subject}
          className={`w-full py-3 px-5 bg-slate-600/20 border border-transparent placeholder:text-black/60 focus:outline-none dark:bg-[#cacaca] transform transition-all duration-500 ease-linear peer/contact ${errors.subject ? "border-[rgb(255,0,0)]" : ""}`}
          type="text"
          // autoComplete="off"
          placeholder="Asunto"
        />
        <span className="absolute -bottom-0.5 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 dark:border-blue-600 peer-focus/contact:w-full" />
      </div>
      <div
        // variants={item}
        className="relative w-full my-3 rounded-sm"
      >
        <textarea
          name="message"
          onChange={(e) => handleChange(e)}
          value={input.message}
          className={`w-full pt-3 px-5 rounded-sm resize-none bg-slate-600/20 border border-transparent placeholder:text-black/60 focus:outline-none dark:bg-[#cacaca] transform transition-all duration-500 ease-linear peer/contact ${errors.message ? "border-[rgb(255,0,0)]" : ""}`} placeholder="Mensaje" rows="6"
        />
        <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-400 dark:border-blue-600 peer-focus/contact:w-full" />
      </div>
      <div
        // variants={item}
        className="relative z-10 group self-center mt-2 md:mt-5 md:self-end"
      >
        <button
          type="submit"
          disabled={Object.keys(errors).length || Object.values(input).every(el => el === "") ? true : false}
          className={`w-44 px-4 py-2 rounded border-b-[3px] border-r-2 shadow-sm shadow-black transition-all duration-200 ease-out group-hover:translate-y-[1px]
          ${Object.keys(errors).length || Object.values(input).every(el => el === "") ? "bg-gradient-to-b from-indigo-200 to-indigo-100 dark:from-[#9e9e9e] dark:to-[#9e9e9e] border-indigo-300 dark:border-[#737373] group-hover:from-indigo-200 group-hover:to-indigo-200 group-hover:dark:from-[#8f8f8f] group-hover:dark:to-[#8f8f8f]" :
          "bg-gradient-to-b from-[#52b8c3] to-[#52b8c3] dark:from-[#52b8c3] dark:to-[#52b8c3] border-[#00796b] dark:border-[#00796b] group-hover:from-[#52b8c3] group-hover:to-[#52b8c3] group-hover:dark:from-[#3b9099] group-hover:dark:to-[#3b9099] group-active:translate-y-0.5 group-active:translate-x-0.5"}`}
        >
          <span className={`uppercase text-sm ${Object.keys(errors).length || Object.values(input).every(el => el === "") ? "font-semibold text-[#2a2a2a] dark:text-[#e4dede]" : "font-medium text-[#ebf1f8] dark:text-[#ebf1f8]"}`}>Enviar mensaje</span>
        </button>
        <span
          className={`absolute w-44 -z-10 top-1 left-[3px] h-full rounded rounded-br-[5px] bg-[rgb(0,0,0,.80)] dark:bg-[#1d1c1c]
          ${Object.keys(errors).length || Object.values(input).every(el => el === "") ? "" : "group-active:transform group-active:transition-all group-active:left-1 group-active:w-[174px]"}`}
        />
      </div>
    </form>
  )
}
