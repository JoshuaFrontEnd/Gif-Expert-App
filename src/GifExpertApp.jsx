// Cuando se llame un Hook especifico de React, se debe de importar desde la libreria
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  // Usando el Hook "useState" de React (esto es basicamente una variable de estado)
  // Cuando llamamos al useState, le estamos diciendo a React que debe recordar algo
  // "categories" es una variable de estado y "setCategories" es la función que setea el estado
  const [ categories, setCategories ] = useState(['One Punch', 'Dragón Ball']);

  /* Agregar una nueva categoría
    En React al querer insertar un nuevo elemento a un array es preferible no usar el metodo "push", ya que en general este metodo es utilizado para mutar un objeto y React (hasta donde es posible) intenta evitar las mutaciones de estado.

    Entonces para poder insertar un nuevo elemento, en este caso al array de "categories", hay que crear un nuevo estado del componente, osea basicamente crear otro arreglo y para eso usamos el elemento "setCategories"
  */
  const onAddCategory = ( newCategory ) => {

    // Validación para no repetir las Keys
    // https://www.udemy.com/course/react-cero-experto/learn/lecture/32007058#questions/17742002
    if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;

    // Al usar "setCategories" copiamos el arreglo y le agregamos un valor nuevo, en este caso al principio del nuevo arreglo
    setCategories([newCategory, ...categories]);

    console.log( newCategory );
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* Envío al componente hijo "AddCategory" la función "setCategories" */}
      {/* Esta es un manera de hacerlo pero no es la mas recomendable, asi que la voy a comentar y mas abajo creare la forma recomendable */}
      {/* <AddCategory setCategories={ setCategories }/> */}

      {/* Esta manera es mas recomendable, debido a que la propiedad que creamos, es semanticamente mas acorde a lo que estamos haciendo, es decir, estamos dando a entender que con esa propiedad vamos a agregar nuevas categorías */}
      <AddCategory onNewCategory={ onAddCategory }/>

      {/* Listado de Gif's */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      {/* <ol> */}
        {/* Cuando se utilizan metodos para recorrer arreglos (como "map" por ejemplo) React nos pide asignar obligatoriamente un atributo de nombre "key" de valor unico al elemento que será iterado, de esta manera React puede identificar que elementos han cambiado de manera dinamica

        Más información acá: https://www.escuelafrontend.com/prop-key-en-react

        */}
        {/* { categories.map( category => <li key={ category }>{ category }</li> )} */}
      {/* </ol> */}
      {
        categories.map( category =>
          <GifGrid key={ category } category={ category } />
        )
      }

    </>
  )
}


/* ----------------------------------------------------------------
  Apuntes adicionales

  - Cuando haya que almacenar información y esa información tiene que cambiar el HTML, se debe utilizar un Hook de React para mantener el estado

  Más información acá: https://es.react.dev/learn/state-a-components-memory

  - Cuando se setean multiples variables de estado React para identificarlas crea un array con cada variable, de esta manera puede identificarlas mediante su indice, debido a esto, no se deben setear variables de estado adentro de funciones o ciclos iterativos

  - Cada componente puede tener su propio estado, es decir sus propios Hooks
---------------------------------------------------------------- */

