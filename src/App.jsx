import React  from "react";
import { useState, useEffect } from "react";




function App() {

const [nombre, setNombre] = useState("nombre")
const [prioridad, setPrioridad] = useState("");
const [descripcion, setDescripcion] = useState("");
const [aceptarTerminos, setAceptarTerminos] = useState(false);
const [data,setTickets] = useState ("")



useEffect(() => {
  fetch('http://localhost:8000/tickets')
    .then(res => {
      return res.json()
    })
    .then(data => {
    setTickets(data) 
    })
  }, []);


const onChangeNombre = (event) => {
  setNombre(event.target.value)
}
const onChangePrioridad = (event) => {
  setPrioridad(event.target.value);
};

const onChangeDescripcion = (event) => {
  setDescripcion(event.target.value);
};

const onToggleAceptarTerminos = () => {
  setAceptarTerminos(!aceptarTerminos);
};


const onsubmitForm = (event) => {
 event.preventDefault()

 if (nombre.length < 6){
  alert("El nombre debe tener al menos 6 caracteres")
}
else if (nombre.length > 18){
  alert("El nombre tiene mas de 18 caracteres ")
}
else{
  console.log("Datos del Ticket:", { nombre, prioridad, descripcion, aceptarTerminos });
}

if(descripcion.length >  30){
  alert("tiene mas de 30 caracteres, porfavor escribe algo mas pequeño")
}

}

  return(
    <form className="formulario" onSubmit={onsubmitForm}>
      <h1>Tickets</h1>
      <label>
        Titulo del Ticket:
        <input type="text" name="nombre" onChange={onChangeNombre} value={nombre}  />
      </label>
      <label>

        Prioridad:
        <select value={prioridad} onChange={onChangePrioridad}>
          <option value="">Seleccionar</option>
          <option value="baja">1</option>
          <option value="media">2</option>
          <option value="alta">3</option>
        </select>
      </label>

      <label>
        Descripcion
        <textarea className="descripcion" name="descripcion" onChange={onChangeDescripcion} value={descripcion}></textarea>
      </label>

      <label>
        <input type="checkbox" name="aceptarTerminos" checked={aceptarTerminos} onChange={onToggleAceptarTerminos} />
        Aceptar términos y condiciones
      </label>
      
      <button type="submit" value="enviar">
        Enviar
      </button>
    </form>
  )
}

export default App;