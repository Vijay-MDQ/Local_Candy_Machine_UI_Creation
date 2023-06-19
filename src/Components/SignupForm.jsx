import * as React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { get_all_user_profile_type, user_sign_up } from '../API_Service/API_Service';
import axios from 'axios';
import { Autocomplete } from '@mui/material';
import { appendData } from '../Variables/ProcessVariable';

export default function SignUpForm() {
 
    const[options, setOptions] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState();
    const [color, setColor] = useState();
    const [profile, setProfile] = useState("");
    const navigate = useNavigate();

    const [formData , setFormData] = useState({});

    useEffect(() => {
            axios({
                method: 'GET',
                url: get_all_user_profile_type,
            })
                .then((res) => {
                    if (res.data.error) {
                        setMessage(res.data.message);
                        setOpen(true);
                        setStatus(false);
                        setColor(false);
                    } else {
                        setMessage(res.data.message);
                        setOptions(res.data.data);
                        setOpen(true);
                        setStatus(true);
                        setColor(true);
                        navigate('/')
                    }
                })
                .catch((err) => {
                    alert("Oops something went wrong " + err);
                    console.log("chip2", err);
                });
    }, []);
    

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const obj = {
        UserName: formData.firstName,
        UserPhone: formData.PhoneNumber,
        UserMail: formData.email,
        UserAddress: formData.Address_Line,
        UserCity: formData.City,
        UserState: formData.State,
        UserPostalCode: formData.Postal,
        UserCountry: formData.Country ,
        UserPassword: formData.password,
        UserProfileTypeId: profile
        }
        const sendData = appendData(obj);
        axios({
            method: 'POST',
            url: user_sign_up,
            data:sendData
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
                    <Grid item xs={12} sm={12} md={12} lg={12} className='glassCard' mt={1}>
                <Box
                    sx={{
                        px:4,
                        py:1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                            <Box sx={{ mx: 1 }}>
                                <img src={GGV} alt='logo' style={{ width: 100, height: 75, objectFit: 'contain' }} />
                            </Box>
                            <Typography 
                                color='#7bc54c'
                                fontSize={{
                                    lg: 28,
                                    md: 26,
                                    sm: 23,
                                    xs: 20,
                                }}
                                variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" id='form1' noValidate onSubmit={handleSubmit} sx={{ mt: 1}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    size='small'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    size='small'
                                    onChange={handleChange}
                                />
                            </Grid>
                                    <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    size='small'
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="phno"
                                    label="Phone Number"
                                    name="PhoneNumber"
                                    type='tel'
                                    size='small'
                                    onChange={handleChange}
                                />
                            </Grid>
{/* Address */}

                            <Grid item xs={12} sm={6}>
                            <Autocomplete
                                id="combo-box-demo"
                                size="small"
                                options={options}
                                onChange={(event, value) => setProfile(value.UserProfileTypeId)}
                                fontSize='small'
                                getOptionLabel={(option) => option.UserProfileType}
                                renderInput={(params) => <TextField {...params} 
                                label="Profile"
                                 />}
                            />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="Address"
                                    label="Address_Line"
                                    name="Address_Line"
                                    type="text"
                                    variant="outlined"
                                    size='small'
                                    color='secondary'
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="Address"
                                    label="City"
                                    name='City'
                                    type="text"
                                    variant="outlined"
                                    size='small'
                                    color='secondary'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="Address"
                                    label="State"
                                    name='State'
                                    type="text"
                                    variant="outlined"
                                    size='small'
                                    color='secondary'
                                    onChange={handleChange}
                                />
                            </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Country"
                                            name='Country'
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={handleChange}
                                        />
                                    </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="postal"
                                    label="Postal Code"
                                    name="Postal"
                                    type='tel'
                                    size='small'
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    size='small'
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            form='form1'
                            variant="contained"
                            sx={{ mt: 3, mb: 1 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={()=>navigate('/')}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}