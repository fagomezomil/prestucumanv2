import Image from 'next/image'

import DestinoCard from './DestinoCard'



import { PiHeartDuotone, PiHeartFill } from "react-icons/pi";

export default function CircuitoSec({ circuitosData, favoritos, actualizarFavoritos, circuitoSeleccionado }) {
    const circuitosFiltrados = circuitosData.circuitos.filter((circuito) => circuito.circuito === circuitoSeleccionado);

    return (
        <div>
            {circuitosFiltrados.map((circuito, index) => (
                <div key={index} className="grid grid-cols-7 relative">
                    <div className="items-center col-span-7 grid grid-cols-2 xl:grid-cols-3 mx-12 mt-8">
                        <h2 className={`uppercase font-800 text-[64px] leading-[50px] text-${circuito.color}`}>{circuito.nombre}</h2>
                        <p className={`text-[34px] font-400 text-neutral-500 leading-[35px] w-96`}>{circuito.destacado}</p>
                        <div className="flex flex-row gap-6 justify-end">
                            <div>
                                <p className={`text-${circuito.color}-1 font-400 italic text-3xl`}>Armá tu itinerario y descargalo</p>
                                {favoritos.length === 0 ? (
                                    <p className="text-2xl font-400 text-neutral-400">No hay destinos seleccionados</p>
                                ) : (
                                    <p className="text-2xl font-400 text-neutral-400">Destinos seleccionados: {favoritos.length}</p>
                                )}
                            </div>
                            <div>
                                {favoritos.length !== 0 ? (
                                    <PiHeartFill className={`text-${circuito.color} rounded-full bg-white border border-neutral-200 p-2 text-[60px] shadow-lg`} />
                                ) : (
                                    <PiHeartDuotone className={`text-${circuito.color} rounded-full bg-white border border-neutral-200 p-2 text-[60px] shadow-lg`} />
                                )}
                            </div>
                        </div>
                    </div>
                    <Image src={circuito.imagen} width={500} height={500} alt={circuito.nombre} className="absolute -bottom-10 left-0" />
                    <div className="col-span-7 mt-4 mx-12 h-[75vh]">
                        <DestinoCard circuito={circuito} favoritos={favoritos} actualizarFavoritos={actualizarFavoritos} />
                    </div>
                </div>
            ))}
        </div>
    )
}
