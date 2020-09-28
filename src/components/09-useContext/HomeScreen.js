import React, {useContext} from 'react'
import { UserContect } from './UserContext'

export const HomeScreen = () => {
  const userContext = useContext(UserContect);
  console.log(userContext);
  return (
    <div>
      <h1>Home Screen</h1>
      <hr/>
    </div>
  )
}
