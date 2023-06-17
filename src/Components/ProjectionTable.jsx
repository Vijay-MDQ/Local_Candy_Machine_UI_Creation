import React, {useState} from 'react';
import { Box, Table, TextField ,  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Card } from '@mui/material';
import TimberProjectExpense from './ProjectionTable/Timber/TimberProjectExpense';
import CarbonProjectExpense from './ProjectionTable/Carbon/CarbonProjectExpense';
import TimberCuttingExpense from './ProjectionTable/Timber/TimberCuttingExpense';
import TimberRenenue from './ProjectionTable/Timber/TimberRevenue';
import CarbonRevenue from './ProjectionTable/Carbon/CarbonRevenue';

const ProjectionTable = () => {

  
    return (
        <Box p={3}>
        <Box component={Card} boxShadow={3}>
            <TimberProjectExpense />
            <CarbonProjectExpense />
            <TimberCuttingExpense />
            <TimberRenenue />
            <CarbonRevenue />
        </Box>
        </Box>
    );
};

export default ProjectionTable;
