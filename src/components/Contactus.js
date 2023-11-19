import React from 'react'
import Navigationbar from './Navigationbar'
import Bookingform from './Bookingform'
import Footers from './Footers'


function Contactus() {
  return (
    <div>
        <div>
            <Navigationbar />
        <div className='heading-content'>
            <h1 className='content-headline'>Contact Us</h1>
        </div>
            <Bookingform />
        </div>
        <div>
            <Footers/>
        </div>
    </div>
  )
}

export default Contactus