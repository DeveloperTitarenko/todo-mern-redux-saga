import './Loader.scss'

export const Loader = () => (
  <button className="btn btn-primary" type="button" disabled style={{background: '#394BEB', fontSize: '1.6rem', display: 'flex', alignItems: "center"}}>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
)