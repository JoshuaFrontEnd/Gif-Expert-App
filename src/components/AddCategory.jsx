import { useState } from 'react';

{/* Recibo desde el componente padre "GifExpertApp" la función "setCategories" */}
// export const AddCategory = ({ setCategories }) => {

{/* Recibo desde el componente padre "GifExpertApp" la función "onNewCategory", esto lo estoy haciendo asi, porque es la manera recomendada de hacerlo */}
export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState();

  // Para obtener el evento accedo con "event.target.value" o lo puedo desestructurar:
  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    // Acá el "preventDefault" evita que el formulario recargue la pagina web al hacer "click" en el enter
    event.preventDefault();

    // Validar que en el input no se ingresen menos de dos caracteres
    if ( inputValue.trim().length <= 1 ) return;

    // Recibo las categorias actuales desde "setCategories" y las inserto junto al valor del input
    // setCategories( categories => [ inputValue, ...categories ]);

    // De esa manera es mucho mas sencillo obtener las categorías
    onNewCategory( inputValue.trim() );

    // "Limpiar" el valor/texto del input al agregar un nuevo valor
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        // Evitando el warning de consola que avisa sobre el cambio de valor undefined a definido
        value =  { inputValue || ''}
        onChange={ onInputChange }
      />
    </form>
  )
}

/* ----------------------------------------------------------------
  Apuntes adicionales

  - En React, cuando tenemos la siguiente declaracion:

  onSubmit={ ( event ) => onSubmit(event) }

  donde tenemos una función con el primer argumento igual al parametro de la funcion que quiero ejecutar, esto se puede refactorizar escribiendolo de la siguiente manera:

  onSubmit={ onSubmit }
---------------------------------------------------------------- */
