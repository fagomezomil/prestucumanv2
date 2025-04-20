"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import LogoGobTuc from "@/images/logogobtuc.svg";
import { FaChevronCircleRight, FaFileDownload } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";

import Modal from "react-modal";

import LogoHistorica from "@/images/historicalogo.svg";
import LogoHistoricaMb from "@/images/historicalogomb.svg";
import LogoYungas from "@/images/yungaslogo.svg";
import LogoYungasMb from "@/images/yungaslogomb.svg";
import LogoSur from "@/images/surlogo.svg";
import LogoSurMb from "@/images/surlogomb.svg";
import LogoChoromoro from "@/images/choromorologo.svg";
import LogoChoromoroMb from "@/images/choromorologomb.svg";
import LogoCalchaqui from "@/images/calchaquilogo.svg";
import LogoCalchaquiMb from "@/images/calchaquilogomb.svg";

import circuitos from "@/data/circuitos";
import CircuitoSec from "@/components/CircuitoSec";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const circuitosData = circuitos();

const logos = {
  Historica: {
    nombre: "Historica",
    logo: LogoHistorica,
    img: "casah",
    color: "historica",
    bg: "#01415C",
    mb: LogoHistoricaMb
  },
  Yungas: {
    nombre: "Yungas",
    logo: LogoYungas,
    mb: LogoYungasMb,
    img: "quetipi-inicio",
    color: "yungas",
    bg: "#66ac7c",
  },
  Choromoro: {
    nombre: "Choromoro",
    logo: LogoChoromoro,
    mb: LogoChoromoroMb,
    img: "pozoindio-inicio",
    color: "choromoro",
    bg: "#FD5901",
  },
  Calchaqui: {
    nombre: "Calchaqui",
    logo: LogoCalchaqui,
    mb: LogoCalchaquiMb,
    img: "menhires-inicio",
    color: "calchaqui",
    bg: "#9E2D2C",
  },
  Sur: {
    nombre: "Sur",
    logo: LogoSur,
    mb: LogoSurMb,
    img: "sur",
    color: "sur",
    bg: "#508E6D",
  },
};
export default function Planifica() {
  const [favoritos, setFavoritos] = useState([]);
  const [circuitoSeleccionado, setCircuitoSeleccionado] = useState("Historica");
  const [itinerarioProgress, setItinerarioProgress] = useState(0);
  const dias = Math.ceil(itinerarioProgress / 100);
  const progressText = `${dias} día${dias > 1 ? "s" : ""}`;
  const progressWidth = itinerarioProgress > 100 ? 100 : itinerarioProgress;

  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const actualizarFavoritos = useCallback(
    (nombre) => {
      const nuevosFavoritos = [...favoritos];
      const existe = nuevosFavoritos.includes(nombre);
      if (existe) {
        nuevosFavoritos.splice(nuevosFavoritos.indexOf(nombre), 1);
      } else {
        nuevosFavoritos.push(nombre);
      }
      setFavoritos(nuevosFavoritos);
      const progress =
        (nuevosFavoritos.length / circuitosData.circuitos.length) * 100;
      setItinerarioProgress(progress);
    },
    [favoritos]
  );

  return (
    <div className=" bg-white overflow-hidden font-400 h-screen mx-auto font-sofiacond relative">
      <div className="bg-white w-screen py-3 flex flex-row items-center justify-between shadow-md">
        <Image
          src="/images/tucumanlogo.svg"
          alt="logo gob tuc"
          priority
          width={200}
          height={60}
          className="h-[60px] ml-6"
        />
        <p className="hidden xl:block text-neutral-400 text-[42px] font-600 text-center font-sofiacond">
          Planificá tu viaje al Corazón del Norte Argentino
        </p>
        <Image
          src={LogoGobTuc}
          alt="logo gob tuc"
          className="h-[65px] w-fit mr-16 hidden md:block"
        />
      </div>
      <div className="">
        <div className="w-full">
          <div className="grid grid-cols-6 justify-center w-full">
            <div className="bg-[#206C60] col-span-6 xl:col-span-1 flex items-center p-2 xl:pl-12 justify-center">
              <p className="col-span-2 xl:col-span-3 text-[24px] lg:text-[28px] xl:text-[30px] leading-7 pr-2 font-400 text-white xl:shrink-0">
                Elegí tu destino y <br className="hidden  xl:block" /> planifica
                tu viaje
              </p>
              <FaChevronCircleRight className="text-white  lg:text-[34px] xl:text-[40px]" />
            </div>
            {/* <div className="col-span-6 xl:col-span-1 pl-12 grid grid-cols-2 xl:grid-cols-4 items-center bg-[#206C60] min-w-[150px] ">
              <p className="col-span-2 xl:col-span-3 text-[30px]	 leading-7 font-400 text-white ">
                Elegí tu destino y <br className="hidden  xl:block" /> planifica tu viaje
              </p>
              <FaChevronCircleRight className="text-white w-[40px] h-[40px]" />
            </div> */}
            <div className="hidden lg:col-span-6 xl:col-span-5 lg:flex lg:flex-row">
              {Object.values(logos).map((logo, index) => {
                const isActive = logo.nombre === circuitoSeleccionado;

                return (
                  <button
                    key={index}
                    onClick={() => setCircuitoSeleccionado(logo.nombre)}
                    className={`w-full h-full p-4 mb-4 flex items-center justify-center bg-stone-400 hover:bg-${logo.color} shadow-left `}
                    style={{ backgroundColor: isActive ? logo.bg : "" }}
                  >
                    <Image
                      src={logo.logo}
                      alt={`Logo ${index}`}
                      className="h-[60px]"
                    />
                  </button>
                );
              })}
            </div>
            <div className="col-span-6 lg:hidden xl:col-span-1 flex items-center justify-center">
            <Select  onValueChange={setCircuitoSeleccionado} >
              <SelectTrigger
                className={`w-[100%] col-span-6 border-none rounded-none`}
                style={{ backgroundColor: logos[circuitoSeleccionado]?.bg }}
              >
                {logos[circuitoSeleccionado]?.logo && (
                  <Image
                    src={logos[circuitoSeleccionado].mb}
                    alt={`Logo ${circuitoSeleccionado}`}
                    className="w-full object-contain h-[65px]"
                  />
                )}
              </SelectTrigger>
              <SelectContent className=" bg-neutral-400" style={{ transform: "translateX(-10px)" }}>
                {Object.entries(logos).map(([nombre, logo]) => (
                  <SelectItem
                    key={nombre}
                    value={nombre}
                    className=""
                    style={{ backgroundColor: nombre === circuitoSeleccionado ? logo.bg : "" }}
                  >
                    <Image
                      src={logo.mb}
                      alt={`Logo ${nombre}`}
                      className="h-[65px] p-2 w-full object-contain"
                    />
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            </div>

          </div>
        </div>
        <div className="">
          <CircuitoSec
            circuitosData={circuitosData}
            favoritos={favoritos}
            actualizarFavoritos={actualizarFavoritos}
            circuitoSeleccionado={circuitoSeleccionado}
          />
        </div>
        {/* barra de itinerario */}
        <div className="flex items-center w-full h-[45px] bg-neutral-500 absolute rounded-t-md bottom-0 right-0">
          <p className="font-700 uppercase text-2xl text-white shrink-0 pl-6">
            Tu itinerario
          </p>
          <div className="w-full h-[30px] bg-neutral-200 rounded-full mx-2 flex items-center ">
            {progressWidth > 0 && (
              <div
                style={{ width: `${progressWidth}%` }}
                className={`h-full rounded-full bg-[#206C60] border-4 border-neutral-200`}
              ></div>
            )}
          </div>
          <p className="font-700 uppercase text-2xl text-white shrink-0 mr-4">
            {progressText}
          </p>

          <button
            className="flex items-center px-4 text-white hover:bg-[#206C60] hover:rounded-t-md hover:h-full"
            onClick={handleDownloadClick}
          >
            <FaFileDownload className="text-[26px]" />{" "}
            <p className="font-700 uppercase text-2xl  ml-2">Descargar</p>
          </button>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "500px",
              height: "400px",
              margin: "auto",
              padding: "0px",
              backgroundColor: "#206C60",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              border: "none",
            },
          }}
        >
          <div className="relative font-sofiacond bg-[#206C60]">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={handleCloseModal}
            >
              <IoCloseCircle />
            </button>
            <h2 className="font-800 uppercase p-4 pl-6 text-4xl col-span-2 text-white">
              Descargá tu itinerario
            </h2>
            <div className="bg-white w-full h-full col-span-2 flex flex-row items-center">
              <Image
                src="/images/qrweb.svg"
                alt="logo gob tuc"
                width={180}
                height={180}
                className="h-[200px] w-[200px] p-6 "
              />
              <div className="flex flex-col items-start">
                <span className="py-2">
                  <IoIosPhonePortrait className="text-[50px] text-[#206C60]" />
                </span>
                <p className="pr-6 italic font-500 text-[#206C60] text-2xl">
                  Escaneando este código podés llevar el itinerario en tu
                  celular
                </p>
              </div>
            </div>
            <div className="px-6">
              <p className="pb-2 pt-4 font-500 text-white text-2xl">
                Ingresá tu e-mail y te lo enviamos
              </p>
              <div className="flex flex-row gap-4">
                <input
                  type="email"
                  name=""
                  id=""
                  className="rounded-xl pl-6 py-2 w-full text-[20px] italic"
                />
                <Link href="/pdf/itinerario2025.pdf" download>
                  <button className="text-white bg-[#ED7219] py-2 px-4 rounded-xl font-800 uppercase text-[16px]">
                    Descargar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
