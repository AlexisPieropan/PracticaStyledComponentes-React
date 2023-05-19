import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icono ,IconoTema} from "./Components/UI";
import React from "react";

//FUNCION PARA FILTRAR DE UN ARRAY SEGUN LA CATEGORIA DEVOLVER LA IMG Y PINTARLA EN UN COMPONENTE
export default (type)=>{
    
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />, 
        Salud: <IconoTema src={salud} alt="Salud" />, 
        Otros: <IconoTema src={otros} alt="Otros" />, 
        Transporte: <IconoTema src={transporte} alt="Transporte" />, 
        Utilidades: <IconoTema src={utilidades} alt="utilidades" />, 
        default:<IconoTema src={otros} alt="Otros" />, 
    };

    return Images[type] || Images["default"];
}