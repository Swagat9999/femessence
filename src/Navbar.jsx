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
            startIcon={<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKzdXzRdcyELokCtEqIpxpx_2U9_-ZBKqJV8CWL_8Xc8TM4XwYKYRnm46Gpc9P6QjebI8RAKEEEmCQCeVU6c7kDcw0M8neA1ggHdRM0OsG9TYjGIKuUasp9ViUPTcgA9FIAj_uKpV1LomSOXcpbIo_2keOHkqJnoFEjMd_yZ9CgTlERq9W-4ohS8L2nhQ/s150/log.png" 
              alt="icon" style={{ width: '4vw', height: '4vw' }} />} 
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
            <>
              <Button component={Link} to={`/purchased`} style={{ color: 'black', marginRight: 10 }}>
                Orders
              </Button>

              <Button variant="contained" style={{ color: 'black', backgroundColor: 'white' }} onClick={handleLogout}>
                Logout
              </Button>
            </>
          ): (
            <LoginSignupModal />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
