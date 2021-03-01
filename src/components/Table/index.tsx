import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { innerWrapper, outerWrapper } from './styles';
import { calculateTimeSeries } from '../../common/utils';
import { ItimeSeries,maxRiskLevel, minRiskLevel} from '../../common/constants';
import GridDisplay from './GridDisplay';
import { useFetchConesApi } from '../../customHooks/useFetchConesApi';
import RiskLevelSelector from '../RiskLevelSelector';


interface ICone {
	mu: number;
	riskLevel: number;
	sigma: number;
}

const Table = () => {
	const [cone, setCone] = useState<ICone>({ mu: 0, riskLevel: 0, sigma: 0 });
	const [riskLevel, setRiskLevel] = useState<number>(minRiskLevel);
	const onChangeRiskLevel: (newRiskLevel: React.SetStateAction<number>) => void = (
		newRiskLevel: React.SetStateAction<number>
	) => setRiskLevel(newRiskLevel);
	useFetchConesApi(setCone, riskLevel);

	const timeSeries: ItimeSeries[] = calculateTimeSeries({
		years: 10,
		mu: cone.mu,
		sigma: cone.sigma,
		fee: 0.01,
		initialSum: 10000,
		monthlySum: 200,
	});

	return (
		<Box style={outerWrapper}>
			<RiskLevelSelector onChangeRiskLevel={onChangeRiskLevel} maxRiskLevel={maxRiskLevel}/>
			<Box style={innerWrapper}>
				<GridDisplay timeSeries={timeSeries} />
			</Box>
		</Box>
	);
};

export default Table;
