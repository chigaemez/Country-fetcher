import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CountryList from './CountryList'

const CountryHolder = ({country}) => {
  const [search, setSearch] = useState('')

  



  return (
    <>
      <div className='flex flex-col justify-center items-center py-9 bg-slate-700'>
        <input
          type='text'
          className='w-[50%] h-[40px] outline-none px-3 rounded-md'
          placeholder='Type to Search for countries...'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='flex flex-wrap justify-center items-center gap-24 px-10 mt-40'>
        {country.filter(()).map((place, index) => (
          <CountryList key={index} place={place} />
        ))}
      </div>
    </>
  )
}

export default CountryHolder
