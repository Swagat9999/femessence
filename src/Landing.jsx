import React from 'react';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material'; 
import Footer from './Footer';

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
                    src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSz2o5QefAdOrv1lqUpKB38-3XZmG64n4A_2E6zOVYEUZKT7tmvjMv4VM1TyFdVhdAO1pJI_0qsl_O9FzJ_xUNNU5Isride9bMBE31-Dqaq93EmkBuHAkSGBJfhcwyCmUeGEuRuyJV3XRPsc5B4AcgCVlWY7ppPKA6VVSVPqMsrxz2GG0547fRqwmaks0/s1440/femback.png'
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
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKVnloOeAmvsWZKDxr-Aw7az3IV5RuOMNPd54-nTdBUzpLTKvcrS8ppq7s3de-dUFMrSrufihhsHzkHM1WsiIRPLsEZYZsWKIfrb2hLL_eHEzUtfRE5KwyjqHggMaP_gU5fh2Hr_wcEtTwSbZLbTLPLJAZKtMiV9_xvvJIGdbDwujRRh_KYHvhBGj3RIE/s590/pieFem.png" 
    alt="Pie chart" style={{ width: '100%', height: 'auto' }} />
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
                    src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisJ5TOofsxMkJdkqN2-tCj-K31_ql2EQ1e0oNqlpqqlaYhM3RDt2WxJqzMovMeASRB3VI5ghwk__4S1mfWGo0MHkGlSDOEY1onsUSo8EmLGfuBvMnaUfxLRUWh_dHTT2qQCCuP8Dqa9WAEz9iPMfLkoT-2Ik4TH4ZHZK9T-WIRSvsjN_lG7lD99Xf3l9I/s1219/Fem4.png'
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

                        <img src='https://www.skinome.com/cdn/shop/files/1x1_J_portratt.jpg?v=1718283247&width=2500' alt='Johanna Gillbro' style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                    </Grid>
                </Grid>
            </div>

            <Footer />
        </>
    );
}

export default Landing;
