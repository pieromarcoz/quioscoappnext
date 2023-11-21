import {useContext} from "react";
import QuioscoContext from "@/context/QuioscoProvides";

const useQuiosco = () => {
    return useContext(QuioscoContext)
}

export default  useQuiosco