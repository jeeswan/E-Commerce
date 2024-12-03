import React from 'react'
import {Routes,Route} from 'react-router-dom'
import home from './pages/home'
import about from './pages/about'
import contact from './pages/contact'
import product from './pages/product'
import cart from './pages/cart'
import login from './pages/login'
import placeOrder from './pages/placeOrder'

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
