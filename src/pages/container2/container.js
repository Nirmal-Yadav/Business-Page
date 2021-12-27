import React from "react";
import './container.css'
import Image2 from "../../assests/about-img2.jpg"
import Typography from '@mui/material/Typography';
import BasicTabs from "../../components/tabs/tabs";


function Container2() {
	return (
		<div>
			<div className="container2">
				<div className="container2-left">
					<svg class="shape" width="106" height="134" viewBox="0 0 106 134" fill="none" xmlns="http://www.w3.org/2000/svg"
						style={{
							position: "relative",
							bottom: "240px",
							left: "60px"
						}}>
						<circle cx="1.66654" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="117.667" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="103" r="1.66667" fill="#DADADA"></circle>
						<circle cx="1.66654" cy="132" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.3333" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.3333" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.3333" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.3333" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.333" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.333" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.333" cy="117.667" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.333" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.333" cy="103" r="1.66667" fill="#DADADA"></circle>
						<circle cx="16.333" cy="132" r="1.66667" fill="#DADADA"></circle>
						<circle cx="30.9998" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6665" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
						<circle cx="30.9998" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6665" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="30.9998" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6665" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
						<circle cx="30.9998" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6665" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="31" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6668" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="31" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6668" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="31" cy="117.667" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6668" cy="117.667" r="1.66667" fill="#DADADA"></circle>
						<circle cx="31" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6668" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="31" cy="103" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6668" cy="103" r="1.66667" fill="#DADADA"></circle>
						<circle cx="31" cy="132" r="1.66667" fill="#DADADA"></circle>
						<circle cx="74.6668" cy="132" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="117.667" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="117.667" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="103" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="103" r="1.66667" fill="#DADADA"></circle>
						<circle cx="45.6665" cy="132" r="1.66667" fill="#DADADA"></circle>
						<circle cx="89.3333" cy="132" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.3333" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="1.66679" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.3333" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="16.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.3333" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="31.0001" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.3333" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="45.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.333" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="60.3335" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.333" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="88.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.333" cy="117.667" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="117.667" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.333" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="74.6668" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.333" cy="103" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="103" r="1.66667" fill="#DADADA"></circle>
						<circle cx="60.333" cy="132" r="1.66667" fill="#DADADA"></circle>
						<circle cx="104" cy="132" r="1.66667" fill="#DADADA"></circle>
					</svg>
					<img className="container2-image2" src={Image2} />
				</div>
				<div className="container2-right">
					<div className="container2-right-inner">
						<div className="container2-content1">
							OUR STORY
						</div>
						<Typography className="container2-content2" variant="h4" gutterBottom component="div"
							style={{
								width: "500px",
								fontWeight: "bolder"
							}}>
							Our team comes with the experience and knowledge
						</Typography>

						<BasicTabs />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Container2