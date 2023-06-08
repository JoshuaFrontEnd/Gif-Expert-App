import { useState } from 'react';

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Resident Evil');

  // Para obtener el evento accedo con "event.target.value" o lo puedo desestructurar:
  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    // Acá el "preventDefault" evita que el formulario recargue la pagina web al hacer "click" en el enter
    event.preventDefault();
    console.log( inputValue);
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
