import { Box, Button,  Grid, TextField, Autocomplete,Stack } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { appendData } from "../Variables/ProcessVariable";
import { add_land_owner } from "../API_Service/API_Service";
import axios from "axios";



export default function Lands() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    const [alternateMobile, setAlternateMobile] = useState('');
    const [landAddress1, setLandAddress1] = useState('');
    const [landAddress2, setLandAddress2] = useState('');
    const [landCity, setLandCity] = useState('');
    const [landState, setLandState] = useState('');
    const [landPostalCode, setLandPostalCode] = useState('');
    const [landCountry, setLandCountry] = useState('');
    const [landSize, setLandSize] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState('');
    const [termsAndConditionsFile, setTermsAndConditionsFile] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [projectCommenceDate, setProjectCommenceDate] = useState('');
    const [landStatus, setLandStatus] = useState('');
    const [VirtualVideo, setVirtualVideo] = useState('');
    const [Remarks , setRemarks] = useState('');

    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");

    const UserToken = localStorage.getItem('UserToken');
    const UserId = localStorage.getItem('UserProfileTypeId');

    const handleSubmit = () => {
        const obj = {
        UserId: 1,
        LandOwnerName: name,
        Email: email,
        MobileNum: mobileNum,
        AlternateMobile:alternateMobile,
        LandAddress1:landAddress1,
        LandAddress2:landAddress2,
        LandCity: landCity,
        LandState:landState,
        LandPostalCode: landPostalCode,
        LandCountry: landCountry,
        LandSize: landSize,
        Latitude: latitude,
        Longitude: longitude,
        TermsAndConditions: termsAndConditions,
        CreationDate: creationDate,
        ProjectCommenceDate: projectCommenceDate,
        LandStatus: landStatus,
        VirtualVideo:VirtualVideo,
        TermsAndConditionsFile: termsAndConditionsFile,
        Remarks: Remarks
        }
        const sendData = appendData(obj);
        axios({
            method: 'POST',
            url: add_land_owner,
            data: sendData,
            headers: {
                'Authorization': `Bearer ${UserToken}`,
            }
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
        <Box>
           <Header />
            <Box display="flex" alignItems="center">

                <Box sx={{ px: 4, backgroundColor: '#EDF4F4', borderRadius: '10px', mx: 4, my: 2, boxShadow: 11 }}>

                    <Grid container display="flex" justifyContent='center' sx={{ textAlign: 'center' }} spacing={2} >
                        <Grid item lg={12} xl={12} >

                            <Box sx={{ px: 4 , py:1 , mt:2}}>
                                <Box sx={{ pb: 3, pt:1,  textAlign: 'left' }}>
                                    <h5>ADD YOUR LANDS INFORMATION</h5>
                                </Box>

                                <Grid container justifyContent='start' spacing={2}>
                                    <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Name"
                                            label="Name"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setName(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Ph No"
                                            label="Ph No"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setMobileNum(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Ph No"
                                            label="Alternate Ph No"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setAlternateMobile(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Email"
                                            label="Email"
                                            type="email"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>


                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Address_Line 1"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLandAddress1(e.target.value)}
                                        />
                                    </Grid>


                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Address_Line 2"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLandAddress2(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="City"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLandCity(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="State"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLandState(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Country"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLandCountry(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Postal Code"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLandPostalCode(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Land Size"
                                            label="Land Size"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLandSize(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Longtitude"
                                            label="Longtitude"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLongitude(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Lattitude"
                                            label="Lattitude"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setLatitude(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Lease T&C"
                                            label="Lease Terms & Conditions"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setTermsAndConditions(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Lease Terms & Conditions"
                                            label="Lease Terms & Conditions"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setTermsAndConditionsFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Video"
                                            label="Virtual Tour/Video "
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setVirtualVideo(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Creation Date"
                                            label="Creation Date"
                                            variant="outlined"
                                            type='date'
                                            size='small'
                                            onChange={(e) => setCreationDate(e.target.value)}
                                            color='secondary'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Project Commence Date"
                                            label="Project Commence Date"
                                            variant="outlined"
                                            type='date'
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setProjectCommenceDate(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                     <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Remarks"
                                            label="Remarks"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setRemarks(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={4} xl={3} xs={12} md={3} sx={{ py: 1 }}  >
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            onChange={(event, value) => setLandStatus(value)}
                                            options={['Active', 'In Review', 'Expired', 'On Hold', 'Sold']}
                                            renderInput={(params) => <TextField {...params} label="Status" />}
                                        />
                                    </Grid>

                                </Grid>
                            </Box>


                        </Grid >
                    </Grid>

                    {/* {buttons}  */}

                    <Grid container justifyContent='center' sx={{ textAlign: 'center' }}>
                        <Grid item lg={6} xl={6} xs={12} >
                            <Grid container justifyContent='space-evenly' alignItems='center'>
                                <Grid item lg={3} sm={3} xl={3} xs={3} md={3} sx={{ py: 2 }} >
                                    <Stack spacing={2} direction="row" >
                                        <Button fullWidth variant="outlined" onClick={handleSubmit}
                                       sx={{ color: 'white', backgroundColor: '#7bc54c', borderColor: '#7bc54c', ':hover': { borderColor: '#7bc54c', color: '#000000' } }}>Submit</Button>
                                    </Stack>

                                </Grid>

                                <Grid item lg={3} sm={3} xl={3} xs={3} md={3} sx={{ py: 2 }}>
                                    <Stack spacing={2} direction="row">

                                        <Button fullWidth variant="outlined"
                                            type='cancel' sx={{ color: 'white', backgroundColor: '#c62828', borderColor: '#c62828', ':hover': { borderColor: '#c62828', color: '#000000' } }}>Cancel</Button>


                                    </Stack>

                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>



            </Box >

            </Box>
        </Box>
    )
}
