import { Box, Button, Grid, TextField, Stack , Autocomplete } from "@mui/material";
import Header from './Header';
import { add_admin, add_vvb, get_district, get_state, methodGet, methodPost } from "../API_Service/API_Service";
import { useEffect, useState } from "react";
import { appendData } from "../Variables/ProcessVariable";
import axios from "axios";


export default function AdminProfileForm() {

    const [adminname, setAdminName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    const [alternateMobile, setAlternateMobile] = useState('');
    const [adminAddress1, setAdminAddress1] = useState('');
    const [adminAddress2, setAdminAddress2] = useState('');
    const [adminCity, setAdminCity] = useState('');
    const [adminState, setAdminState] = useState('');
    const [adminPostalCode, setAdminPostalCode] = useState('');
    const [adminCountry, setAdminCountry] = useState('');
    const [userManagement, setUserManagement] = useState('');
    const [platformSettings, setPlatformSettings] = useState('');
    const [accessControls, setAccessControls] = useState('');
    const [dataAnalytics, setDataAnalytics] = useState('');
    const [adminStatus, setAdminStatus] = useState('');
    const [userManagementFile, setUserManagementFile] = useState('');
    const [accessControlsFile, setAccessControlsFile] = useState('');
    const [platformSettingsFile, setPlatformSettingsFile] = useState('');
    const [dataAnalyticsFile, setDataAnalyticsFile] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [projectCommenceDate, setProjectCommenceDate] = useState('');
    const [Remarks, setRemarks] = useState('');
    const [state, setState] = useState([]);
    const [districtList, setDistrictList]= useState([]);
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");

    const UserToken = localStorage.getItem('UserToken');
    const UserId = localStorage.getItem('UserProfileTypeId');

        useEffect(() => {
            axios({
                method: methodGet,
                url: get_state,
                headers: {
                'Authorization': `Bearer ${UserToken}`,
            }
            }).then(res => {
                if (res.data.error) {
                    setMessage(res.data.message)
                    setOpen(true)
                    setStatus(false)
                    setColor(false)
                } else {
                    setMessage(res.data.message)
                    setState(res.data.data)
                    setOpen(true)
                    setStatus(true)
                    setColor(true)

                }
            }).catch(err => {
                alert('Oops something went wrong ' + err)
            });
    }, [])

    console.log(districtList);

 // POST FETCH
    useEffect(() => {
        if(adminState !== ''){
            const lData = new FormData()
            lData.append('StateId', adminState.StateId);
            axios({
                method: methodPost,
                url: get_district,
                data: lData,
                headers: {
                'Authorization': `Bearer ${UserToken}`,
            }
            }).then(res => {
                if (res.data.error) {
                    setMessage(res.data.message)
                    setOpen(true)
                    setStatus(false)
                    setColor(false)
                    setDistrictList([])
                } else {
                    setMessage(res.data.message)
                    setDistrictList(res.data.data)
                    setOpen(true)
                    setStatus(true)
                    setColor(true)

                }
            }).catch(err => {
                alert('Oops something went wrong ' + err)
            });
        }
        else{
            setMessage('Select a State First');
        }

    }, [adminState])

    const handleSubmit = () => {
        const obj = {
        UserId:4,
        AdminName:adminname, 
        Email:email,
        MobileNum:mobileNum,
        AlternateMobile:alternateMobile,
        AdminAddress1:adminAddress1,
        AdminAddress2:adminAddress2,
        AdminCity:adminCity,
        AdminState:adminState,
        AdminPostalCode:adminPostalCode,
        AdminCountry:adminCountry,
        UserManagement:userManagement,
        PlatformSettings:platformSettings,
        AccessControls:accessControls,
        DataAnalytics:dataAnalytics,
        CreationDate:creationDate,
        ProjectCommenceDate:projectCommenceDate,
        AdminStatus:adminStatus,
        UserManagementFile:userManagementFile,
        PlatformSettingsFile:platformSettingsFile,
        AccessControlsFile:accessControlsFile,
        DataAnalyticsFile:dataAnalyticsFile
        }

        const sendData = appendData(obj);
        axios({
            method: 'POST',
            url: add_admin,
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
                                    <h5>ADMINSTRATION DEPARTMENT</h5>
                                </Box>

                                <Grid container justifyContent='start' spacing={2}>
                                  <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Name"
                                            label="Name"
                                            variant="outlined"
                                            size="small"
                                            color="primary"
                                            onChange={(e) => setAdminName(e.target.value)}
                                        />
                                    </Grid>

                                      <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
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

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
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


                                      <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
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


                                      <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Address_Line 1"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setAdminAddress1(e.target.value)}
                                        />
                                    </Grid>


                                      <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Address_Line 2"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setAdminAddress2(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                         <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            freeSolo
                                            defaultValue=''
                                            onChange={(event, value)=>setAdminState(value ?? '')}
                                            options={state}
                                            getOptionLabel={(option) => option ? option.StateName : ""}
                                            renderInput={(params) => <TextField {...params} label="State" />}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                         <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            freeSolo
                                            defaultValue=''
                                            onChange={(event, value)=>setAdminCity(value ?? '')}
                                            options={districtList}
                                            getOptionLabel={(option) => option ? option.DistrictName : ""}
                                            renderInput={(params) => <TextField {...params} label="City" />}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Country"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setAdminCountry(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="Postal Code"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setAdminPostalCode(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="User Management"
                                            label="User Management"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setUserManagement(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="User Management"
                                            label="User Management"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                              onChange={(e) => setUserManagementFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Platform Settings and Configuration"
                                            label="Platform Settings and Configuration"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setPlatformSettings(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Platform Settings and Configuration"
                                            label="Platform Settings and Configuration"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                              onChange={(e) => setPlatformSettingsFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Access Controls and Permissions"
                                            label="Access Controls and Permissions"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setAccessControls(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Access Controls and Permissions"
                                            label="Access Controls and Permissions"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                              onChange={(e) => setAccessControlsFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Data Analytics and Reporting"
                                            label="Data Analytics and Reporting"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDataAnalytics(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Data Analytics and Reporting"
                                            label="Data Analytics and Reporting"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                              onChange={(e) => setDataAnalyticsFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Creation Date"
                                            label="Creation Date"
                                            variant="outlined"
                                            type='date'
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setCreationDate(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                      <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
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

                                  
                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
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

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            onChange={(event, value)=>setAdminStatus(value)}
                                            options={['Active', 'Inactive', 'Suspended']}
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
