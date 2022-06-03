import './button.css' //importando los estilos


const Button = ({title}) => {
    return (
           <button href={title} className="boton">{title}</button>
        //aca decimos que le hacemos una redireccion al titulo
        //className lo que hacemos es darle un estilo css
        //con las llaves le decimos el texto que va a tener el boton
    )
}

export default Button