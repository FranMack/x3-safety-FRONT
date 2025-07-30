import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
      <Image
        src="/favicon.png"
        alt="Logo x3 safety"
        width={200}
        height={200}
        className="mb-4"
      />
      <h1 className="text-6xl font-bold text-primary mb-4">
        404 - Página no encontrada
      </h1>
      <p className="text-gray-500 mb-10 text-2xl">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link href="/">
        <button className="bg-primary text-white text-3xl px-7 py-4 rounded-full hover:bg-gray-500 transition duration-300">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
