import './Input.scss'

const Input = ({textLabel, type, name, placeholder, value, onChange, style}) => {

  return(
    <label>{textLabel}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={style}
        />
    </label>
  )
}
export default Input