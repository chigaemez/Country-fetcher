import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const CountryList = ({ country }) => {
  const [search, setSearch] = useState('')

  const [countryitem, setcountryItem] = useState(null)
  const [showSlider, setShowSlider] = useState(false)
  const sliderRef = useRef(null)

  const handleMemberClick = place => {
    setcountryItem(place)
    setShowSlider(true)
  }

  const handleClickOutsideSlider = event => {
    setShowSlider(false)
  }

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center py-9 bg-slate-700'>
        <input
          type='text'
          className='w-[50%] h-[40px] outline-none px-3 rounded-md'
          placeholder='Type to Search for countries...'
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <Link className='flex flex-wrap justify-center items-center gap-24 px-10 mt-40'>
        {country
          .filter(place => {
            return search.toLowerCase() === ''
              ? place
              : place.name.common.toLowerCase().includes(search)
          })
          .map((place, index) => (
            <div
              key={index}
              className=' '
              onClick={() => handleMemberClick(place)}
            >
              <img src={place.flags.png} alt='' />
              <h1 className='text-center text-2xl font-medium w-[350px]'>
                Name: {place.name.common}
              </h1>
              <h1 className='text-center text-2xl font-medium w-[350px]'>
                Capital: {place.capital}
              </h1>
            </div>
          ))}
      </Link>

      {countryitem && showSlider && (
        <div
          ref={sliderRef}
          className='fixed top-20 right-0 h-full w-full bg-gray-800 text-white p-4'
        >
          <Link onClick={handleClickOutsideSlider} className='my-12'>
            Back
          </Link>
          <img src={countryitem?.flags.png} alt='' className='mx-auto my-10' />
          <h1 className='font-semibold text-xl text-center text-white'>
            Country: {countryitem?.name?.common}
          </h1>
          <p className='text-white text-lg text-center'>
            Capital: {countryitem?.capital}
          </p>
          <p className='text-white text-lg text-center'>
          Continents: {countryitem?.continents}
          </p>
          <p className='text-white text-lg text-center'>
          Time Zones: {countryitem?.timezones}
          </p>
          <p className='text-white text-lg text-center'>
            Language: {countryitem?.languages?.ara}
          </p>
          <p className='text-white text-lg text-center'>
            Population: {countryitem?.population}
          </p>
          
        </div>
      )}
    </div>
  )
}

export default CountryList
