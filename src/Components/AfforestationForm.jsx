import { Box, Button, Grid, TextField, Stack, Autocomplete } from "@mui/material";
import Header from './Header';
import { add_afforestation, add_buyer, add_vvb } from "../API_Service/API_Service";
import { useState } from "react";
import { appendData } from "../Variables/ProcessVariable";
import axios from "axios";

export default function AfforestationForm() {

  const [companyName, setCompanyName] = useState('');
  const [coordinationPerson, setCoordinationPerson] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [email, setEmail] = useState('');
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('');
  const [stateName, setStateName] = useState('');
  const [gisMapping, setGISMapping] = useState('');
  const [landOwnership, setLandOwnership] = useState('');
  const [landType, setLandType] = useState('');
  const [landActivity, setLandActivity] = useState('');
  const [isForestLand, setIsForestLand] = useState('');
  const [temperatureClimate, setTemperatureClimate] = useState('');
  const [soil, setSoil] = useState('');
  const [water, setWater] = useState('');
  const [biodiversity, setBiodiversity] = useState('');
  const [plannedPlantation, setPlannedPlantation] = useState('');
  const [speciesQty, setSpeciesQty] = useState('');
  const [plantationDensity, setPlantationDensity] = useState('');
  const [plannedSpecies, setPlannedSpecies] = useState('');
  const [treeSpacing, setTreeSpacing] = useState('');
  const [treeHarvestingPeriod, setTreeHarvestingPeriod] = useState('');
  const [treeHarvestCriteria, setTreeHarvestCriteria] = useState('');
  const [harvestedTreesUsage, setHarvestedTreesUsage] = useState('');
  const [socialBenefits, setSocialBenefits] = useState('');

    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");

    const UserToken = localStorage.getItem('UserToken');
    const UserProfileTypeId = localStorage.getItem('UserProfileTypeId');
    const UserId = localStorage.getItem('UserId');

 

    const handleSubmit = () => {
        const obj = {
        UserId:UserId,
        CompanyName:companyName,
        CoordinationPerson:coordinationPerson,
        MobileNum:mobileNum,
        Email:email,
        Village:village,
        District:district,
        StateName:stateName,
        GISMapping:gisMapping,
        LandOwnership:landOwnership,
        LandType:landType,
        LandActivity:landActivity,
        IsForestLand:isForestLand,
        TemperatureClimate:temperatureClimate,
        Soil:soil,
        Water:water,
        Biodiversity:biodiversity,
        PlannedPlantation:plannedPlantation,
        SpeciesQty:speciesQty,
        PlantationDensity:plantationDensity,
        PlannedSpecies:plannedSpecies,
        TreeSpacing:treeSpacing,
        TreeHarvestingPeriod:treeHarvestingPeriod,
        TreeHarvestCriteria:treeHarvestCriteria,
        HarvestedTreesUsage:harvestedTreesUsage,
        SocialBenefits:socialBenefits,
        }

        const sendData = appendData(obj);
        axios({
            method: 'POST',
            url: add_afforestation,
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
            <Box sx={{ height: '90%' }} display="flex" alignItems="center">

                <Box py={4} sx={{ px: 5, backgroundColor: '#e5f4eb', borderRadius: '10px', mx: 3, my: 4, boxShadow: 11 }}>

                    <Grid container display="flex" justifyContent='center' sx={{ textAlign: 'center' }} spacing={4} >
                        <Grid item lg={12} xl={12}>

                            <Box sx={{ border: "1px solid black", px: 4, pb: 5, pt: 4, borderColor: '#d2cbcb;', borderRadius: '4px', ':hover': { boxShadow: 2 }, mt: 5 }}>
                                <Box sx={{ pb: 5, textAlign: 'left' }}>
                                    <h5>Location of Land</h5>
                                </Box>

                                <Grid container spacing={2} display='flex' justifyContent='start'>
                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Village/City"
                                            label="Village/City"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setVillage(e.target.value)}
                                             InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="District"
                                            label="District"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setDistrict(e.target.value)}
                                             InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="State"
                                            label="State"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setStateName(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }}  borderTop= '1px solid silver' >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>GIS Mapping Details</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="GIS Mapping Details"
                                            label="GIS Mapping Details"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            onChange={(e)=>setGISMapping(e.target.value)}
                                            color='secondary'
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }} borderTop='1px solid silver' >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Right of Land (Ownership)</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Right of Land (Ownership)"
                                            label="Right of Land (Ownership)"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setLandOwnership(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>


                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }} borderTop='1px solid silver' >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Type of Land</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            onChange={(event, value)=>setLandType(value)}
                                            options={['Public', 'Private', 'Government', 'Forest', 'Waste land']}
                                            renderInput={(params) => <TextField {...params} label="Type of Land" InputLabelProps={{
                                                shrink: true,
                                            }} />}
                                        />
                                    </Grid>

                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }} borderTop='1px solid silver' >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Activity</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            onChange={(event, value)=>setLandActivity(value)}
                                            options={['Pasture and Non-Pasture', 'Forest land', 'Village land for cattle land', 'Mine area']}
                                            renderInput={(params) => <TextField {...params} label="Activity" InputLabelProps={{
                                                shrink: true,
                                            }} />}
                                        />
                                    </Grid>


                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }} borderTop='1px solid silver' >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Any forest on the land before the project? </h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            options={['YES', 'NO']}
                                            onChange={(event, value)=>setIsForestLand(value)}
                                            renderInput={(params) => <TextField {...params} label="Any forest on the land before the project?"
                                             InputLabelProps={{
                                                shrink: true,
                                            }} />}
                                        />
                                    </Grid>

                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }} borderTop='1px solid silver' >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Prevailing Environment Condition</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Temperature and Climate Change"
                                            label="Temperature and Climate Change"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setTemperatureClimate(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Soil"
                                            label="Soil"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setSoil(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Water"
                                            label="Water"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setWater(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Biodiversity"
                                            label="Biodiversity"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setBiodiversity(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>


                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }} borderTop='1px solid silver' >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Plantation Details</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Total Number of Tree’s planned for plantation"
                                            label="Total Number of Tree’s planned for plantation"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setPlannedPlantation(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Qty of Species"
                                            label="Qty of Species"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setSpeciesQty(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Density of Plantation"
                                            label="Density of Plantation"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setPlantationDensity(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Species planned"
                                            label="Species planned"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setPlannedSpecies(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Spacing between the trees"
                                            label="Spacing between the trees"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setTreeSpacing(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>


                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }} borderTop='1px solid silver' >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Harvesting</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Harvesting period of trees"
                                            label="Harvesting period of trees"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setTreeHarvestingPeriod(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Harvest Criteria of the Trees"
                                            label="Harvest Criteria of the Trees"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setTreeHarvestCriteria(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="End use of harvested Trees"
                                            label="End use of harvested Trees"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setHarvestedTreesUsage(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }} borderTop='1px solid silver'>
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Social Benefits attached with Project</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <Autocomplete
                                            id="combo-box-demo"
                                            size="small"
                                            onChange={(event, value)=>setSocialBenefits(value)}
                                            options={['No Poverty', 'Soil Erosion Control', 'Poverty Alleviation', 'Decent Work and Economic Growth ']}
                                            renderInput={(params) => <TextField {...params} label="Social Benefits" InputLabelProps={{
                                                shrink: true,
                                            }} />}
                                        />
                                    </Grid>


                                    <Grid item lg={12} sm={12} xl={12} xs={12} md={12} sx={{ py: 2 }}  >
                                        <Box sx={{ pb: 3, textAlign: 'left' }}>
                                            <h5>Contact Details</h5>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Name of Company"
                                            label="Name of Company"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setCompanyName(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Name of Coordination person"
                                            label="Name of Coordination person"
                                            type="text"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setCoordinationPerson(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Phone"
                                            label="Phone"
                                            type="tel"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setMobileNum(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item lg={4} sm={4} xl={4} xs={14} md={4} sx={{ py: 2 }}  >
                                        <TextField
                                            fullWidth
                                            id="Email"
                                            label="Email"
                                            type="email"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e)=>setEmail(e.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>


                                </Grid>
                            </Box>


                        </Grid >
                    </Grid>

                    {/* {buttons}  */}

                    <Grid container justifyContent='center' sx={{ textAlign: 'center', mt: 3 }}>
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
