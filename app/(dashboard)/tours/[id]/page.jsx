import React from 'react'
import { getSingleTour } from '@/utils/action'
import Link from 'next/link'
const SingelTourPage = async ({ params }) => {
  const tour = await getSingleTour(params.id)
  if (!tour) {
    return (
      <div className="text-center">
        <Link href="/tours" className="btn btn-secondary mb-12">
          No tour found
        </Link>
      </div>
    )
  }
  return (
    <div>
      <Link href="/tours" className="btn btn-secondary mb-12">
        back to tours
      </Link>
      {tourImage ? (
        <div>
          <Image
            src={tourImage}
            width={300}
            height={300}
            className="rounded-xl shadow-xl mb-16 h-96 w-96 object-cover"
            alt={tour.title}
            priority
          />
        </div>
      ) : null}
      <TourInfo tour={tour} />
    </div>
  )
}

export default SingelTourPage
