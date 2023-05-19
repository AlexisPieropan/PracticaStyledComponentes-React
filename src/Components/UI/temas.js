import {
    fondoClaro,
    conenidoClaro,
    textoFondoClaro,
    fondoOscuro,
    conenidoOscuro,
    textoFondoOscuro,
}from "./Variables";

export const temaClaro={
    body:fondoClaro ,
    inside: conenidoClaro,
    text: textoFondoClaro,
    filter:""
};

export const temaOscuro={
    body:fondoOscuro ,
    inside: conenidoOscuro,
    text: textoFondoOscuro,
    filter:"invert(100%)",
};