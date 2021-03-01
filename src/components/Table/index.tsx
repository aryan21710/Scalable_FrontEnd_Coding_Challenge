import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { innerWrapper, outerWrapper } from './styles';
import GridDisplay from './GridDisplay';
import { useFetchConesApi } from '../../customHooks/useFetchConesApi';

interface Cones {
	mu: number;
	riskLevel: number;
	sigma: number;
}
const Table = () => {
	const [cone, setCone] = useState<Cones>({ mu: 0, riskLevel: 0, sigma: 0 });
	const [riskLevel, setRiskLevel] = useState<number>(3);
	const onChangeRiskLevel: (newRiskLevel: React.SetStateAction<number>) => void = (
		newRiskLevel: React.SetStateAction<number>
	) => setRiskLevel(newRiskLevel);
	useFetchConesApi(setCone, riskLevel);

	return (
		<Box style={outerWrapper}>
			<Box style={innerWrapper}>
				<GridDisplay />
			</Box>
		</Box>
	);
};

export default Table;
