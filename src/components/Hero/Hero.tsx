import { Carrousel } from "./Carrousel";
export const Hero = () => {
  return (
    <section id="home" className="h-screen">
      <div className="relative h-full overflow-hidden">
      <h1 className="text-transparent ">X3-SAFETY</h1>
        <Carrousel/>
      </div>
    </section>
  );
};
