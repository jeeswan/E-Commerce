import React from 'react'
import {Routes,Route} from 'react-router-dom'
import home from './pages/Home'
import about from './pages/About'
import contact from './pages/Contact'
import product from './pages/Product'
import cart from './pages/Cart'
import login from './pages/Login'
import placeOrder from './pages/PlaceOrder'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vm] md:px-[9vw]'>
      <navbar />
      <Routers>
        <Route path='/' element={<home/>}></Route>
        <Route path='/collection' element={<collection/>}></Route>
        <Route path='/about' element={<about/>}></Route>
        <Route path='/contact' element={<contact/>}></Route>
        <Route path='/product/:productID' element={<product/>}></Route>
        <Route path='/cart' element={<cart/>}></Route>
        <Route path='/login' element={<login/>}></Route>
        <Route path='/placeOrder' element={<placeOrder/>}></Route>
        <Route path='/orders' element={<orders/>}></Route>
      </Routers>
    </div>
  )
}

export default App
