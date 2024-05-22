
import { useState } from "react"
import formStyle from "../Styles/Form.module.css"
import Registro from "./Registro"

const Form = () => {

    // Estado de los input
    const [user, setUser] = useState({
        nombre: "",
        edad: "",
        equipo: ""
    })

    // Estado para la lista de usuarios
    const [listUsers, setListUsers] = useState([])

    // Estados para exito y error y mostrar o no el resultado
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    // Evento de input nombre
    const handleName = (event) => setUser({
        ... user, nombre: event.target.value})
    // Evento de input edad
    const handleEdad = (event) => setUser({
        ... user, edad: event.target.value})
    // evento para input equipo
    const handleTeam = (event) => setUser({
        ... user, equipo: event.target.value})    
    
    // Evento para el submit
    const handleSubmit = (event) => {
        event.preventDefault();

        if(
            user.nombre.trim().length > 3 &&
            user.edad.trim().length < 3 &&
            user.equipo.trim().length > 3
        ){
            setListUsers([...listUsers, user])
            setShow(true)
            setError(false)
            // Limpiar los campos de entrada
            setUser({
                nombre: "",
                edad: "",
                equipo: ""
            })
        } else {
            setError(true)
        }
    }


  return (
    <>
        <h1 className={formStyle.titulo}>Formulario de Registro</h1>
        <form className={formStyle.formulario} onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" value={user.nombre} onChange={handleName} />
            <label>Edad: </label>
            <input type="text" value={user.edad} onChange={handleEdad} />
            <label>Equipo de Fútbol: </label>
            <input type="text" value={user.equipo} onChange={handleTeam} /> 
            <button>Registro</button>
        </form>
        <h2>Registro</h2>
        {show && <Registro usuarios={listUsers} />}
        {error && (
        <p style={{ color: "red" }}>
          Debe colocar la información correctamente
        </p>
      )}
    </>
  )
}

export default Form