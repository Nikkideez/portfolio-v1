import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Loader } from './components'

const LazyHero = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return import('./components/Hero');
});

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          {/* {isLoading && <Loader /> } */}
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <LazyHero />
          </div>
          <About />
          <Tech />
          <Experience />
          {/* <div className='flex mr-[0px] mb-[80px]'>
          <Cogwheel />
        </div>
        <CogwheelSide className='hidden'/> */}
          <Works />
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
