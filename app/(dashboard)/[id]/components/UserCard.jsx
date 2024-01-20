import React from 'react'

export default function UserCard({user}) {
  return (
    <div
  
    className="space-y-1 flex flex-wrap justify-between gap-6 p-4 "
  >
    <p className="">
      <span className="font-extrabold">{user.id} -</span>{" "}
      {user.firstName} {user.lastName}{" "}
    </p>
    <p> {user.email} </p>
  </div>
  )
}
