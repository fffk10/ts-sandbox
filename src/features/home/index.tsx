import { Link } from 'react-router-dom'
import Aspida from '../aspida'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <Link to='/aspida'>
            <Aspida />
          </Link>
        </li>
      </ul>
    </div>
  )
}
