import Home from '../home'
import { Link } from 'react-router-dom'

export default function Aspida() {
  return (
    <div>
      <Link to='/'>
        <Home />
      </Link>
      <h2>Aspida</h2>
    </div>
  )
}
