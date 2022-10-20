import React from 'react'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
  const user = useSelector(state=> state.User.user)
  return (
    <div>
      <h2>Welcome {user?.name} </h2>
    </div>
  )
}

export default ProfilePage

