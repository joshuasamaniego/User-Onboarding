import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }
  console.log(details);

  return (
    <div className='user container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Agreed To Terms: {details.termsOfService}</p>
    </div>
  )
}

export default User;