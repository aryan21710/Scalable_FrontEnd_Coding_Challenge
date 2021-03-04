import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { outerWrapper, text } from './styles';
import { homePageText } from '../../common/constants';

const Home:()=>JSX.Element = () => (
    <Box style={outerWrapper}>
        <Typography style={text}>{homePageText}</Typography>
    </Box>
);

export default Home;
