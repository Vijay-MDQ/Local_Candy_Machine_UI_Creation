import React, {useEffect} from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Checkbox, FormControlLabel, Grid, Stack,  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,  TablePagination, Table, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useState } from 'react';
import { Box} from '@mui/material';
import axios from 'axios';
import { LandOwnerFiles, get_all_land_owner, get_state, methodGet } from '../API_Service/API_Service';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


export default function InvestedLands() {
    const [value, setValue] = useState(0);
    const [state, setState] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [data , setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");
    const UserToken = localStorage.getItem('UserToken');
    const UserType = localStorage.getItem('UserProfileType');
    const [selectedStates, setSelectedStates] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

      const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStateChange = (event) => {
    const stateName = event.target.name;
    setSelectedStates((prevSelectedStates) => {
      if (prevSelectedStates.includes(stateName)) {
        return prevSelectedStates.filter((state) => state !== stateName);
      } else {
        return [...prevSelectedStates, stateName];
      }
    });
  };

    const navigate = useNavigate();

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


   useEffect(()=>{
       axios({
           method: 'GET',
           url: get_all_land_owner,
           headers: {
               'Authorization': `Bearer ${UserToken}`,
           }
       })
           .then((res) => {
               if (res.data.error) {
                   setData([]);
               } else {
                   setData(res.data.data);
               }
           })
           .catch((err) => {
               alert("Oops something went wrong " + err);
           });
   }, [UserToken])

 const slicedData = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

 const movedtoEditPage  = (id) =>{
    navigate('/updateaddedlands', {state:{id:id}})
 }


    return (
        <Box>
            <Header />
            <Box>
           
           <Grid container spacing={2}  display='flex' justifyContent='space-between'>

            <Grid item xs={8} sm={8} md={8} lg={8}>

        <Grid container spacing={1} display='flex' justifyContent='start' px={3}>
          {slicedData.map((i) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={i.id} my={3}>
           <Card sx={{ maxWidth: 340 , height:'100%' , display:'flex',flexDirection:'column',  justifyContent:'space-between' }}>
            <CardActionArea>
            <CardMedia
            component="video"
            height="200"
            width='100%'
            src={`${LandOwnerFiles}${i.VirtualVideo}`}
            controls
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign='left'>
            {i.LandOwnerId}
            </Typography>
            <Stack spacing={1}>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Located:</Typography>
            <Typography variant="body2">{i.LandCity}, {i.LandState}, {i.LandCountry}</Typography>
            </Box>
            {/* <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Land ID:</Typography>
            <Typography variant="body2">{i.LandOwnerId}</Typography>
            </Box> */}
            {/* <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Longitude:</Typography>
            <Typography variant="body2"> {i.Longitude}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Latitude:</Typography>
            <Typography variant="body2"> {i.Latitude}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Land Size:</Typography>
            <Typography variant="body2"> {i.LandSize}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Creation Date:</Typography>
            <Typography variant="body2"> {i.CreationDate}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Project Commence Date:</Typography>
            <Typography variant="body2"> {i.ProjectCommenceDate}</Typography>
            </Box> */}
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Status:</Typography>
            <Typography variant="body2"> {i.LandStatus}</Typography>
            </Box>
            </Stack>
            </CardContent>
            </CardActionArea>
            <CardActions>
            {
            UserType === 'Investor' ?
            <Button size="small" color="primary" onClick={()=>navigate('/investorprofileform')}>
            Invest on this Land
            </Button>
            :
            <Box display='flex' justifyContent='space-between' flexDirection='row'>
            <Button size="small" color="primary" onClick={handleOpenDialog}>
            View
            </Button>

            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
            <DialogTitle>{i.LandOwnerId}</DialogTitle>
            <DialogContent>
            <Box display="flex" justifyContent="center">
            <Card sx={{ maxWidth: 600 }}>
            <CardMedia component="video" height="400" src={`${LandOwnerFiles}${i.VirtualVideo}`} controls />
            <CardContent>
            <Stack spacing={1}>
            <Typography variant="h6" color="#84cb25" fontWeight={600} sx={{marginTop:2}}>Land Information</Typography>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Land ID:</Typography>
            <Typography variant="body2">{i.LandOwnerId}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Longitude:</Typography>
            <Typography variant="body2"> {i.Longitude}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Latitude:</Typography>
            <Typography variant="body2"> {i.Latitude}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Land Size:</Typography>
            <Typography variant="body2"> {i.LandSize}</Typography>
            </Box>
             <Typography variant="h6" color="#84cb25" fontWeight={600}>Land Owner Information</Typography>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Land Owner Name:</Typography>
            <Typography variant="body2"> {i.LandOwnerName}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Land Owner Address:</Typography>
            <Typography variant="body2"> {i.LandAddress1}, {i.LandAddress2}, {i.LandCity}, {i.LandState}, {i.LandCountry}  </Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Land Owner Ph:</Typography>
            <Typography variant="body2"> {i.MobileNum}</Typography>
            </Box>
             <Typography variant="h6" color="#84cb25" fontWeight={600}>Project Information</Typography>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Creation Date:</Typography>
            <Typography variant="body2"> {i.CreationDate}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Project Commence Date:</Typography>
            <Typography variant="body2"> {i.ProjectCommenceDate}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Status:</Typography>
            <Typography variant="body2"> {i.LandStatus}</Typography>
            </Box>
            <Box display='flex' gap={1} flexDirection='row'>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>Remarks:</Typography>
            <Typography variant="body2"> {i.Remarks}</Typography>
            </Box>
            </Stack>
            </CardContent>
            </Card>
            </Box>
            </DialogContent>
            </Dialog>


            <Button size="small" color="primary" onClick={()=>movedtoEditPage(i.LandOwnerId)}>
             Update
            </Button>
            </Box>
            }
            </CardActions>
            </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15]}
        />
      </Grid>
    </Grid>

           </Grid>

           <Grid item xs={4} sm={4} md={4} lg={4}>
            <Box component={Card} bgcolor='#FFFFFF' p={3}>
            <Grid container spacing={2}>
            {state.map((i) => {
            return(
            <Grid item xs={12} sm={6} md={6} lg={6} key={i.StateId}>
            <FormControlLabel
            control={
                <Checkbox
                checked={selectedStates.includes(i.StateName)}
                onChange={handleStateChange}
                name={i.StateName}
                size="small"
                sx={{ '& .MuiSvgIcon-root': { fontSize:15 } }}
                />
            }
            label={i.StateName}
            />
            </Grid>
            )})}
            </Grid>    
            </Box>
           </Grid>
           </Grid>

        </Box>
        </Box>
    );
};