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



export default function AdminLoginPage() {

    const navigate = useNavigate();

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                Wanna Plant a Tree?
                <Link color="inherit" style={{ marginLeft: 2 }} onClick={(e) =>{
                    e.preventDefault();
                    navigate('signup')}}>
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
                        <Box component="form"  sx={{ mt: 1 }}>
                            <Stack textAlign='left' spacing={2}>
                                    <Box sx={{ py: 2 }} >
                                        <TextField
                                            fullWidth
                                            label="User Name"
                                            variant="outlined"
                                            autoComplete="off"
                                            sx={{ width: { xs: 150, sm: 200, md: 300, lg: 300 } }}
                                        />
                                </Box>
                                <Box sx={{ py: 2 }}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            autoComplete="off"
                                            type={showPassword ? 'password' : 'text'}
                                            label="Password"
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
                                type="submit"
                                fullWidth
                                variant="contained"
                                
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
