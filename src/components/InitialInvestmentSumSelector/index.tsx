import React, { useContext } from 'react';
import { Box, TextField } from '@material-ui/core';
import { AppContext } from '../../context/appContext';
import { outerWrapper, investmentSum } from './styles';

const InitialInvestmentSumSelector = () => {
	const { onChangeInvestmentSum, initialSum } = useContext(AppContext);

	const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
		if (parseInt(event.target.value) >= 0) {
			onChangeInvestmentSum(event.target.value);
		} else {
			onChangeInvestmentSum(null);
		}
	};
	return (
		<Box style={outerWrapper}>
			<form noValidate autoComplete="off">
				<TextField
					type="number"
					style={investmentSum}
					placeholder="Enter Initial Investment Sum"
					variant="outlined"
					InputLabelProps={{
						shrink: true,
					}}
					InputProps={{ inputProps: {  min: 0 } }}
					value={initialSum===0 ? "Enter Initial Investment Sum" : initialSum}
					onChange={onChange}
				/>
			</form>
		</Box>
	);
};

export default InitialInvestmentSumSelector;
