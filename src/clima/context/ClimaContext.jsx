import { createContext, useState } from "react"
//import { ClimaContext } from "./ClimaContext";


const cli01 = [

  {
    id: 1,
    nombre: "Jujuy",
    latitud: -24.185930418908384,
    longitud: -65.29932514190581,
    activo: true,
    temperatura:3,
    velViento:3,
  },
  
  {
    id: 2,
    nombre: "Jujuy2",
    latitud: -24.185930418908384,
    longitud: -65.29932514190581,
    activo: true,
    temperatura:3,
    velViento:3,
  },

  
  {
    id: 3,
    nombre: "Jujuy3",
    latitud: -24.185930418908384,
    longitud: -65.29932514190581,
    activo: true,
    temperatura:3,
    velViento:3,
  },

]

export const ClimaContext = createContext({
  ClimaList: [],
  setClima: () => {}
});


export const ClimaProvider = ({ children }) => {
    const [ climaList, setClima ] = useState(cli01);
    //const value = { climaList, setClima };   

  return (
           <ClimaContext.Provider value=
            {{ climaList, setClima }}
          >
            { children }
           </ClimaContext.Provider>
            )
  
}
