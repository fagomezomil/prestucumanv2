import Image from "next/image";
import { PiHeartDuotone, PiHeartFill } from "react-icons/pi";

const BotonesPlanifica = ({ circuito, favoritos }) => {
  return (
    <div className="flex items-center gap-4">
      <button className="bg-[#9b988d] hover:bg-[#d42727] h-14 w-14 rounded-full items-center justify-center flex relative group">
        <Image
          src="./images/alojamiento.svg"
          width={32}
          height={32}
          alt="alojamientos"
        />
        <span className="absolute -bottom-[36px] left-1/2 bg-[#d42727] transform p-1 px-2 rounded-lg -translate-x-1/2 text-s text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Alojamientos
        </span>
      </button>
      <button className="bg-[#9b988d] hover:bg-[#ff9f31] h-14 w-14 rounded-full items-center justify-center flex relative group">
        <Image
          src="./images/transporte.svg"
          width={32}
          height={32}
          alt="transporte"
        />
        <span className="absolute -bottom-[36px] left-1/2 bg-[#ff9f31] transform p-1 px-2 rounded-lg -translate-x-1/2 text-s text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Transportes
        </span>
      </button>
      <button className="bg-[#9b988d] hover:bg-[#248b46] h-14 w-14 rounded-full items-center justify-center flex relative group">
        <Image
          src="./images/prestadores.svg"
          width={32}
          height={32}
          alt="prestadores"
        />
        <span className="absolute -bottom-[36px] left-1/2 bg-[#248b46] transform p-1 px-2 rounded-lg -translate-x-1/2 text-s text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Prestadores
        </span>
      </button>
      <button className="bg-[#9b988d] hover:bg-[#6d6b63] h-14 w-14 rounded-full items-center justify-center flex relative group">
        <Image src="./images/mapa.svg" width={32} height={32} alt="planifica" />
        <span className="absolute -bottom-[36px] left-1/2 bg-[#6d6b63] transform p-1 px-2 rounded-lg -translate-x-1/2 text-s text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Mapas
        </span>
      </button>
      <div className="relative">
        {favoritos.length !== 0 ? (
          <div>
            <PiHeartFill
              className={`text-${circuito.color} rounded-full bg-white border border-neutral-200 p-2 text-[60px] shadow-lg`}
            />
            <p
              className={`absolute h-6 w-6 rounded-full font-700 right-0 top-12 pt-[2px] text-white text-[15px] text-center bg-${circuito.color}`}
            >
              {favoritos.length}
            </p>
          </div>
        ) : (
          <PiHeartDuotone
            className={`text-${circuito.color} rounded-full bg-white border border-neutral-200 p-2 text-[60px] shadow-lg`}
          />
        )}
      </div>
    </div>
  );
};

export default BotonesPlanifica;
