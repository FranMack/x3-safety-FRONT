import Image, { StaticImageData } from "next/image";

interface Props {
  flag: StaticImageData;
  country: string;
}
export const FlagButton = ({ flag, country: country }: Props) => {
  return (
    <button className="relative h-[80%] aspect-square overflow-hidden rounded-full opacity-70">
      <Image src={flag} alt={`${country} flag`} fill className="absolute " />
    </button>
  );
};
