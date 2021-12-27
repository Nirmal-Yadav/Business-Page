import React from "react";
import BasicTabs1 from "../../components/container5-tab/tab5";
import LabTabs from "../../components/container5-tab/tab5";
import './container5.css'

function Container5() {
	return (
		<div className="container5">
			<div className="container5-main">
				<button className="portfolio-button">
					Our Portfolio
				</button>
				<div className="container5-content1">
				Our Recent Works
				</div>
				<div className="container5-content2">
				There are many variations of passages of Lorem Ipsum available,
				 but the majority have suffered alteration in some form.
				</div>
				<div>
					<BasicTabs1/>
				</div>
			</div>

		</div>
	)
}
export default Container5