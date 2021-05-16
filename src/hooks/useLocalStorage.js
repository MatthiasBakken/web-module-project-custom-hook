import React, { useState, useEffect } from "react";


export const useLocalStorage = ( key, initialValue ) => {
  const [ storedValue, setStoredValue ] = useState( () => {
    const item = localStorage.getItem( key );

    return item ? JSON.parse( item ) : initialValue;
  } );

  const setValue = ( value ) => {
    localStorage.setItem( key, value );
    setStoredValue( value );
  };

  return [ storedValue, setValue ];
};