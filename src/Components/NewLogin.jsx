import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import GGV from '../assets/GGVLOGO.png';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { user_sign_in } from '../API_Service/API_Service';
import axios from 'axios';



export default function AdminLoginPage() {

    const navigate = useNavigate();

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                Wanna Plant a Tree?
                <Link color="inherit" style={{ marginLeft: 2 }} to='/signup'>
                    Sign up
                </Link>{' '}
            </Typography>
        );
    }

    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const [UserName , setUserName] = useState('');
    const [Password, setPassword] = useState('');




    const handleSubmit = () => {
        const sendData = new FormData();
        sendData.append('UserPhone', UserName )
        sendData.append('UserPassword', Password)
        axios({
            method: 'POST',
            url: user_sign_in,
            data: sendData
        })
            .then((res) => {
                if (res.data.error) {
                    setMessage(res.data.message);
                    setOpen(true);
                    setStatus(false);
                    setColor(false);
                } else {
                    setMessage(res.data.message);
                    setOpen(true);
                    setStatus(true);
                    setColor(true);
                    localStorage.setItem('UserAuth', String(true));
                    localStorage.setItem('UserName', String(res.data.data.UserName));
                    localStorage.setItem('UserProfileTypeId', String(res.data.data.UserProfileTypeId));
                     localStorage.setItem('UserId', String(res.data.data.UserId));
                    localStorage.setItem('UserProfileType', String(res.data.data.UserProfileType));
                    localStorage.setItem('UserToken', res.data.data.UserToken);
                    navigate('/home');
                }
            })
            .catch((err) => {
                alert("Oops something went wrong " + err);
            });
    };


    return (
        <div className='loginback'>
            <Container component="main" maxWidth="xs">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='glassCard' mt={3}>
                    <Box
                        sx={{
                            py:2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: '#ffff'
                        }}
                    >
                        <Box sx={{ mx: 1}}>
                            <img src={GGV} alt='logo' style={{width:100 , height:90 , objectFit:'contain'}} />
                        </Box>
                            <Typography
                                py={1}
                                color= '#7bc54c' 
                                fontSize={{
                                    lg: 28,
                                    md: 26,
                                    sm: 23,
                                    xs: 20,
                                }}
                                variant="h5"
                            >
                                Welcome
                            </Typography>
                            <Box  sx={{ mt: 1 }}>
                            <Stack textAlign='left' spacing={2}>
                                    <Box sx={{ py: 2 }} >
                                        <TextField
                                            fullWidth
                                            label="User Name"
                                            variant="outlined"
                                            autoComplete="off"
                                            sx={{ width: { xs: 150, sm: 250, md: 300, lg: 300 } }}
                                            onChange={(e)=>setUserName(e.target.value)}
                                        />
                                </Box>
                                <Box sx={{ py: 2 }}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            autoComplete="off"
                                            type={showPassword ? 'password' : 'text'}
                                            label="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: 'black' }}>
                                                            {showPassword ? <VisibilityOff sx={{ color: 'black' }} /> : <Visibility sx={{ color: 'black' }} />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                </Box>
                            </Stack>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleSubmit}
                               sx={{ mt: 3, mb: 2, bgcolor: '#7bc54c', ':hover': { bgcolor: '#84cb25' } }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs display='flex' justifyContent='end'>
                                <Link variant="body2" to='resetpassword'>
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>

                            </Box>
                    </Box>
                    <Copyright sx={{ mt: 3 , mb:1}} />
                    </Grid>
                </Grid>
                </Container>
        </div >
    );
}
