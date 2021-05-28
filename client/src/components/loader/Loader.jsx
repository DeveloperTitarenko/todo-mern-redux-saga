import './Loader.scss'

export const Loader = () => (
  <button className="btn btn-primary" type="button" disabled style={{background: '#394BEB'}}>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
)