import { Box, Button, Grid, TextField, Stack, Autocomplete } from "@mui/material";
import Header from './Header';
import { add_cri, add_plantation_partner, add_vvb } from "../API_Service/API_Service";
import { useState } from "react";
import { appendData } from "../Variables/ProcessVariable";
import axios from "axios";


export default function PlantationForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    const [alternateMobile, setAlternateMobile] = useState('');
    const [PlantationPartnerAddress1, setPlantationPartnerAddress1] = useState('');
    const [PlantationPartnerAddress2, setPlantationPartnerAddress2] = useState('');
    const [PlantationPartnerCity, setPlantationPartnerCity] = useState('');
    const [PlantationPartnerState, setPlantationPartnerState] = useState('');
    const [PlantationPartnerPostalCode, setPlantationPartnerPostalCode] = useState('');
    const [PlantationPartnerCountry, setPlantationPartnerCountry] = useState('');
    const [PlantTypes, setPlantTypes] = useState('');
    const [Species, setSpecies] = useState('');
    const [DistanceOfPlanting, setDistanceOfPlanting] = useState('');
    const [MaintenancePeriod, setMaintenancePeriod] = useState('');
    const [WaterManagement, setWaterManagement] = useState('');
    const [FertilizerManagement, setFertilizerManagement] = useState('');
    const [TotalLand, setTotalLand] = useState('');
    const [Recommendation, setRecommendation] = useState('');
    const [PlantationPartnerStatus, setPlantationPartnerStatus] = useState('');
    const [WaterManagementFile, setWaterManagementFile] = useState(null);
    const [FertilizerManagementFile, setFertilizerManagementFile] = useState(null);
    const [RecommendationFile, setRecommendationFile] = useState(null);
    const [Remarks, setRemarks] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [projectCommenceDate, setProjectCommenceDate] = useState('');


    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");

    const UserToken = localStorage.getItem('UserToken');
    const UserId = localStorage.getItem('UserProfileTypeId');




    const handleSubmit = () => {
        const obj = {
            UserId: 5,
            CRIName: name,
            Email: email,
            MobileNum: mobileNum,
            AlternateMobile: alternateMobile,
            CreationDate: creationDate,
            ProjectCommenceDate: projectCommenceDate,
            PlantationPartnerAddress1:PlantationPartnerAddress1,
            PlantationPartnerAddress2:PlantationPartnerAddress2,
            PlantationPartnerCity: PlantationPartnerCity,
            PlantationPartnerState:PlantationPartnerState,
            PlantationPartnerPostalCode:PlantationPartnerPostalCode,
            PlantationPartnerCountry:PlantationPartnerCountry,
            PlantTypes:PlantTypes,
            Species:Species,
            DistanceOfPlanting:DistanceOfPlanting,
            MaintenancePeriod:MaintenancePeriod,
            WaterManagement:WaterManagement,
            FertilizerManagement:FertilizerManagement,
            TotalLand:TotalLand,
            Recommendation:Recommendation,
            PlantationPartnerStatus:PlantationPartnerStatus,
            WaterManagementFile:WaterManagementFile,
            FertilizerManagementFile:FertilizerManagementFile,
            RecommendationFile:RecommendationFile
        }

        const sendData = appendData(obj);
        axios({
            method: 'POST',
            url: add_plantation_partner,
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

                <Box sx={{ px: 3, my:2,  mx: 3 }}>

                    <Grid container display="flex" justifyContent='center' sx={{ textAlign: 'center' }} spacing={3} >
                        <Grid item lg={12} xl={12} >

                            <Box sx={{ border: "1px solid black", px: 2, pb: 2, pt: 2, borderColor: '#d2cbcb;', backgroundColor: '#EDF4F4', borderRadius: '10px', ':hover': { boxShadow: 4 }, mt: 2 }}>
                                <Box sx={{ pb: 4, textAlign: 'left' }}>
                                    <h5>UPDATE PLANTATION DETAILS</h5>
                                </Box>

                                <Grid container justifyContent='space-evenly' spacing={2}>
                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Name"
                                            label="Name"
                                            variant="outlined"
                                            size="small"
                                            color="primary"
                                            onChange={(e) => setName(e.target.value)}
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
                                            onChange={(e) => setPlantationPartnerAddress1(e.target.value)}
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
                                            onChange={(e) => setPlantationPartnerAddress2(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="City"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setPlantationPartnerCity(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Address"
                                            label="State"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setPlantationPartnerState(e.target.value)}
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
                                            onChange={(e) => setPlantationPartnerCountry(e.target.value)}
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
                                            onChange={(e) => setPlantationPartnerPostalCode(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Plant Types"
                                            label="Plant Types"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setPlantTypes(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Species "
                                            label="Species "
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setSpecies(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Distance of Planting "
                                            label="Distance of Planting "
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setDistanceOfPlanting(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Maintenance Period"
                                            label="Maintenance Period"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setMaintenancePeriod(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Water Management"
                                            label="Water Management"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setWaterManagement(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Water Management"
                                            label="Water Management"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setWaterManagementFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Fertilizer Management"
                                            label="Fertilizer Management"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setFertilizerManagement(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Fertilizer Management"
                                            label="Fertilizer Management"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setFertilizerManagementFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Total Land "
                                            label="Total Land "
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setTotalLand(e.target.value)}
                                        />
                                    </Grid>
                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Recommendations"
                                            label="Recommendations"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setRecommendation(e.target.value)}
                                        />
                                    </Grid>

                                     <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Recommendations"
                                            label="Recommendations"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setRecommendationFile(e.target.files[0])}
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
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            onChange={(event, value) => setPlantationPartnerStatus(value)}
                                            options={['Active', 'In Active', 'Completed']}
                                            renderInput={(params) => <TextField {...params} label="Status" />}
                                        />
                                    </Grid>

                                </Grid>
                            </Box>


                        </Grid >
                    </Grid>

                    {/* {buttons}  */}

                    <Grid container justifyContent='center' sx={{ textAlign: 'center'}}>
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
