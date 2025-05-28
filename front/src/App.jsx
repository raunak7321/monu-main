import React from 'react'
import Header from './component/Page/Header'
import Routess from './component/Page/Routess'
import Footer from './component/Page/Footer'
import Whatsapp from './component/SubPage/Whatsapp'
// import Youtube from './component/SubPage/Youtube'
import Call from './component/SubPage/Call'

const App = () => {
  return (
    <div>
      <Header/>
         <Routess/>
      <Footer/>
      <Whatsapp/>
      {/* <Youtube /> */}
      <Call/>
      <p className='text-center bg-black font-serif py-1 text-white'>&copy; 2024 Manasvi Technologies OPC Pvt Ltd. All rights reserved.</p>
    </div>
  )
}

export default App