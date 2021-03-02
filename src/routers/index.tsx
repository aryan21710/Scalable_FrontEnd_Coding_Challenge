import React, { useState, useEffect } from 'react';
import Home from '../components/Home';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Table from '../components/Table';
import Chart from '../components/Chart';
import { mainWrapper,selectors } from './styles';
import { Box } from '@material-ui/core';
import { maxRiskLevel, minRiskLevel } from '../common/constants';
import { ICone } from '../common/interfaces';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import { useConesDataForTableApi } from '../customHooks/useConesDataForTableApi';
import RiskLevelSelector from '../components/RiskLevelSelector';
import YearSelector from '../components/YearSelector';
import InitialInvestmentSumSelector from '../components/InitialInvestmentSumSelector';
import { AppContext } from '../context/appContext';

const AppRoutes = () => {
	const [cone, setCone] = useState<ICone>({ mu: 0, riskLevel: 0, sigma: 0 });
	const [cones, setCones] = useState<ICone[]>([]);

	const [riskLevel, setRiskLevel] = useState<number>(minRiskLevel);
	const [years, setYears] = useState<number>(10);

	const [initialSum, setInitialSum] = useState<number>(10000);

	const onChangeRiskLevel: (newRiskLevel: React.SetStateAction<number>) => void = (
		newRiskLevel: React.SetStateAction<number>
	) => setRiskLevel(newRiskLevel);

	const onChangeYear: (newYear: React.SetStateAction<number>) => void = (
		newYear: React.SetStateAction<number>
	) => setYears(newYear);

	const onChangeInvestmentSum: (newInvestmentSum: React.SetStateAction<number>) => void = (
		newInvestmentSum: React.SetStateAction<number>
	) => setInitialSum(newInvestmentSum);

	useConesDataForTableApi(setCone, riskLevel, setCones);
	return (
		<BrowserRouter>
			<Box style={mainWrapper}>
				<Header />
				<Menu />
				<AppContext.Provider
					value={{ cone, cones, initialSum, riskLevel, maxRiskLevel, onChangeRiskLevel, onChangeInvestmentSum, onChangeYear, years }}
				>
					<Box style={selectors}>
						<RiskLevelSelector />
						<InitialInvestmentSumSelector />
						<YearSelector/>
					</Box>

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
