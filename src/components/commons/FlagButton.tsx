import Image, { StaticImageData } from "next/image";

interface Props {
  flag: StaticImageData;
  country: string;
  onClick:()=>void
}
export const FlagButton = ({ flag, country: country,onClick }: Props) => {
  return (
    <button onClick={onClick} className="relative h-[80%] aspect-square overflow-hidden rounded-full opacity-70">
      <Image src={flag} alt={`${country} flag`} fill className="absolute " />
    </button>
  );
};
