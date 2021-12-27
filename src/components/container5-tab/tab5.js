import * as React from 'react';
import './tab5.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { yellow } from '@mui/material/colors';
import ActionAreaCard from '../container5-cards/cards5';
import Card1 from '../../assests/card1.jpg'
import Card2 from '../../assests/card2.jpg'
import Card3 from '../../assests/card3.jpg'
import Card4 from '../../assests/card4.jpg'
import Card5 from '../../assests/card5.jpg'
import Card6 from '../../assests/card6.jpg'

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs1() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', height: '900px', width: '1400px' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', width: '1400px', display: 'flex', justifyContent: 'center' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ }}>
					<Tab sx={{ fontWeight: '600', color: 'black' }} label="All Works" {...a11yProps(0)} />
					<Tab sx={{ fontWeight: '600', color: 'black' }} label="Branding" {...a11yProps(1)} />
					<Tab sx={{ fontWeight: '600', color: 'black' }} label="Marketing" {...a11yProps(2)} />
					<Tab sx={{ fontWeight: '600', color: 'black' }} label="Planning" {...a11yProps(3)} />
					<Tab sx={{ fontWeight: '600', color: 'black' }} label="Research" {...a11yProps(4)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<div className='wet' sx={{ display: 'flex' }}>
					<div className='tab-card-container'>
						<img className='tab5-image1' src={Card1} />
						<Typography className='tab5-content1' sx={{fontSize:'25px', fontWeight:'600'}}>Graphic Design</Typography>
						<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
					</div>
					<div className='tab-card-container'>
						<img className='tab5-image1' src={Card2} />
						<Typography className='tab5-content1' sx={{fontSize:'25px', fontWeight:'600'}}>Web Development</Typography>
						<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
					</div>
					<div className='tab-card-container'>
						<img className='tab5-image1' src={Card3} />
						<Typography className='tab5-content1' sx={{fontSize:'25px', fontWeight:'600'}}>App Development</Typography>
						<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
					</div>
					<div className='tab-card-container'>
						<img className='tab5-image1' src={Card4} />
						<Typography className='tab5-content1' sx={{fontSize:'25px', fontWeight:'600'}}>Digital Marketing</Typography>
						<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
					</div>
					<div className='tab-card-container'>
						<img className='tab5-image1' src={Card5} />
						<Typography className='tab5-content1' sx={{fontSize:'25px', fontWeight:'600'}}>SEO Services</Typography>
						<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
					</div>
					<div className='tab-card-container'>
						<img className='tab5-image1' src={Card6} />
						<Typography className='tab5-content1' sx={{fontSize:'25px', fontWeight:'600'}}>Product Design</Typography>
						<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
					</div>
				</div>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div className='tab-card-container'>
					<img className='tab5-image1' src={Card1} />
					<Typography className='tab5-content1'>Graphic Design</Typography>
					<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
				</div>
				<div className='tab-card-container'>
					<img className='tab5-image1' src={Card5} />
					<Typography className='tab5-content1'>SEO Services</Typography>
					<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
				</div>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<div className='tab-card-container'>
					<img className='tab5-image1' src={Card3} />
					<Typography className='tab5-content1'>App Development</Typography>
					<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
				</div>
				<div className='tab-card-container'>
					<img className='tab5-image1' src={Card6} />
					<Typography className='tab5-content1'>Product Design</Typography>
					<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
				</div>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<div className='tab-card-container'>
					<img className='tab5-image1' src={Card4} />
					<Typography className='tab5-content1'>Digital Marketing</Typography>
					<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
				</div>
			</TabPanel>
			<TabPanel value={value} index={4}>
				<div className='tab-card-container'>
					<img className='tab5-image1' src={Card2} />
					<Typography className='tab5-content1'>Web Development</Typography>
					<Typography className='tab5-content2'>Short description for the ones who look for something new. Awesome!</Typography>
				</div>
			</TabPanel>
		</Box>
	);
}