import React, { useEffect } from 'react'

export const Message = () => {
  useEffect(() => {
    console.log('Component Mount')
    return () => {
      console.log('Component Unmount')
    }
  }, [])
  return (
    <div>
      <h3>Great Hooks</h3>
    </div>
  )
}
