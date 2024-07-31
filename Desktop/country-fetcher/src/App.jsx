import { Route, Routes } from 'react-router-dom'
import Header from './Pages/Header'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CountryList from './components/CountryList'

function App () {
  const [country, setcountry] = useState([])


  const fetchData = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')

    setcountry(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Routes>
        
        <Route path='/' element={<CountryList country={country} />} />
        <Route path='/header' element={<Header />} />
      </Routes>
    </>
  )
}

export default App
