import '../styles/components/Button.scss';

const Button = ({ color, shape, children }) =>{
  return (
    <button className={`button-${color} ${shape}`} >{children}</button>
  )
}
export default Button;