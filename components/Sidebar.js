import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import Categoria from "@/components/Categoria";
export default function Sidebar({}) {
    const {categorias} = useQuiosco()
    return (
        <>
            <Image width={300} height={100} src={"/assets/img/logo.svg"} alt={"Logo Cafeteria"}/>
            <nav className={'mt-10'}>
                {categorias.map(categoria => (
                    <Categoria categoria={categoria}/>
                ))}
            </nav>
        </>
    )
}