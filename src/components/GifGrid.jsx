import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

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

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
        {
          images.map( ( image ) => (
            <GifItem
              key={ image.id }
              { ...image }
            />
          ))
        }
      </div>

    </>
  )
}
