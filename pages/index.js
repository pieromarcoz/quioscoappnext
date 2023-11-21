import Layout from "@/layout/Layout";
import useQuiosco from "@/hooks/useQuiosco";
import Producto from "@/components/Producto";

export default function Home({}) {
    const { categoriaActual } = useQuiosco()
  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
        <p className={'text-2xl my-10'}>Elige y personaliza tu pédido a continuación</p>
        <div className={'grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'}>
            {categoriaActual?.Producto?.map(producto => (
                <Producto key={producto.id} producto={producto}/>
            ))}
        </div>
    </Layout>
  )
}
/*
export const getServerSideProps = async () => {
    const prismaClient = new PrismaClient()
    const categorias = await prismaClient.categoria.findMany({
        where: {
            nombre: "Pizzas",
        }
    })
    return {
        props: {
            categorias
        }
    }
}
*/
