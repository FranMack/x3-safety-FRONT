"use client";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

import { LanguageContext } from "@/context/language.context";
import { useScrollReveal } from "@/hooks/useScrollReveal ";

export const ContactFoarm = () => {
  const { language } = useContext(LanguageContext);
  const refContactForm = useScrollReveal<HTMLFormElement>("efectoReveal");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const singUpForm = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(
          2,
          `${
            language === "spanish"
              ? "El nombre debe tener al menos 2 caracteres"
              : "The name must be at least 2 characters"
          }`
        )
        .required(
          `${language === "spanish" ? "Campo requerido" : "Required field"}`
        ),
      message: Yup.string()
        .min(
          2,
          `${
            language === "spanish"
              ? "El mensaje debe tener al menos 2 caracteres"
              : "The message must be at least 2 characters"
          }`
        )
        .required(
          `${language === "spanish" ? "Campo requerido" : "Required field"}`
        ),
      email: Yup.string()
        .email(
          `${language === "spanish" ? "Email no valido" : "Invalid email"}`
        )
        .required(
          `${language === "spanish" ? "Campo requerido" : "Required field"}`
        ),
      phone: Yup.string()
        .matches(
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
          `${
            language === "spanish"
              ? "Número de telefono invalido"
              : "Invalid phone number"
          }`
        )
        .required(
          `${language === "spanish" ? "Campo requerido" : "Required field"}`
        ),
    }),

    onSubmit: async (values) => {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      const consultInfo = {
        name: values.name,
        message: values.message,
        email: values.email,
        phone: values.phone,
      };

      try {
        const sendMessage = await fetch(`/api/consult`, {
          method: "POST",
          body: JSON.stringify(consultInfo),
          headers: { "Content-Type": "application/json" },
        });

        if (!sendMessage.ok) {
          throw new Error("Message could not be send");
        }

        toast.success("Mensaje enviado", {
          style: { backgroundColor: "#b3c62d", color: "#ffff" },
          hideProgressBar: true,
          autoClose: 4000,
        });

        singUpForm.resetForm();
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form
      ref={refContactForm}
      onSubmit={singUpForm.handleSubmit}
      className="w-full lg:w-[80%] mx-auto p-10 md:p-20  rounded-[12px] bg-primary bg-opacity-30  shadow-lg"
    >
      <div className="mb-6 w-[100%]  ">
        <input
          type="text"
          placeholder={language === "spanish" ? "Tu Nombre" : "Your Name"}
          className={`w-[100%] h-[5vh] md:h-[10vh] lg:h-[5vh] px-4 py-2 border rounded-lg focus:outline-none focus:border-primary text-[1.5rem] ${
            singUpForm.errors.name && singUpForm.touched.name
              ? "border-red-700"
              : ""
          }`}
          id="name"
          value={singUpForm.values.name}
          onChange={singUpForm.handleChange}
          onBlur={singUpForm.handleBlur}
        />
        {singUpForm.errors.name && singUpForm.touched.name && (
          <p className="mb-[1.5vh] text-[1rem] text-red-700">
            {singUpForm.errors.name}
          </p>
        )}
      </div>
      <div className="mb-6 w-[100%] ">
        <input
          type="email"
          placeholder={language === "spanish" ? "Tu email" : "Your email"}
          className={`w-[100%] h-[5vh] md:h-[10vh] lg:h-[5vh] px-4 py-2 border rounded-lg focus:outline-none focus:border-primary text-[1.5rem] ${
            singUpForm.errors.email && singUpForm.touched.email
              ? "border-red-700"
              : ""
          }`}
          id="email"
          value={singUpForm.values.email}
          onChange={singUpForm.handleChange}
          onBlur={singUpForm.handleBlur}
        />
        {singUpForm.errors.email && singUpForm.touched.email && (
          <p className="mb-[1.5vh] text-[1rem] text-red-700">
            {singUpForm.errors.email}
          </p>
        )}
      </div>
      <div className="mb-6 w-[100%]  ">
        <input
          type="tel"
          placeholder={
            language === "spanish"
              ? "Tu número de teléfono"
              : "Your phone number"
          }
          className={`w-[100%] h-[5vh] md:h-[10vh] lg:h-[5vh] px-4 py-2 border rounded-lg focus:outline-none focus:border-primary text-[1.5rem] ${
            singUpForm.errors.phone && singUpForm.touched.phone
              ? "border-red-700"
              : ""
          }`}
          id="phone"
          value={singUpForm.values.phone}
          onChange={singUpForm.handleChange}
          onBlur={singUpForm.handleBlur}
        />
        {singUpForm.errors.phone && singUpForm.touched.phone && (
          <p className="mb-[1.5vh] text-[1rem] text-red-700">
            {singUpForm.errors.phone}
          </p>
        )}
      </div>
      <div className="mb-6 w-[100%] ">
        <textarea
          placeholder={language === "spanish" ? "Tu mensaje" : "Your message"}
          rows={4}
          className={`w-[100%] h-[15vh] md:h-[25vh] lg:h-[15vh] px-4 py-2 border rounded-lg focus:outline-none focus:border-primary text-[1.5rem] ${
            singUpForm.errors.message && singUpForm.touched.message
              ? "border-red-700"
              : ""
          }`}
          id="message"
          value={singUpForm.values.message}
          onChange={singUpForm.handleChange}
          onBlur={singUpForm.handleBlur}
        ></textarea>
        {singUpForm.errors.message && singUpForm.touched.message && (
          <p className="mb-[1.5vh] text-[1rem] text-red-700">
            {singUpForm.errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-5 rounded-lg text-[1.8rem] hover:bg-opacity-60 transition-all duration-500"
      >
        {isLoading ? (
          <BeatLoader color={"white"} speedMultiplier={0.4} />
        ) : (
          `${language === "spanish" ? "Enviar" : "Send"}`
        )}
      </button>
    </form>
  );
};
