import {
  AgricultureIcon,
  ChemestryIcon,
  IndustryIcon,
  MineryIcon,
  OilIcon,
  PortIcon,
} from "@/icons/icons";
import Marquee from "react-fast-marquee";
import { Title } from "./Title";

export const IndustryBanner = () => {
  return (
    <>
      <div className="w-full px-[10%]">
        <Title title="Presentes en la industria" />
      </div>

      <div className="mx-auto w-[80%] h-[20vh] md:h-[30vh] flex justify-center gap-x-[2vw] items-center text-white stroke-primary">
 
          <Marquee  speed={50}
          gradient={false}
          className="h-[80%] w-[100%]  overflow-hidden ">
            
          <div className="h-[10vh] md:h-[15vh] flex flex-col items-center mr-[5vw]">
            <MineryIcon />
            <br />
            <p className="text-[1.5rem] text-primary font-semibold">Minera</p>
          </div>
          <div className="h-[10vh] md:h-[15vh]  flex flex-col items-center mr-[5vw]">
            <IndustryIcon />
            <br />
            <p className="text-[1.5rem] text-primary font-semibold">
            Metalmecánica
            </p>
          </div>

          <div className="h-[10vh] md:h-[15vh]  flex flex-col items-center mr-[5vw]">
            <OilIcon />
            <br />
            <p className="text-[1.5rem] text-primary font-semibold">Petrolera</p>
          </div>

          <div className="h-[10vh] md:h-[15vh]  flex flex-col items-center mr-[5vw]">
            <PortIcon />
            <br />
            <p className="text-[1.5rem] text-primary font-semibold">
              Portuaría
            </p>
          </div>

          <div className="h-[10vh] md:h-[15vh]  flex flex-col items-center mr-[5vw]">
            <AgricultureIcon />
            <br />
            <p className="text-[1.5rem] text-primary font-semibold">Agrícola</p>
          </div>
          <div className="h-[10vh] md:h-[15vh]  flex flex-col items-center mr-[5vw]">
            <ChemestryIcon />
            <br />
            <p className="text-[1.5rem] text-primary font-semibold">Química</p>
          </div>
          </Marquee>
        </div>

    </>
  );
};
