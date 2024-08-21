import React, { useState } from 'react';
import { Modal, Box, Button, Typography, Backdrop, colors } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginSignupModal = () => {
  const [open, setOpen] = useState(false);
  const [oopen, setOopen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOopen = () => setOopen(true);
  const handleCclose = () => setOopen(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div>
      <Button variant="contained" onClick={handleOpen} sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '12px 24px',  
        borderRadius: '20px',
        marginRight: '30px',
        '&:hover': {
          backgroundColor: 'gray', // Optional: To change the hover color
        },
      }} >
        Login
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          backdropFilter: open ? 'blur(5px)' : 'none',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Already have an account?
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate('/login');
              handleClose();
            }}
          >
            Login
          </Button>
        </Box>
      </Modal>
    </div>
    <div>
      <Button variant="contained" onClick={handleOopen} sx={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        padding: '12px 24px',  
        marginRight: '30px',
        '&:hover': {
          backgroundColor: 'gray', // Optional: To change the hover color 
        },
      }} >
        Register
      </Button>

      <Modal
        open={oopen}
        onClose={handleCclose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          backdropFilter: open ? 'blur(5px)' : 'none',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Don't have an account?
          </Typography>
          {/* Add your login/signup form here */}
          <Button
            variant="contained"
            onClick={() => {
              navigate('/login');
              handleCclose();
            }}
          >
            Register
          </Button>
        </Box>
      </Modal>
    </div>
    </div>
  );
};

export default LoginSignupModal;
