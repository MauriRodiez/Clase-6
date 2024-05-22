import registerStyle from '../Styles/Registro.module.css'

const Registro = ( {usuarios} ) => {
  
  return (
    <>
        <ul className={registerStyle.registerContainer}>       
            {usuarios.map( (user, index) => (
              <li key={index}>
                Usuario: {user.nombre} - {user.edad} - {user.equipo}
                </li>
            ))}    
        </ul>
    </>
  )
}

export default Registro