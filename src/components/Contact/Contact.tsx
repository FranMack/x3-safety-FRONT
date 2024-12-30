import { ContactFoarm } from "./ContactFoarm";
import { ContactInfo } from "./ContactInfo";
import {ToastContainer} from 'react-toastify';

import { Title } from "../commons";
import { cookies } from "next/headers";

const title = "Contact";
const titulo = "Contacto";

export const Contact = () => {

     const cookieStore=cookies()
    const language=cookieStore.get("language")?.value ?? "spanish"
  return (
    <section
      id="contact"
      className=" min-h-screen  lg:h-screen pb-[10vh] lg:py-[12vh]  flex justify-center bg-gray-100"
    >
       <ToastContainer style={{fontSize: '1.6rem'}} />
      <div className=" w-[80%] h-auto  flex flex-col lg:flex-row  gap-y-[5vh] ">
        <div className="w-full lg:w-1/2  flex flex-col items-start justify-start  gap-y-[3vh]">
          <Title title={language==="spanish"?titulo:title} />
          <ContactInfo />
        </div>
        <div className="w-full lg:w-1/2  flex flex-col items-center justify-center gap-y-[5vh]">
          <ContactFoarm />
        </div>
      </div>
     
    </section>
  );
};
