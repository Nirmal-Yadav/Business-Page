import { Typography } from "@mui/material";
import React from "react";
import './container4.css'
import Image1 from '../../assests/video-bg.png'

function Container4() {
	return (
		<div className="container4">
			<div className="container4-main" >
				<button className="intro-button">Our Intro Video</button>
				<Typography className="container4-content1" sx={{fontSize:'xx-large', fontWeight:'700'}}>
					Watch Our Promo Video
				</Typography>
				<Typography className="container4-content2">
					There are many variations of passages of Lorem Ipsum available,
					but the majority have suffered alteration in some form.
				</Typography>
				<div className="img1-container">
					<img className="image1" src={Image1} />
					
				</div>
				
			</div>
			<div className="img2-container">
				<img   className="image2" src="https://img.icons8.com/stickers/100/000000/play.png"/>
				</div>

		</div>
	)
}
export default Container4
