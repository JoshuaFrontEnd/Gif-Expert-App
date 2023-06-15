// Al usar "await" la funcion tiene que ser "async()",
export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/stickers/search?api_key=viEyxNItWKqPrKfPuVWlAcspcvWoG1UY&q=${ category }&limit=10`;
  const resp = await fetch( url );
  // Al igualar "data" a un arreglo vacio, basicamente nos aseguramos de que siempre haya "data"
  const { data = [] } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

}