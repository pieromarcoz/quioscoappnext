import Image from "next/image";
import {formatearDinero} from "@/helpers";
import UseQuiosco from "@/hooks/useQuiosco";
const Producto = ({producto}) => {
    const {handleSetProducto, handleChangueModal, modal} = UseQuiosco()
    const {nombre, precio, imagen} = producto
    return (
        <div className={'border p-3'}>
            <Image src={`/assets/img/${imagen}.jpg`} alt={`Imagen Platillo ${nombre}`} width={400} height={500}/>
            <div className={'p-5'}>
                <h3 className={'text-2xl font-bold'}>{nombre}</h3>
                <p className={'mt-5 font-black text-4xl text-amber-500'}>{formatearDinero(precio)}</p>
                <button type={'button'} className={'bg-indigo-600 hover:bg-indigo-800 text-white font-bold w-full p-3 mt-5 uppercase'}
                        onClick={() => {
                            handleChangueModal()
                            handleSetProducto(producto)
                        }}>
                    Agregar
                </button>
            </div>
        </div>
    );
};

export default Producto;
