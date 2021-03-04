import React from 'react';
import { outerWrapper, header } from './styles';
import { Box, Typography } from '@material-ui/core';
import { footerText } from '../../common/constants';

const Footer:()=>JSX.Element = () => (
    <Box style={outerWrapper}>
        <Typography variant="subtitle1" style={header}>{footerText}
        </Typography>
    </Box>
);

export default Footer;
