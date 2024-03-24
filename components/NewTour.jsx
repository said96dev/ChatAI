'use client'

import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  generateTourResponse,
  getExistingTour,
  createNewTour,
} from '@/utils/action'
import toast from 'react-hot-toast'
import TourInfo from './TourInfo'
const NewTour = () => {
  const queryClient = useQueryClient()

  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination)
      if (existingTour) {
        return existingTour
      }
      const newTour = await generateTourResponse(destination)
      if (newTour) {
        await createNewTour(newTour)
        queryClient.invalidateQueries({
          queryKey: ['tours'],
        })
        return newTour
      }
      if (!newTour) {
        toast.error('No tour information available')
        return null
      }
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const destination = Object.fromEntries(formData.entries())
    mutate(destination)
  }

  if (isPending) {
    return <p className="loading-lg loading">Loading...</p>
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4"> Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="w-full input input-borderd join-item"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="w-full input input-borderd join-item"
            placeholder="country"
            name="country"
            required
          />
          <button className="btn btn-primary join-item" type="submit">
            generate Tour
          </button>
        </div>
      </form>
      <div className="mt-16">{tour ? <TourInfo tour={tour} /> : null}</div>
    </>
  )
}

export default NewTour
