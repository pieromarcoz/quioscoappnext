import {  useState, useEffect, createContext } from 'react'
import axios from "axios";
import categoria from "@/components/Categoria";

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const obtenerCategorias = async () => {
        const {data} = await  axios('/api/categorias')
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])
    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangueModal = () => {
        setModal(!modal)
    }

    const nombre  =  ["Ana", "Luis", "Carlos", "Diana"]
    const handleAñadir = () => {
        const nuevosNombres = nombre.filter(nombre => nombre !== "Carlos")
        const añadirnombre = [...nuevosNombres, "Jose"]
        console.log(añadirnombre)
    }
    handleAñadir()

    const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
        setPedido([...pedido, producto])
        console.log(pedido)
    }
    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                handleSetProducto,
                handleChangueModal,
                modal,
                producto,
                handleAgregarPedido
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}
export default QuioscoContext