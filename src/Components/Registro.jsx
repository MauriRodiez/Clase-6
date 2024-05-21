import registerStyle from '../Styles/Registro.module.css'

const Registro = ( {usuario} ) => {
    const {nombre, edad, equipo} = usuario
  return (
    <>
        <div className={registerStyle.registerContainer}>       
            <h2>Registro</h2>
            <h4>Nombre: {nombre}</h4>
            <h4>Edad: {edad}</h4>
            <h4>Equipo: {equipo}</h4>    
        </div>
    </>
  )
}

export default Registro