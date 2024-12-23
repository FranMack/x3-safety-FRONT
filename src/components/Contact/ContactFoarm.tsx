"use client";
import { useFormik } from "formik";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import * as Yup from "yup";

import { useScrollReveal } from "@/hooks/useScrollReveal ";

export const ContactFoarm = () => {
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
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .required("Campo requerido"),
      message: Yup.string()
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .required("Campo requerido"),
      email: Yup.string().email("Email invalido").required("Campo requerido"),
      phone: Yup.string()
        .matches(
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
          "Número de teléfono no válido"
        )
        .required("Campo requerido"),
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
      className="w-full md:w-[80%] mx-auto p-10 md:p-20  rounded-[12px] bg-primary bg-opacity-30  shadow-lg"
    >
      <div className="mb-6 w-[100%]  ">
        <input
          type="text"
          placeholder="Your Name"
          className={`w-[100%] h-[5vh] px-4 py-2 border rounded-lg focus:outline-none focus:border-primary ${
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
          placeholder="Your Email"
          className={`w-[100%] h-[5vh] px-4 py-2 border rounded-lg focus:outline-none focus:border-primary ${
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
          placeholder="Your Phone"
          className={`w-[100%] h-[5vh] px-4 py-2 border rounded-lg focus:outline-none focus:border-primary ${
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
          placeholder="Your Message"
          rows={4}
          className={`w-[100%] h-[15vh] px-4 py-2 border rounded-lg focus:outline-none focus:border-primary ${
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
        className="w-full bg-primary text-white py-5 rounded-lg hover:bg-blue-500 transition text-[1.5rem]"
      >
        {isLoading ? (
          <BeatLoader color={"white"} speedMultiplier={0.4} />
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  );
};
