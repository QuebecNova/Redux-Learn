import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

export default function UserList() {

  const {users, error, loading} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  if (loading) {
    return <h1>загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  function getUsers() : JSX.Element[] {
    const usersArr = users.map(user => {
        return <div>{user.name}</div>
    })
    return usersArr
  }
  
  return (
    <div>
        {getUsers()}
    </div>
  )
}