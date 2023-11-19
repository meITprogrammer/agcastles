import React from "react"
import { Link } from 'react-router-dom';
import logo from "../Images/logo.jpg"

const Footers = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-5 mt-md-0 mt-3">
                 <a href="/"><img src={logo} width={200} alt='agcastle_logo'/></a>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Our Castles</h5>
                <ul className="list-unstyled">
                    <li><Link to='/bouncycastle'>Bouncy Castle</Link></li>
                    <li><Link to='/softplayhire'>Soft Play Hire</Link></li>
                    <li><Link to='/otherpartyhire'>Other Party Hire</Link></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 nav-title">
                <h5 className="text-uppercase">Main Menu</h5>
                <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                    <li><Link to='/booknow'>Book Now</Link></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright
        <a href='https://agcastlescom/' style={{textDecoration:'none' }}> AG Castles & Kids Party Hire</a>
    </div>

</footer>

export default Footers