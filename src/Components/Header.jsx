import { Box, Typography, Grid , MenuItem, Menu} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import './Header.styles.css';
import {useState} from "react";
import * as React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Header() {
  

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  const handleOpenPage = (item) => {

      navigate(`/${item}`)
  };




  return (
    <div className="desktop-1-42aa">
    <Grid container spacing={2}>
    <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className="auto-group-wh57-8wY">
                <Box>
                <img className="removebg-preview-1-FoC" src='' alt='removebg' />
                </Box>
              <Box display='flex' flexDirection='row'>
              <Typography className="home-VSe" onClick={() =>navigate('/home')}>Home</Typography>
              <Typography className="home-VSe" onClick={handleClick}>Menu</Typography>
              <Box>
                <Menu
                  className="home-VSe"
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseMenu}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  sx={{ padding: 2, marginTop: 1 }}
                >
                  <MenuItem onClick={() => handleOpenPage('contribution')} sx={{ fontSize: 16 }}>Contribution</MenuItem>
                  <MenuItem onClick={() => handleOpenPage('footprint')} sx={{ fontSize: 16 }}>Carbon Footprint</MenuItem>
                  <MenuItem onClick={() => handleOpenPage('trackproject')} sx={{ fontSize: 16 }}>Project Tracking</MenuItem>
                  <MenuItem onClick={() => handleOpenPage('offset')} sx={{ fontSize: 16 }}>Carbon Offset</MenuItem>
                  <MenuItem onClick={() => handleOpenPage('mrv')} sx={{ fontSize: 16 }}>Renewal</MenuItem>
                </Menu>
              </Box>
              <Typography className="home-VSe" onClick={() => handleOpenPage('listedlands')}>Listed Lands</Typography>
              <Typography className="home-VSe" onClick={() => handleOpenPage('addyourlands')}>Add Lands</Typography>
              <Typography className="home-VSe" onClick={() => handleOpenPage('profile')}>Profile</Typography>
              <Typography className="home-VSe" onClick={() => navigate('/')}>Logout<LogoutIcon  sx={{verticalAlign:'middle'}}/></Typography>
              </Box>
              </Box>
        </Grid>
        </Grid>
    </div>
      );
    }
