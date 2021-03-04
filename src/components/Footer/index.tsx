import React from 'react';
import { outerWrapper, header } from './styles';
import { Box, Typography } from '@material-ui/core';

const Footer:()=>JSX.Element = () => (
    <Box style={outerWrapper}>
        <Typography variant="subtitle1" style={header}>
			@Scalable-Capital Copyrighted by Aryan Sharma 02/2021. All Rights Reserved
        </Typography>
    </Box>
);

export default Footer;
