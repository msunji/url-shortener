import '../styles/components/Button.scss';


const Button = (props) =>{
  return (
    <button className={`button-${props.color} ${props.shape}`}>{props.children}</button>
  )
}

export default Button;