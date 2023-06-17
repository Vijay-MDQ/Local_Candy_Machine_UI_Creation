import React, { useState } from 'react';
import { Box, Table, TextField, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

const TimberRevenue = () => {

    const [rows, setRows] = useState([]);

    const handleCostChange = (index, event) => {
        const newRows = [...rows];
        newRows[index].cost = parseFloat(event.target.value);
        setRows(newRows);
    };

    const handleQtyChange = (index, event) => {
        const newRows = [...rows];
        newRows[index].qty = parseInt(event.target.value);
        setRows(newRows);
    };

    const calculateTotal = (cost, qty) => {
        if (!cost || !qty) {
            return 0;
        }
        return (cost * qty).toFixed(2);
    };

    const calculateOverallTotal = () => {
        return rows.reduce((total, row) => total + parseFloat(calculateTotal(row.cost, row.qty)), 0).toFixed(2);
    };

    const handleCellChange = (index, property, value) => {
        const newRows = [...rows];
        newRows[index][property] = value;
        setRows(newRows);
    };

    const handleBlur = (index) => {
        const row = rows[index];
        const cost = parseFloat(row.cost);
        const qty = parseInt(row.qty);
        const total = calculateTotal(cost, qty);
        handleCellChange(index, 'total', total);
    };

    const addRow = () => {
        setRows([...rows, { cost: '', qty: '', total: 0 }]);
    };


    return (
        <Box p={3}>
            <Typography variant='h6' textAlign='left' mb={2}>Timber Revenue</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#7bc54c' }}>
                        <TableRow>
                            <TableCell align='center' sx={{ fontWeight: 600, borderRight: '1px solid white', color: '#FFFFFF' }}>Item</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 600, borderRight: '1px solid white', color: '#FFFFFF' }}>Description</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 600, borderRight: '1px solid white', color: '#FFFFFF' }}>Cost</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 600, borderRight: '1px solid white', color: '#FFFFFF' }}>Qty</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 600, borderRight: '1px solid white', color: '#FFFFFF' }}>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align='center' sx={{ borderRight: '1px solid silver' }}>
                                    <TextField
                                        value={row.item || ''}
                                        size='small'
                                        type='text'
                                        onChange={(event) => handleCellChange(index, 'item', event.target.value)}
                                    />
                                </TableCell>
                                <TableCell align='center' sx={{ borderRight: '1px solid silver' }}>
                                    <TextField
                                        value={row.description || ''}
                                        size='small'
                                        type='text'
                                        onChange={(event) => handleCellChange(index, 'description', event.target.value)}
                                    />
                                </TableCell>
                                <TableCell align='center' sx={{ borderRight: '1px solid silver' }}>
                                    <TextField
                                        type="number"
                                        value={row.cost || ''}
                                        size='small'
                                        onChange={(event) => handleCellChange(index, 'cost', event.target.value)}
                                        onBlur={() => handleBlur(index)}
                                    />
                                </TableCell>
                                <TableCell align='center' sx={{ borderRight: '1px solid silver' }}>
                                    <TextField
                                        type="number"
                                        value={row.qty || ''}
                                        size='small'
                                        onChange={(event) => handleCellChange(index, 'qty', event.target.value)}
                                        onBlur={() => handleBlur(index)}
                                    />
                                </TableCell>
                                <TableCell align='center'>{row.total}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={4} align="right" sx={{ fontWeight: 600, borderRight: '1px solid silver' }}>Overall Total</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 600 }}>{calculateOverallTotal()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Box p={2}>
                    <Button onClick={addRow} variant='contained'>Add Row</Button>
                </Box>
            </TableContainer>
        </Box>
    );
};

export default TimberRevenue;
