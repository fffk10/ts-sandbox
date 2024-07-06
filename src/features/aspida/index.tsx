import { QueryClient, QueryClientProvider } from 'react-query'
import api from '../../../api/$api'
import aspida from '@aspida/axios'
import axios from 'axios'
import { useState } from 'react'

const client = api(
  aspida(axios, { baseURL: 'https://668889880ea28ca88b8572c2.mockapi.io/' })
)
const queryClient = new QueryClient()

export default function Aspida() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([])

  const handleGet = async () => {
    const data = await client.v1.users.$get()
    setUsers(data)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h2>Aspida</h2>

        <h3>GET /api/users</h3>
        <button onClick={handleGet}>Get</button>

        {users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </QueryClientProvider>
  )
}
