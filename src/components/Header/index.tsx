import React from 'react';
import { header, outerWrapper } from './styles';
import {  Box, Typography } from '@material-ui/core';

const Header:()=>JSX.Element = () => (
    <Box style={outerWrapper}>
        <Typography variant="h6" style={header}>FRONTEND CODING CHALLENGE</Typography>
    </Box>
);


export default Header;
