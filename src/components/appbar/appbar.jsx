import React from 'react'
import "./appbar.css"
import Logo from '../../assests/logobusiness.jpg'
import Nav from '../../assests/icon1.jpg'

function NavBar() {
	return (
		<div className='appbar1-container'>
			<div className='appbar-main'>
				<div className='navbar-logo-container'>
					<img className='navbar-logo' src={Logo} />
				</div>
				<button className='business1-container'>
					Bussiness
				</button>
				<div className='nav-button-container'>
					<button className='nav-button'>Home</button>
					<button  className='nav-button'>Services</button>
					<button  className='nav-button'>Portfolio</button>
					<button  className='nav-button'>Pricing</button>
					<button  className='nav-button'>Team</button>
					<button  className='nav-button'>Contact</button>
				</div>
				<div className='navbar-img-container'>
					<img className='navbar-img' src={Nav} />
				</div>
			</div>
		</div>
	)
}

export default NavBar;