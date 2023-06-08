// Cuando se llame un Hook especifico de React, se debe de importar desde la libreria
import { useState } from "react";

export const GifExpertApp = () => {

  // Usando el Hook "useState" de React (esto es basicamente una variable de estado)
  // Cuando llamamos al useState, le estamos diciendo a React que debe recordar algo
  // "categories" es una variable de estado y "setCategories" es la función que setea el estado
  const [ categories, setCategories ] = useState(['One Punch', 'Dragón Ball']);

  /* Agregar una nueva categoría
    En React al querer insertar un nuevo elemento a un array es preferible no usar el metodo "push", ya que en general este metodo es utilizado para mutar un objeto y React (hasta donde es posible) intenta evitar las mutaciones de estado.

    Entonces para poder insertar un nuevo elemento, en este caso al array de "categories", hay que crear un nuevo estado del componente, osea basicamente crear otro arreglo y para eso usamos el elemento "setCategories"
  */
  const onAddCategory = () => {
    // Al usar "setCategories" copiamos el arreglo y le agregamos un valor nuevo, en este caso al principio del nuevo arreglo
    setCategories(['Resident Evil', ...categories]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gif's */}
      <button onClick={ onAddCategory }>Agregar</button>
      <ol>
        {/* Cuando se utilizan metodos para recorrer arreglos (como "map" por ejemplo) React nos pide asignar obligatoriamente un atributo de nombre "key" de valor unico al elemento que será iterado, de esta manera React puede identificar que elementos han cambiado de manera dinamica

        Más información acá: https://www.escuelafrontend.com/prop-key-en-react

        */}
        { categories.map( category => <li key={ category }>{ category }</li> )}
      </ol>
    </>
  )
}


/* ----------------------------------------------------------------
  Apuntes adicionales

  - Cuando haya que almacenar información y esa información tiene que cambiar el HTML, se debe utilizar un Hook de React para mantener el estado

  Más información acá: https://es.react.dev/learn/state-a-components-memory

  - Cuando se setean multiples variables de estado React para identificarlas crea un array con cada variable, de esta manera puede identificarlas mediante su indice, debido a esto, no se deben setear variables de estado adentro de funciones o ciclos iterativos
---------------------------------------------------------------- */

