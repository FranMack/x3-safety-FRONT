import { ContactFoarm } from "./ContactFoarm";
import { ContactInfo } from "./ContactInfo";

import { Title } from "../commons";

const title = "Contact Us";

export const Contact = () => {
  return (
    <section
      id="contact"
      className=" min-h-screen  lg:h-screen pb-[10vh] lg:py-[12vh]  flex justify-center bg-gray-100"
    >
      <div className=" w-[80%] h-auto  flex flex-col md:flex-row  gap-y-[5vh] ">
        <div className="w-full md:w-1/2  flex flex-col items-start justify-start  gap-y-[3vh]">
          <Title title={title} />
          <ContactInfo />
        </div>
        <div className="w-full md:w-1/2  flex flex-col items-center justify-center gap-y-[5vh]">
          <ContactFoarm />
        </div>
      </div>
    </section>
  );
};
