import React from 'react'
import Nav from './Nav'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <div className='bg-black min-h-screen'>
        <h1 className='text-nav-link'>Home</h1>
      </div>
    </>
  )
}

export default Home
