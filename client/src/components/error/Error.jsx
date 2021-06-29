import './Error.scss'
export const Error = ({text}) => (
  <div className="alert alert-danger error" role="alert" >
    <p style={{textAlign: 'center'}}>{text}</p>
  </div>
)