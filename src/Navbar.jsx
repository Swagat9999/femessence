import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from './store/atoms/user.js';
import LoginSignupModal from './loginmodal.jsx';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px 70px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          
          {/* Logo with Link */}
          <Button 
            component={Link} 
            to={`/`} 
            startIcon={<img src="src/assets/log.png" alt="icon" style={{ width: '4vw', height: '4vw' }} />} 
            style={{ color: 'black', marginRight: 40 }}>
            <Typography variant='h5' style={{ fontSize: '1.5vw', fontWeight: 400, fontFamily: "helvetica", color: 'black', textDecoration: 'none' }}>
              <span style={{ textTransform: 'capitalize' }}>Fem</span>
              <span style={{ textTransform: 'capitalize' }}>Essence</span>
            </Typography>
          </Button>

          {/* Products Link */}
          <Button 
            component={Link} 
            to={`/about`} 
            style={{ color: 'black', marginRight: 40 }}>
            <Typography variant='h5' style={{ fontSize: '1.2vw', fontWeight: 400, fontFamily: "helvetica", color: 'black' }}>
              Products
            </Typography>
          </Button>

          {/* About Us Link */}
          <Button 
            component={Link} 
            to={`/aboutus`} 
            style={{ color: 'black', marginRight: 10 }}>
            <Typography variant='h5' style={{ fontSize: '1.2vw', fontWeight: 400, fontFamily: "helvetica", color: 'black' }}>
              About Us
            </Typography>
          </Button>
        </div>
        
        <div>
          {!user || user.isLoading === undefined ? (
            <LoginSignupModal />
          ):(
            <>
              <Button component={Link} to={`/purchased`} style={{ color: 'black', marginRight: 10 }}>
                Orders
              </Button>

              <Button variant="contained" style={{ color: 'black', backgroundColor: 'white' }} onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
