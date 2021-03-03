import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { AppContext } from '../../context/appContext';
import InitialSum from './InitialSum';
import MonthlySum from './MonthlySum';

import RiskLevel from './RiskLevel';

const Selectors = () => {
    const {  monthlySum, setMonthlySum, setRiskLevel, cones, initialSum, setInitialSum } = useContext(AppContext);

    const onMonthlySumHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        if (parseInt(event.target.value) >= 0) {
			 setMonthlySum(event.target.value);
        } else {
            setMonthlySum(null);
        }
    };

    const onInitialSumHandler: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        if (parseInt(event.target.value) >= 0) {
			 setInitialSum(event.target.value);
        } else {
			 setInitialSum(null);
        }
    };

    const onSelectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void = (event) => {
        const riskLevel = parseInt(event.target.value);
        setRiskLevel(riskLevel);
    };

    return (
        <React.Fragment>
            <RiskLevel onSelectHandler={onSelectHandler} cones={cones}/>
            <InitialSum  onChangeHandler={onInitialSumHandler} initialSum={initialSum} />
            <MonthlySum  onChangeHandler={onMonthlySumHandler} monthlySum={monthlySum} />
        </React.Fragment>
    );
};

export default Selectors;
