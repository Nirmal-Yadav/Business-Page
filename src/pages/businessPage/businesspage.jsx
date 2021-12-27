import React from "react";
import "./businesspage.css"
import GirlImage from "../../assests/girl-img1.jpg"

import Button from '@mui/material/Button';
import { fontWeight } from "@mui/system";
import Container2 from "../container2/container";
import Container3 from "../container3/container3";
import Container4 from "../container4/container4";
import Container5 from "../container5/container5";
import Container6 from "../Container6/container6";
import { AppBar } from "@mui/material";
import NavBar from "../../components/appbar/appbar";



function Business() {
	return (
		<div>
			<body className="body-container">
				<div className="body-left-container">
					<div className="body-left-main">
						<p className="body-left-content1">
							Corporate & Business Site Template By Ayro UI.
						</p>
						<p className="body-left-content2">
							We are a digital agency that helps brands to achieve their business outcomes.
							We see technology as a tool to create amazing things.
						</p>
						<div className="button-container">
							<Button variant="contained" disableElevation style={{
								"background-color": " white",
								color: "#155bd5",
								width: "180px",
								height: "50px",
								fontSize: "20px",
								fontWeight: "600"
							}}>
								GET STARTED
							</Button>
							<img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-play-essentials-icongeek26-flat-icongeek26.png" />
							<Button variant="text"
								style={{
									color: "white",
									fontSize: "15px",
									fontWeight: "600"
								}}>
								Watch Intro</Button>

						</div>
					</div>
				</div>
				<div className="body-right-container">
					<img className="girl-img1" src={GirlImage} />

				</div>
			</body>
			
			<Container2 />
			<Container3 />
			<div className="empty1"></div>
			<Container4 />
			<Container5 />
			<Container6 />
			<NavBar />
		</div>
	)
}
export default Business
