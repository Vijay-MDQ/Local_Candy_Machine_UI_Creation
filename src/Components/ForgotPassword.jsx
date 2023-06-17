import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GGV from '../assets/GGVLOGO.png';
import {
    Stack, IconButton,
    InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {

    // const [open, setOpen] = useState(false);
    // const [message, setMessage] = useState("");
    // const [status, setStatus] = useState();
    // const [color, setColor] = useState();
    // const [errorData, setErrorData] = useState(false);
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [errorMsg, setErrorMsg] = useState('')
    // const [error, setError] = useState(false);
    // const [email, setEmail] = useState('');
    // const [isValid, setIsValid] = useState(false);

    const navigate = useNavigate();

    // // Validate Password
    // const validateInput = () => {
    //     if (password !== "" && confirmPassword !== "") {
    //         if (password === confirmPassword) {
    //             setError(false);
    //         }
    //         else {
    //             setErrorMsg("Passwords do not match")
    //             setError(true);
    //         }
    //     }
    //     else {
    //         setErrorMsg("")
    //         setError(false);
    //     }
    // }

    // //  Vaidate EMail
    // const handleEmailChange = (event) => {
    //     const emailValue = event.target.value;
    //     const regex = /\S+@\S+\.\S+/;
    //     setIsValid(regex.test(emailValue));
    //     setEmail(emailValue);
    // };


    // const submit = () => {
    //     if (password === confirmPassword && isValid) {
    //         const obj = {
    //             newPassword: password,
    //             confirmNewPassword: confirmPassword,
    //             email: email
    //         }
    //         const sendData = appendData(obj);
    //         axios({
    //             method: 'POST',
    //             url: forgot_password,
    //             data: sendData,
    //         }).then(res => {
    //             console.log(res)
    //             if (res.data.error) {
    //                 setMessage(res.data.message)
    //                 setOpen(true)
    //                 setStatus(false)
    //                 setColor(false)
    //             } else {
    //                 setMessage(res.data.message)
    //                 setOpen(true)
    //                 setStatus(true)
    //                 setColor(true)
    //                 navigate(-1)
    //             }
    //         }).catch(err => {
    //             alert('Oops something went wrong ' + err)
    //         });
    //     }
    //     else {
    //         setErrorMsg('Something Went Wrong')
    //     }
    // }



    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    return (
        <div className='loginback'>
                <Container component="main" maxWidth="xs">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} className='glassCard' mt={2}>
                    <Box
                        sx={{
                            py:2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: '#ffff'
                        }}
                    >
                            <Box sx={{ mx: 1 }}>
                                <img src={GGV} alt='logo' style={{ width: 100, height: 90, objectFit: 'contain' }} />
                            </Box>

                            <Typography
                             py={1}
                                color='#7bc54c'
                                fontSize={{
                                    lg: 28,
                                    md: 26,
                                    sm: 23,
                                    xs: 20,
                                }}
                                variant="h5">
                            Forgot Password
                        </Typography>
                        <Box mt={1}>
                            <Stack textAlign='left' spacing={2}>
                                <Box sx={{ py: 2 }} >
                                    <TextField
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            size='small'
                                            sx={{ width: { xs: 150, sm: 200, md: 300, lg: 300 } }}
                                    />
                                </Box>
                            <Box sx={{ py: 2 }} >
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    size='small'
                                />
                            </Box>
                            <Box sx={{ py: 2 }}>
                                <TextField
                                    fullWidth
                                    size='small'
                                    variant="outlined"
                                    autoComplete="off"
                                    type={showPassword ? 'password' : 'text'}
                                    label="Confirm Password"
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
                                Create New Password
                            </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2" onClick={()=>navigate('/')}>
                                           Go Back To Sign_In
                                        </Link>
                                    </Grid>
                                </Grid>
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
                </Container>
        </div >
    );
}
