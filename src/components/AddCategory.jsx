import { useState } from 'react';

{/* Recibo desde el componente padre "GifExpertApp" la función "setCategories" */}
export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('One Punch');

  // Para obtener el evento accedo con "event.target.value" o lo puedo desestructurar:
  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    // Acá el "preventDefault" evita que el formulario recargue la pagina web al hacer "click" en el enter
    event.preventDefault();

    // Validar que en el input no se ingresen menos de dos caracteres
    if ( inputValue.length <= 1 ) return;

    // Recibo las categorias actuales desde "setCategories" y las inserto junto al valor del input
    setCategories( categories => [ inputValue, ...categories ]);

    // "Limpiar" el valor/texto del input al agregar un nuevo valor
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
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
