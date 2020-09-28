import React, {useContext} from 'react'
import { UserContect } from './UserContext'

export const HomeScreen = () => {
  const {user} = useContext(UserContect);
  console.log(user);
  return (
    <div>
      <h1>Home Screen</h1>
      <hr/>
      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>
    </div>
  )
}
