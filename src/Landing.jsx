import React from 'react';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material'; 
import Footer from './Footer';


function Landing() {
    return (
        <div >
            <Lander />
        </div>
    );
}

export function Lander() {
    return (<>
        <div style={{ width: '100vw' }}>
            <img
                src='src/assets/femback.png'
                alt='Background'
                style={{
                    padding:'0px',
                    margin:'0px',
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                }}
            />
        </div>
        <div style={{  marginTop: 100, marginLeft: 80, marginRight: 50 }}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Typography variant='h3' style={{ fontWeight: 1000, fontFamily: "helvetica" }}>Women Hygiene?</Typography> <br />
            <Typography variant='h6' style={{ fontWeight: 400, fontFamily: "helvetica", textAlign: 'justify' }}>Think hygiene is just another chore? Not at all! It’s your first line of defense and the key to feeling fabulous every day. But did you know there’s a whole range of new hygiene products for women that many aren’t even aware of? From innovative menstrual cups and period pain relief patches to sustainable stand-and-pee devices, these products can revolutionize your daily routine.</Typography> <br />
            
            <p> </p>
            
            <br></br>
            

            

            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
  <Typography
    variant='h6'
    style={{
      fontWeight: 400,
      fontFamily: "Helvetica, Arial, sans-serif",
      textAlign: 'justify',
      maxWidth: '80%', // Ensures the text doesn’t stretch too wide on larger screens
    }}
  >
    We conducted an in-depth survey of over 300 women at the National Institute of Technology, Rourkela, Odisha, India, focusing on women's hygiene. The results are visually presented in the bar chart below.
  </Typography>
</div>


            </Grid>
            <Grid item xs={12} sm={6} style={{maxWidth: 700, margin: '0 auto'}}>
            <img src="src/assets/pieFem.png" alt="" />

            <Typography variant='h6' style={{ fontWeight: 400, fontFamily: "helvetica", textAlign: 'justify'}}> Age group distribution of surveyed women </Typography> <br />
            </Grid>
            </Grid>
            
        </div>
       <br /><br /><br />
        <div>
        <Typography variant='h2' style={{ fontWeight: 1000, fontFamily: "helvetica", textAlign: 'justify', marginLeft: 80, marginTop: 100,  color: '#633EBB' }}> Hygiene products awareness survey results </Typography> <br />
        <br /><br />
        <img
                src='src/assets/Fem4.png'
                alt='Background'
                style={{
                    padding:'0px',
                    margin:'0 auto',
                    width: '80%',
                    height: 'auto',
                    display: 'block'
                }}
            />
        </div>
        <img
                src='src/assets/Femexpert.png'
                alt='Background'
                style={{
                    marginTop: '200px',
                    marginBottom: '200px',
                    padding:'0px',
                    margin:'0 auto',
                    width: '80%',
                    height: 'auto',
                    display: 'block'
                }}
            />
        <Footer></Footer>
        
        
        </>
    );
}

export default Landing;
