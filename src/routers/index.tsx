import React, { useState, useEffect } from 'react';
import Home from '../components/Home';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Table from '../components/Table';
import Chart from '../components/Chart';
import { mainWrapper } from './styles';
import { Box } from '@material-ui/core';
import {  maxRiskLevel, minRiskLevel, ICone } from '../common/constants';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import { useConesDataForTableApi } from '../customHooks/useConesDataForTableApi';
import RiskLevelSelector from '../components/RiskLevelSelector';
import { AppContext } from '../context/appContext';

const AppRoutes = () => {
    const [cone, setCone] = useState<ICone>({ mu: 0, riskLevel: 0, sigma: 0 });
    const [cones, setCones] = useState<ICone[]>([]);

    const [riskLevel, setRiskLevel] = useState<number>(minRiskLevel);
    const onChangeRiskLevel: (newRiskLevel: React.SetStateAction<number>) => void = (
        newRiskLevel: React.SetStateAction<number>
    ) => setRiskLevel(newRiskLevel);


    useConesDataForTableApi(setCone, riskLevel, setCones);
    return (
        <BrowserRouter>
            <Box style={mainWrapper}>
                <Header />
                <Menu />
                <AppContext.Provider value={{ cone, cones, riskLevel, maxRiskLevel, onChangeRiskLevel }}>
                    <RiskLevelSelector />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/table" component={() => <Table />} />
                        <Route exact path="/chart" component={() => <Chart />} />
                    </Switch>
                    <Footer />
                </AppContext.Provider>
            </Box>
        </BrowserRouter>
    );
};

export default AppRoutes;
