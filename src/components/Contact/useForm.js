import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export const useForm = (initialForm, validate) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    setErrors(validate(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      subject: form.subject
    }

    if (Object.keys(errors).length === 0 && Object.values(templateParams).every(el => el !== "")) {
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((result) => {
          console.log("Email sent successfully! ", result);
          toast.success("Correo enviado con exito!");
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
          e.target.reset();
        }, function(error) {
          console.log("Missing data or errors in data loading. ", error);
          toast.error("No se pudo enviar el correo, intente nuevamente");
          e.target.reset();
        });
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleSubmit
  };
};

// function handleSubmit(e) {
//   e.preventDefault();

//   if (Object.keys(errors).length === 0 && Object.values(form).every(el => el !== "")) {
//     console.log("FORM -> ", form);
//     console.log("ERRORS ->", errors);
//     toast.success("Correo enviado con exito!");
//     setForm({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     })
//     e.target.reset();
//   } else {
//     console.log("FORM -> ", form);
//     console.log("ERRORS ->", errors);
//     toast.error("Se envio el correo con campos vacios");
//     e.target.reset();
//   }
// };