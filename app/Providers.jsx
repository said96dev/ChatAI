'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const Providers = ({ children }) => {
  const [queryCLient] = useState(() => {
    return new QueryClient({
      queries: {
        staleTime: 60 * 1000,
      },
    })
  })
  return (
    <QueryClientProvider client={queryCLient}>
      <Toaster position="top-center" />
      {children}
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  )
}

export default Providers
