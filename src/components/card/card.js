import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { borderRadius, margin, padding } from '@mui/system';
import './card.css'
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    //   padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '250px',
    width: '350px',
    border: '1px solid lightgrey',
    borderRadius: '5px',
    margin: '15px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    padding:'30px'
}));

export default function ResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
            <Grid className='Grid-container'>

                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <div className='logo-container'>
                            <img className='capsule-img' src="https://img.icons8.com/carbon-copy/100/000000/pill.png" />
                        </div>
                        <Typography className='card-content1' sx={{fontWeight:'600', fontSize:'large'}}> Refreshing Design</Typography>
                        <Typography  className='card-content2'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod
                            tempor ividunt labor dolore magna.</Typography>
                    </Item>

                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <div className='logo-container'>
                            <img className='capsule-img' src="https://img.icons8.com/carbon-copy/100/000000/pill.png" />
                        </div>
                        <Typography className='card-content1' sx={{fontWeight:'600', fontSize:'large'}}>Solid Bootstrap 5 </Typography>
                        <Typography  className='card-content2'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod
                            tempor ividunt labor dolore magna.</Typography>
                    </Item>

                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <div className='logo-container'>
                            <img className='capsule-img' src="https://img.icons8.com/carbon-copy/100/000000/pill.png" />
                        </div>
                       <Typography className='card-content1' sx={{fontWeight:'600', fontSize:'large'}}>100+ Components</Typography>
                        <Typography className='card-content2'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod
                            tempor ividunt labor dolore magna.</Typography>
                    </Item>

                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <div className='logo-container'>
                            <img className='capsule-img' src="https://img.icons8.com/carbon-copy/100/000000/pill.png" />
                        </div>
                        <Typography className='card-content1' sx={{fontWeight:'600', fontSize:'large'}}>Speed Optimized</Typography>
                        <Typography className='card-content2'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod
                            tempor ividunt labor dolore magna.</Typography>
                    </Item>

                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <div className='logo-container'>
                            <img className='capsule-img' src="https://img.icons8.com/carbon-copy/100/000000/pill.png" />
                        </div>
                        <Typography className='card-content1' sx={{fontWeight:'600', fontSize:'large'}}> Fully Customizable</Typography>
                        <Typography className='card-content2'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod
                            tempor ividunt labor dolore magna.</Typography>
                    </Item>

                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <div className='logo-container'>
                            <img className='capsule-img' src="https://img.icons8.com/carbon-copy/100/000000/pill.png" />
                        </div>
                        <Typography className='card-content1' sx={{fontWeight:'600', fontSize:'large'}}>Regular Updates</Typography>
                       
                        <Typography className='card-content2'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod
                            tempor ividunt labor dolore magna.</Typography>
                    </Item>

                </Grid>

            </Grid>
        </Box>
    );
}
