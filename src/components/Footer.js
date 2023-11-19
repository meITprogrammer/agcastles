import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';


function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-black'>
      <MDBContainer className='p-1 pb-0'>
        </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'white', textDecoration:'none' }}>
        © 2023 Copyright
        <a className='text-black' href='https://agcastlescom/' style={{textDecoration:'none' }}>
           <span></span> AG Castles & Kids Party Hire
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer;