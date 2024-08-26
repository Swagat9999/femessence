import React from 'react';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material'; 
import Footer from './footer';

function Landing() {
    return (
        <div>
            <Lander />
        </div>
    );
}

export function Lander() {
    return (
        <>
            <div style={{ width: '100vw' }}>
                <img
                    src='src/assets/femback.png'
                    alt='Background'
                    style={{
                        padding: '0px',
                        margin: '0px',
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                    }}
                />
            </div>

            <div style={{ marginTop: 100, marginLeft: 80, marginRight: 50 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <div style={{display:'flex', justifyContent:'left'}}>
                            <div>
                        <Typography variant='h2' style={{ fontWeight: 1000, fontFamily: "helvetica" }}>Women's</Typography> 
                        <Typography variant='h2' style={{ marginBottom:0, fontWeight: 1000, fontFamily: "helvetica" }}>Hygiene?</Typography>
                        </div>
                        </div>
                        <br />
                        <Typography variant='h6' style={{ fontWeight: 400, fontFamily: "helvetica", textAlign: 'justify' }}>
                            Think hygiene is just another chore? Not at all! It’s your first line of defense and the key to feeling fabulous every day. But did you know there’s a whole range of new hygiene products for women that many aren’t even aware of? From innovative menstrual cups and period pain relief patches to sustainable stand-and-pee devices, these products can revolutionize your daily routine.
                        </Typography> <br />
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

                    </Grid>
                    <Grid item xs={12} sm={6} style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
    <img src="src/assets/pieFem.png" alt="Pie chart" style={{ width: '100%', height: 'auto' }} />
    <Typography variant='h6' style={{ fontWeight: 400, fontFamily: "helvetica", textAlign: 'center', marginTop: '10px' }}>
        Age group distribution of surveyed women
    </Typography>
</Grid> 

                </Grid><br /><br /><br />
                <Divider style={{ width: '100%', margin: '0 auto', backgroundColor: '#e0e0e0' }} />

            </div>
            <br /><br /><br />
            <div>
                <Typography variant='h2' style={{ fontWeight: 1000, fontFamily: "helvetica", textAlign: 'justify', marginLeft: 80, marginTop: 50, color: '#633EBB' }}>
                    Hygiene products awareness survey results
                </Typography> <br />
                <br /><br />
                <img
                    src='src/assets/Fem4.png'
                    alt='Survey Results'
                    style={{
                        padding: '0px',
                        margin: '0 auto',
                        width: '70%',
                        marginBottom: 50,
                        height: 'auto',
                        display: 'block',
                    }}
                />
            </div>

            <div style={{ marginTop: 200, marginLeft: 80, marginRight: 50 }}>
                <Grid container spacing={3} sx={{marginBottom:10}}>
                <Typography variant='caption' style={{ fontWeight: 400, color: 'grey', fontSize: '1rem' }}>
                            Expert Advice
                        </Typography>
                        <Divider style={{ width: '100%', backgroundColor: 'lightgrey' }} />
                    <Grid item xs={12} sm={8}>

                        

                        <Typography variant='h4' style={{ fontWeight: 1000, fontFamily: "helvetica", marginTop: 20 }}>
                            The Researcher Johanna Gillbro
                        </Typography>

                        <Typography variant='body1' style={{ fontWeight: 400, fontFamily: "helvetica", textAlign: 'justify', marginTop: 20 }}>
                        Meet Dr. Johanna Gillbro, a renowned gynecologist and researcher with a Ph.D. in women’s reproductive health. Her passion for women's wellness began early, inspired by her personal experiences and a deep commitment to improving women’s healthcare. With over 15 years of expertise in gynecology and a focus on hormonal health, Dr. Sharma has devoted her career to advancing research and developing products that empower women to take charge of their reproductive health. Her journey led her to create FemEssence, a brand dedicated to providing solutions that prioritize women's sexual and menstrual well-being. Read more about her inspiring vision and groundbreaking work in women's health.                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>

                        <img src='src/assets/doc.jpg.webp' alt='Johanna Gillbro' style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                    </Grid>
                </Grid>
            </div>

            <Footer />
        </>
    );
}

export default Landing;
