import Image from 'next/image'

import DestinoCard from './DestinoCard'
import BotonesPlanifica from './BotonesPlanifica'


export default function CircuitoSec({ circuitosData, favoritos, actualizarFavoritos, circuitoSeleccionado }) {
    const circuitosFiltrados = circuitosData.circuitos.filter((circuito) => circuito.circuito === circuitoSeleccionado);

    return (
        <div>
            {circuitosFiltrados.map((circuito, index) => (
                <div key={index} className="grid grid-cols-7 relative">
                    <div className="items-center col-span-7 grid grid-cols-2 xl:grid-cols-3 mx-4 lg:mx-12 mt-4 lg:mt-8">
                        <h2 className={`hidden lg:block uppercase font-800 text-[64px] leading-[50px] text-${circuito.color}`}>{circuito.nombre}</h2>
                        <p className={`text-[24px] lg:text-[34px] text-center font-400 text-neutral-500 leading-[28px] lg:leading-[35px] col-span-7 lg:col-span-1 lg:w-96`}>{circuito.destacado}</p>
                        <div className="lg:flex lg:flex-row gap-6 lg:justify-end items-center col-span-7 lg:col-span-1">
                            <div className='flex justify-center'>
                                <p className={`bg-neutral-400 rounded-md my-2 text-white w-fit py-2 px-4 lg:bg-transparent lg:text-neutral-400 font-400 lg:pt-0 italic text-2xl text-center lg:text-right leading-6`}>Armá tu itinerario <br className='hidden lg:block'/> y descargalo</p>
                                {/* {favoritos.length === 0 ? (
                                    <p className="text-2xl font-400 text-neutral-400">No hay destinos seleccionados</p>
                                ) : (
                                    <p className="text-2xl font-400 text-neutral-400">Destinos seleccionados: {favoritos.length}</p>
                                )} */}
                            </div>
                            <BotonesPlanifica circuito={circuito} favoritos={favoritos} actualizarFavoritos={actualizarFavoritos}/>
                            
                        </div>
                    </div>
                    {/* <Image src={circuito.imagen} width={500} height={500} alt={circuito.nombre} className="absolute -bottom-10 left-0" /> */}
                    <div className="col-span-7 mt-4 mx-4 lg:mx-12 h-[75vh]">
                        <DestinoCard circuito={circuito} favoritos={favoritos} actualizarFavoritos={actualizarFavoritos} />
                    </div>
                </div>
            ))}
        </div>
    )
}
