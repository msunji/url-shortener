import '../styles/components/Button.scss';

const Button = ({ color, shape, children, copied }) =>{
  return (
    <button className={`button-${color} ${shape} ${copied}`} >{children}</button>
  )
}
export default Button;