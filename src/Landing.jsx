import React from 'react';

function Landing() {
    return (
        <div >
            <Lander />
        </div>
    );
}

export function Lander() {
    return (
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
    );
}

export default Landing;
