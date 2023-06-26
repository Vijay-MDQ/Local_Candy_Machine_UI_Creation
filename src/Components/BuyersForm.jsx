import { Box, Button, Grid, TextField, Stack, Autocomplete } from "@mui/material";
import Header from './Header';
import { add_buyer, add_vvb } from "../API_Service/API_Service";
import { useState } from "react";
import { appendData } from "../Variables/ProcessVariable";
import axios from "axios";


export default function BuyersForm() {

 const [buyerName, setBuyerName] = useState('');
     const [email, setEmail] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    const [alternateMobile, setAlternateMobile] = useState('');
  const [buyerAddress1, setBuyerAddress1] = useState('');
  const [buyerAddress2, setBuyerAddress2] = useState('');
  const [buyerCity, setBuyerCity] = useState('');
  const [buyerState, setBuyerState] = useState('');
  const [buyerPostalCode, setBuyerPostalCode] = useState('');
  const [buyerCountry, setBuyerCountry] = useState('');
  const [ccTrading, setCCTrading] = useState('');
  const [contracts, setContracts] = useState('');
  const [purchase, setPurchase] = useState('');
  const [paymentHistory, setPaymentHistory] = useState('');
  const [buyerStatus, setBuyerStatus] = useState('');
  const [ccTradingFile, setCCTradingFile] = useState(null);
  const [contractsFile, setContractsFile] = useState(null);
  const [purchaseFile, setPurchaseFile] = useState(null);
  const [paymentHistoryFile, setPaymentHistoryFile] = useState(null);
      const [creationDate, setCreationDate] = useState('');
    const [projectCommenceDate, setProjectCommenceDate] = useState('');
    const [Remarks, setRemarks] = useState('');


    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState(false);
    const [message, setMessage] = useState("");

    const UserToken = localStorage.getItem('UserToken');
    const UserId = localStorage.getItem('UserProfileTypeId');


 

    const handleSubmit = () => {
        const obj = {
        UserId:5,
        BuyerName:buyerName,
        Email:email,
        MobileNum:mobileNum,
        AlternateMobile:alternateMobile,
        BuyerAddress1:buyerAddress1,
        BuyerAddress2:buyerAddress2,
        BuyerCity:buyerCity,
        BuyerState:buyerState,
        BuyerPostalCode:buyerPostalCode,
        BuyerCountry:buyerCountry,
        CCTrading:ccTrading,
        Contracts:contracts,
        Purchase:purchase,
        PaymentHistory:paymentHistory,
        BuyerStatus:buyerStatus,
        CCTradingFile:ccTradingFile,
        ContractsFile:contractsFile,
        PurchaseFile:purchaseFile,
        PaymentHistoryFile:paymentHistoryFile,
        CreationDate:creationDate,
        ProjectCommenceDate:projectCommenceDate,
        }

        const sendData = appendData(obj);
        axios({
            method: 'POST',
            url: add_buyer,
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
                                    <h5>UPDATE PURCHASE/CONTRACT INFORMATION</h5>
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
                                            onChange={(e) => setBuyerName(e.target.value)}
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
                                            onChange={(e) => setBuyerAddress1(e.target.value)}
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
                                            onChange={(e) => setBuyerAddress2(e.target.value)}
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
                                            onChange={(e) => setBuyerCity(e.target.value)}
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
                                            onChange={(e) => setBuyerState(e.target.value)}
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
                                            onChange={(e) => setBuyerCountry(e.target.value)}
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
                                            onChange={(e) => setBuyerPostalCode(e.target.value)}
                                        />
                                    </Grid>
                                         <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Carbon Credit Trading History "
                                            label="Carbon Credit Trading History "
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setCCTrading(e.target.value)}
                                        />
                                    </Grid>

                                   <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Carbon Credit Trading History "
                                            label="Carbon Credit Trading History "
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setCCTradingFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                   <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Payment History"
                                            label="Payment History"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setPaymentHistory(e.target.value)}
                                        />
                                    </Grid>

                                   <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Payment History"
                                            label="Payment History"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setPaymentHistoryFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>

                                   <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Contract Details"
                                            label="Contract Details"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setContracts(e.target.value)}
                                        />
                                    </Grid>

                                   <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Contract Details"
                                            label="Contract Details"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setContractsFile(e.target.files[0])}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Grid>
                                   <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Purchase Orders"
                                            label="Purchase Orders"
                                            variant="outlined"
                                            size='small'
                                            color='secondary'
                                            onChange={(e) => setPurchase(e.target.value)}
                                        />
                                    </Grid>

                                   <Grid item xl={3} lg={3} md={3} sm={6} xs={12} sx={{ py: 1 }}  >
                                        <TextField
                                            fullWidth
                                            id="Purchase Orders"
                                            label="Purchase Orders"
                                            variant="outlined"
                                            size="small"
                                            color="secondary"
                                            type="file"
                                            onChange={(e) => setPurchaseFile(e.target.files[0])}
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
                                            onChange={(event , value)=> setBuyerStatus(value)}
                                            options={['Active', 'Inactive']}
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
