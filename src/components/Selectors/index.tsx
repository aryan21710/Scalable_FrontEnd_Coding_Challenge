import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import InitialSum from './InitialSum';
import MonthlySum from './MonthlySum';
import RiskLevel from './RiskLevel';

const Selectors: () => JSX.Element = () => {
    const {
        monthlySum,
        setMonthlySum,
        setRiskLevel,
        cones,
        initialSum,
        setInitialSum,
    } = useContext(AppContext);

    // eslint-disable-next-line no-unused-vars
    const handleMonthlySum: (
    // eslint-disable-next-line no-unused-vars
    event: { target: { value: string; }}
  ) => void = (event) => {
      if (parseInt(event.target.value) >= 0) {
          setMonthlySum(Number(event.target.value));
      } else {
          setMonthlySum(-1);
      }
  };

    // eslint-disable-next-line no-unused-vars
    const handleInitialSum: (
        // eslint-disable-next-line no-unused-vars
        event: { target: { value: string; }}
  ) => void = (event) => {
      if (parseInt(event.target.value) >= 0) {
          setInitialSum(Number(event.target.value));
      } else {
          setInitialSum(-1);
      }
  };

    // eslint-disable-next-line no-unused-vars
    const handleRiskLevel: (
        // eslint-disable-next-line no-unused-vars
        event: { target: { value: string; }}
  ) => void = (event) => {
      const riskLevel = parseInt(event.target.value);
      setRiskLevel(riskLevel);
  };

    return (
        <React.Fragment>
            <RiskLevel onSelectHandler={handleRiskLevel} cones={cones} />
            <InitialSum onChangeHandler={handleInitialSum} initialSum={initialSum} />
            <MonthlySum onChangeHandler={handleMonthlySum} monthlySum={monthlySum} />
        </React.Fragment>
    );
};

export default Selectors;
