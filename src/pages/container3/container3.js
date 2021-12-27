import { Typography } from "@mui/material";
import React from "react";
import ResponsiveGrid from "../../components/card/card";
import './container3.css'

function Container3() {
	return (
		<div className="container3">
			<div className="container3-header">
				<button className="services-button">
					Services
				</button>
				<Typography className="container3-content1" sx={{fontSize:'35px', fontWeight:'750'}}>
					Our Best Services
				</Typography>
				<Typography className="container3-content2">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form.
				</Typography>

			</div>
			<div className="container3-body">
				<ResponsiveGrid />
			</div>

		</div>
	)
}
export default Container3