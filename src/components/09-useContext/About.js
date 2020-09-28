import React, { useContext } from 'react'
import { UserContect } from './UserContext'

export const About = () => {
  const {user, setUser} = useContext(UserContect);

  const handleClick = () => {
    setUser({});
  }

  return (
    <div>
      <h1>About Screen</h1>
      <hr/>
      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>

      <button className="btn btn-warning" onClick={handleClick}>
        LogOut
      </button>
    </div>
  )
}
