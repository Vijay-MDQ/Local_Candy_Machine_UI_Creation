import { Box, Button, Grid, TextField, Stack , Autocomplete} from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { appendData } from "../Variables/ProcessVariable";
import { add_investor, add_project_developer } from "../API_Service/API_Service";
import axios from "axios";



export default function GoProjectDeveloperForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    const [alternateMobile, setAlternateMobile] = useState('');
    const [developerAddress1, setDeveloperAddress1] = useState('');
    const [developerAddress2, setDeveloperAddress2] = useState('');
    const [developerCity, setDeveloperCity] = useState('');
    const [developerState, setDeveloperState] = useState('');
    const [developerPostalCode, setDeveloperPostalCode] = useState('');
    const [developerCountry, setDeveloperCountry] = useState('');
    const [metaversePlatform, setMetaversePlatform] = useState('');
    const [communicationHistory, setCommunicationHistory] = useState('');
    const [developmentReport, setDevelopmentReport] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [projectCommenceDate, setProjectCommenceDate] = useState('');
    const [developerStatus, setDeveloperStatus] = useState('');
    const [communicationHistoryFile, setCommunicationHistoryFile] = useState('');
    const [developmentReportFile, setDevelopmentReportFile] = useState('');
    const [Remarks, setRemarks] = useState('');

    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");

    const UserToken = localStorage.getItem('UserToken');
    const UserId = localStorage.getItem('UserProfileTypeId');


    const handleSubmit = () => {
        const obj = {
            UserId: 3,
            DeveloperName:name,
            Email:email,
            MobileNum:mobileNum,
            AlternateMobile:alternateMobile,
            DeveloperAddress1:developerAddress1,
            DeveloperAddress2:developerAddress2,
            DeveloperCity:developerCity,
            DeveloperState:developerState,
            DeveloperPostalCode:developerPostalCode,
            DeveloperCountry:developerCountry,
            MetaversePlatform:metaversePlatform,
            CommunicationHistory:communicationHistory,
            DevelopmentReport:developmentReport,
            CreationDate:creationDate,
            ProjectCommenceDate:projectCommenceDate,
            DeveloperStatus:developerStatus,
            CommunicationHistoryFile:communicationHistoryFile,
            DevelopmentReportFile:developmentReportFile,
        }

        const sendData = appendData(obj);
        axios({
            method: 'POST',
            url: add_project_developer,
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
            <Box display="flex" alignItems="center" fontSize={15}>

                <Box sx={{ px: 3, my: 2, mx: 3 }}>

                    <Grid container display="flex" justifyContent='center' sx={{ textAlign: 'center' }} spacing={3} >
                        <Grid item lg={12} xl={12} >

                            <Box sx={{ border: "1px solid black", px: 2, pb: 2, pt: 2, borderColor: '#d2cbcb;', backgroundColor: '#EDF4F4', borderRadius: '10px', ':hover': { boxShadow: 4 }, mt: 3 }}>
                                <Box sx={{ pb: 2, textAlign: 'left' }}>
                                    <h5>GO GREEN PROJECT DEVELOPER</h5>
                                </Box>
                                <Grid container justifyContent='start' spacing={2}>
                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="outlined-size-small"
                                            label="Name"
                                            variant="outlined"
                                            size="small"
                                            color="primary"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
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

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
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


                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Address_1"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDeveloperAddress1(e.target.value)}
                                        />
                                    </Grid>


                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Address_2"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDeveloperAddress2(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="City"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDeveloperCity(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="State"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDeveloperState(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Country"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDeveloperCountry(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Postal Code"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDeveloperPostalCode(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Metaverse Platform Management"
                                            label="Metaverse Platform Management"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setMetaversePlatform(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Communication History"
                                            label="Communication History"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setCommunicationHistory(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Communication History"
                                            label="Communication History"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={(e) => setCommunicationHistoryFile(e.target.files[0])}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Project Development Reports"
                                            label="Project Development Reports"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDevelopmentReport(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Project Development Reports"
                                            label="Project Development Reports"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={(e) => setDevelopmentReportFile(e.target.files[0])}
                                        />
                                    </Grid>
                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Creation Date"
                                            label="Creation Date"
                                            variant="outlined"
                                            type='date'
                                            size='small'
                                            color='secondary'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={(e) => setCreationDate(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Project Commence Date"
                                            label="Project Commence Date"
                                            variant="outlined"
                                            type='date'
                                            size='small'
                                            color='secondary'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={(e) => setProjectCommenceDate(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
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

                                    <Grid item lg={3} sm={12} xl={3} xs={12} md={4} sx={{ py: 1 }}  >
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            options={['Active', 'Inactive', 'Suspended']}
                                            onChange={(event, value) => setDeveloperStatus(value)}
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
                                        <Button fullWidth variant="outlined"
                                        onClick={handleSubmit}
                                            sx={{
                                                color: 'white', backgroundColor: '#7bc54c', borderColor: '#7bc54c',
                                                ':hover': { borderColor: '#7bc54c', color: '#000000' }
                                            }}
                                        >Submit</Button>
                                    </Stack>

                                </Grid>

                                <Grid item lg={3} sm={3} xl={3} xs={3} md={3} sx={{ py: 2 }}>
                                    <Stack spacing={2} direction="row">

                                        <Button fullWidth variant="outlined"
                                            sx={{
                                                color: 'white', backgroundColor: '#c62828', borderColor: '#c62828',
                                                ':hover': { borderColor: '#c62828', color: '#000000' }
                                            }}
                                        >Cancel</Button>
                                    </Stack>

                                </Grid>

                            </Grid>


                        </Grid>

                    </Grid>

                </Box>


            </Box>
        </Box>
    )
}
