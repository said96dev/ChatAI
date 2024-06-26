import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl fornt-bold text-primary">GPT AI</h1>
          <p className="py-6 text-lg leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            facilis rerum eveniet deleniti! Non earum, similique quae illum
            voluptas quia culpa porro necessitatibus maiores cumque error
            blanditiis ipsa dolorum aspernatur.
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
