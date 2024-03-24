'use client'
import { useQuery } from '@tanstack/react-query'
import { getAllTours } from '@/utils/action'
import React, { useState } from 'react'
import ToursList from './ToursList'

const ToursPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const { data, isPending } = useQuery({
    queryKey: ['tours', searchValue],
    queryFn: () => getAllTours(searchValue),
  })
  return (
    <>
      <form className="max-w-lg mb-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="enter city"
            className="input input-bordered join-item w-full"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <button
            className="btn btn-primary join-item "
            type="button"
            disabled={isPending}
            onClick={() => setSearchValue(' ')}
          >
            {isPending ? 'please wait' : 'reset'}
          </button>
        </div>
      </form>

      {isPending ? (
        <div className="text-center ">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <ToursList data={data} />
      )}
    </>
  )
}

export default ToursPage
