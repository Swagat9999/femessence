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
        <Link to='/'>
        <Button startIcon={<img src="src/assets/log.png" alt="icon" style={{ width: '4vw', height: '4vw' }} />} style={{ color: 'black', marginRight: 40 }}>

          <Typography variant='h5' style={{ fontSize: '1.5vw', fontWeight: 400, fontFamily: "helvetica", color: 'black', textDecoration: 'none' }}>
          <span style={{ textTransform: 'capitalize' }}>Fem</span><span style={{ textTransform: 'capitalize' }}>Essence</span>

          </Typography>
          </Button>
        </Link>
        <Link to='/products'>
        <Button style={{ color: 'black', marginRight: 40 }}>

          <Typography variant='h5' style={{ fontSize: '1.2vw', fontWeight: 400, fontFamily: "helvetica", color: 'black', textDecoration: 'none' }}>
          <Link to="/about"><span style={{ textTransform: 'capitalize' }}>Products</span></Link>

          </Typography>
          </Button>
        </Link>
        <Link to='/aboutus'>
        <Button style={{ color: 'black', marginRight: 10 }}>

          <Typography variant='h5' style={{ fontSize: '1.2vw', fontWeight: 400, fontFamily: "helvetica", color: 'black', textDecoration: 'none' }}>
          <span style={{ textTransform: 'capitalize' }}>About Us</span>

          </Typography>
          </Button>
        </Link>
        </div>
        
        <div>
          {!user.isLoading ? (
            <>
              <Link to="/about">
                <Button style={{ color: 'black', marginRight: 10 }}>Orders</Button>
              </Link>
              <Button variant="contained" style={{ color: 'black', backgroundColor: 'white' }} onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <LoginSignupModal/>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
