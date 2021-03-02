import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { innerWrapper, outerWrapper } from './styles';
import { calculateTimeSeries } from '../../common/utils';
import { ItimeSeries } from '../../common/interfaces';
import GridDisplay from './GridDisplay';
import { AppContext } from '../../context/appContext';

const Table = () => {
    const { cone, initialSum } = useContext(AppContext);
    const timeSeries: ItimeSeries[] = calculateTimeSeries({
        years: 10,
        mu: cone.mu,
        sigma: cone.sigma,
        fee: 0.01,
        initialSum,
        monthlySum: 200,
    }).timeSeriesForTable

    return (
        <Box style={outerWrapper}>
            <Box style={innerWrapper}>
                <GridDisplay timeSeries={timeSeries} />
            </Box>
        </Box>
    );
};

export default Table;
