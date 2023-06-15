/* ----------------------------------------------------------------
  Creación de un Custom Hook
----------------------------------------------------------------

  - Un Hook es basicamente un función que retorna algo, en este caso estoy creando un Hook personalizado de una función que retorna un objeto
  - Los Hooks pueden tener su propio estado de manera independiente

---------------------------------------------------------------- */

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true )

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading( false );
  }

  /* ----------------------------------------------------------------
  El Hook Effect, es un Hook de React que sirve para disparar eventos secundarios, ¿Qué se entiende por efecto secundario? Se entiende un proceso que quiero ejecutar cuando algo suceda, por ejemplo: Cuando la categoría cambie quiero disparar un efecto, cuando el componente se renderice por primera vez quiero disparar un efecto, etc
  https://es.react.dev/reference/react#effect-hooks
  ---------------------------------------------------------------- */
  useEffect(() => {
    getImages();
  }, [])

  return {
    /* ----------------------------------------------------------------
    En Ecmascript 6 cuando tenemos una propiedad que tiene un nombre igual a la varible que esta apuntando se puede dejar solo el nombre una vez, ejemplo:
    images: images queda como:
    ---------------------------------------------------------------- */
    images,
    isLoading
  }
}
