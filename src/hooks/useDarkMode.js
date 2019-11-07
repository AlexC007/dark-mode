import React, {useState, useEffect} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";

const useDarkMode = () => {
    const [values, setValues]= useLocalStorage("false");
    useEffect (() => {
  if (values === false) {
         document.body.classList.add("dark-mode")
  } else{
      document.body.classList.remove("dark-mode")
  }
 }, [values]);
 return [values, setValues];

}
export default useDarkMode;