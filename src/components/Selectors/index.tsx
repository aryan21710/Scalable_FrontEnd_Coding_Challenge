import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import InitialSum from './InitialSum';
import MonthlySum from './MonthlySum';

import RiskLevel from './RiskLevel';

const Selectors:()=>JSX.Element = () => {
    const {  monthlySum, setMonthlySum, setRiskLevel, cones, initialSum, setInitialSum } = useContext(AppContext);

    // eslint-disable-next-line no-unused-vars
    const handleMonthlySum: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        if (parseInt(event.target.value) >= 0) {setMonthlySum(event.target.value);
        } else {
            setMonthlySum(null);
        }
    };

    // eslint-disable-next-line no-unused-vars
    const handleInitialSum: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        if (parseInt(event.target.value) >= 0) {setInitialSum(event.target.value);
        } else {setInitialSum(null);
        }
    };

    // eslint-disable-next-line no-unused-vars
    const handleRiskLevel: (event: React.ChangeEvent<HTMLSelectElement>) => void = (event) => {
        const riskLevel = parseInt(event.target.value);
        setRiskLevel(riskLevel);
    };

    return (
        <React.Fragment>
            <RiskLevel onSelectHandler={handleRiskLevel} cones={cones}/>
            <InitialSum  onChangeHandler={handleInitialSum} initialSum={initialSum} />
            <MonthlySum  onChangeHandler={handleMonthlySum} monthlySum={monthlySum} />
        </React.Fragment>
    );
};

export default Selectors;
