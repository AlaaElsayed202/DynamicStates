import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChanngeUsername from './component/ChanngeUsername.jsx'
import FanState from './component/FanState.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LastWay from './component/LastWay.jsx'
import MainHome from './component/MainHome.jsx'

createRoot(document.getElementById('root')).render(
 <>
<BrowserRouter>
<MainHome/>
<Routes>
  <Route path='/counter'element={<LastWay/>}/>
    <Route path='/changName'element={<ChanngeUsername/>}/>
       <Route path='/fanState'element={<FanState/>}/>
</Routes>
</BrowserRouter>
 </>
  

)
