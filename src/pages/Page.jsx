import React from 'react'
import House from './House'
import {Routes,Route, useLocation } from 'react-router-dom'
import Cuisin from './Cuisin'
import Searched from './Searched'
import Recipe from './Recipe'
import {AnimatePresence} from 'framer-motion'
function Page() {
  const location = useLocation();
  return (
  <>
<AnimatePresence mode='wait'>
  <Routes Location={location} key={location.pathname}>
    <Route path="/" element={<House/>} />
    <Route path="/cuisin/:type" element={<Cuisin/>} />
    <Route path="/Searched/:search" element={<Searched/>} />
    <Route path="/recipe/:name" element={<Recipe/>} />
  </Routes>
</AnimatePresence>

  </>
  )
}

export default Page