import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = props => {
  const location = useLocation()
  const country = location.state?.country
  console.log(country)
  return (
    <>
      <h1 className='text-red-800 text-4xl' > {country ? country?.name?.common: "go back"}</h1>
    </>
  )
}

export default Header
