import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

/* ----------------------------------------------------------------
  La forma de hacer esta petición dentro de un functional component es una pesima practica (Revisar apuntes adicionales en ../GifExpertApp.jsx)

  El codigo sera factorizado, pero quedara comentado, se hizo de esta forma para fines educativos
  ----------------------------------------------------------------

  // Al usar "await" la funcion tiene que ser "async()",
  const getGifs = async() => {

    const url = `http://api.giphy.com/v1/stickers/search?api_key=viEyxNItWKqPrKfPuVWlAcspcvWoG1UY&q=${ category }&limit=20`;
    const resp = await fetch( url );
    // Al igualar "data" a un arreglo vacio, basicamente nos aseguramos de que siempre haya "data"
    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    console.log( gifs );
  }
---------------------------------------------------------------- */

  // El Hook Effect, es un Hook de React que sirve para disparar eventos secundarios, ¿Qué se entiende por efecto secundario? Se entiende un proceso que quiero ejecutar cuando algo suceda, por ejemplo: Cuando la categoría cambie quiero disparar un efecto, cuando el componente se renderice por primera vez quiero disparar un efecto, etc
  // https://es.react.dev/reference/react#effect-hooks
  useEffect(() => {
    getGifs( category );
  }, [])

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}
