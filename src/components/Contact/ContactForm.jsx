import React, { useRef } from "react";
import { useForm } from "./useForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useList } from "./useAnimation";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validate = (form) => {
  let errors = {};
  let regexsEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  if (!form.name.trim()) {
    errors.name = "Name field is required"
  } else if (form.name.trim().length < 3) {
    errors.name = "The name must be more than 2 characthers"
  } else if (!form.email.trim()) {
    errors.email = "Email field is required"
  } else if (!regexsEmail.test(form.email.trim())) {
    errors.email = "The email must be a valid email"
  } else if (!form.subject.trim()) {
    errors.subject = "Subject field is required"
  } else if (form.subject.trim().length < 3) {
    errors.subject = "The subject must be more than 2 characthers"
  } else if (!form.message.trim()) {
    errors.message = "Message field is required"
  } else if (form.message.trim().length < 9) {
    errors.message = "The message must be more than 10 characters"
  }

  return errors;
};

export default function ContactForm() {

  const emailRef = useRef();
  const {
    form,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validate);

  const scope = useList({ first:"section", second:"div" });

  return (
    <form
      ref={emailRef}
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center md:justify-end md:w-1/2 md:pb-8"
    >
      <ToastContainer autoClose={3000}/>
      <section
        ref={scope}
        className="w-full flex flex-col text-[#2a2a2a] text-base font-medium"
      >
        <div className="relative w-full my-3">
          <input
            name="name"
            onChange={(e) => handleChange(e)}
            value={form.name}
            className={`w-full py-3 px-5 rounded-sm bg-slate-600/20 border border-transparent placeholder:text-black/60 placeholder:text-sm placeholder:xs:text-base focus:outline-none dark:bg-[#cacaca] transform transition-all duration-500 ease-linear peer/contact ${errors.name ? "border-[#ff0000]" : ""}`}
            type="text"
            autoComplete="off"
            placeholder="Nombre"
            required
          />
          <span className="absolute -bottom-0.5 left-0 w-0 h-0 transition-all duration-500 border-b-2 border-blue-400 dark:border-blue-600 peer-focus/contact:w-full" />
        </div>
        <div className="relative w-full my-3">
          <input
            name="email"
            onChange={(e) => handleChange(e)}
            value={form.email}
            className={`w-full py-3 px-5 rounded-sm bg-slate-600/20 border border-transparent placeholder:text-black/60 placeholder:text-sm placeholder:xs:text-base focus:outline-none dark:bg-[#cacaca] transform transition-all duration-500 ease-linear peer/contact ${errors.email ? "border-[#ff0000]" : ""}`}
            type="email"
            autoComplete="off"
            placeholder="Correo electrónico"
            required
          />
          <span className="absolute -bottom-0.5 left-0 w-0 h-0 transition-all duration-500 border-b-2 border-blue-400 dark:border-blue-600 peer-focus/contact:w-full" />
        </div>
        <div className="relative w-full my-3">
          <input
            name="subject"
            onChange={(e) => handleChange(e)}
            value={form.subject}
            className={`w-full py-3 px-5 rounded-sm bg-slate-600/20 border border-transparent placeholder:text-black/60 placeholder:text-sm placeholder:xs:text-base focus:outline-none dark:bg-[#cacaca] transform transition-all duration-500 ease-linear peer/contact ${errors.subject ? "border-[#ff0000]" : ""}`}
            type="text"
            autoComplete="off"
            placeholder="Asunto"
            required
          />
          <span className="absolute -bottom-0.5 left-0 w-0 h-0 transition-all duration-500 border-b-2 border-blue-400 dark:border-blue-600 peer-focus/contact:w-full" />
        </div>
        <div className="relative w-full my-3">
          <textarea
            name="message"
            onChange={(e) => handleChange(e)}
            value={form.message}
            className={`w-full pt-3 px-5 rounded-sm resize-none bg-slate-600/20 border border-transparent placeholder:text-black/60 placeholder:text-sm placeholder:xs:text-base focus:outline-none dark:bg-[#cacaca] transform transition-all duration-500 ease-linear peer/contact ${errors.message ? "border-[#ff0000]" : ""}`}
            rows="6"
            placeholder="Mensaje"
            required
          />
          <span className="absolute bottom-0 left-0 w-0 h-0 transition-all duration-500 border-b-2 border-blue-400 dark:border-blue-600 peer-focus/contact:w-full" />
        </div>
        <div className="relative z-10 group self-center mt-2 md:mt-5 md:self-end">
          <button
            type="submit"
            disabled={Object.keys(errors).length || Object.values(form).every(el => el === "") ? true : false}
            className={`w-44 px-4 py-2 rounded border-b-[3px] border-r-2 shadow-sm shadow-black transform transition-all duration-200 ease-linear
            ${Object.keys(errors).length || Object.values(form).every(el => el === "") ? "bg-[#9e9e9e] border-[#737373] group-hover:bg-[#8f8f8f]" :
            "bg-[#52b8c3] border-[#00796b] group-hover:bg-[#5598a0] group-hover:translate-y-[1px] group-active:translate-y-0.5 group-active:translate-x-0.5"}`}
          >
            <span className={`uppercase text-sm ${Object.keys(errors).length || Object.values(form).every(el => el === "") ? "font-medium text-[#c4c4c4]" : "font-semibold text-[#ebf1f8]"}`}>Enviar mensaje</span>
          </button>
          <span
            className={`absolute w-44 -z-10 top-1 left-[3px] h-full rounded rounded-br-[5px] bg-[rgb(0,0,0,.70)] dark:bg-[#1d1c1c]
            ${Object.keys(errors).length || Object.values(form).every(el => el === "") ? "" : "group-active:transform group-active:transition-all group-active:left-1 group-active:w-[174px]"}`}
          />
        </div>
      </section>
    </form>
  )
};
