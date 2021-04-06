import React from 'react';
import { IAppContext } from '../common/interfaces';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const initFunc = () => {};

export const AppContext = React.createContext<IAppContext>({
    cone: { mu: 0, riskLevel: 0, sigma: 0 },
    cones: [],
    riskLevel: 0,
    setRiskLevel: initFunc,
    initialSum: 0,
    setInitialSum: initFunc,
    monthlySum: 0,
    setMonthlySum: initFunc,
});
