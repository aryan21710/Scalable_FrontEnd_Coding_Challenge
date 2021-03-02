import React, { useContext } from 'react';
import { Box, TextField } from '@material-ui/core';
import { AppContext } from '../../context/appContext';
import { outerWrapper, investmentSum } from './styles';

const InitialInvestmentSumSelector = () => {
	const { onChangeInvestmentSum, initialSum } = useContext(AppContext);

	const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
		const newInvestmentSum = parseInt(event.target.value);
		onChangeInvestmentSum(newInvestmentSum);
	};
	return (
		<Box style={outerWrapper}>
			<TextField
				style={investmentSum}
				placeholder="Enter Investment Sum"
				variant="outlined"
				value={initialSum}
				onChange={onChange}
			/>
		</Box>
	);
};

export default InitialInvestmentSumSelector;
