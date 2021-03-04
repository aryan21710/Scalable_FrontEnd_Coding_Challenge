import React from 'react';
import { header, outerWrapper } from './styles';
import {  Box, Typography } from '@material-ui/core';
import { headerText } from '../../common/constants';

const Header:()=>JSX.Element = () => (
    <Box style={outerWrapper}>
        <Typography variant="h6" style={header}>{headerText}</Typography>
    </Box>
);


export default Header;
