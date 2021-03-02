import React, { useContext } from 'react';
import { outerWrapper, investmentSum } from './styles';
import { Box, TextField } from '@material-ui/core';
import { AppContext } from '../../context/appContext';

const MonthlySumSelector = () => {
	const { onChangeMonthlySum, monthlySum } = useContext(AppContext);

	const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
		if (parseInt(event.target.value) >= 0) {
			onChangeMonthlySum(event.target.value);
		} else {
			onChangeMonthlySum(null);
		}
	};
	return (
		<Box style={outerWrapper}>
			<form noValidate autoComplete="off">
				<TextField
					type="number"
					style={investmentSum}
					placeholder="Enter Monthly Sum"
					variant="outlined"
					InputLabelProps={{
						shrink: true,
					}}
					InputProps={{ inputProps: { min: 1 } }}
					value={monthlySum===0 ? "Enter Investment Sum" :monthlySum}
					onChange={onChange}
				/>
			</form>
		</Box>
	);
};

export default MonthlySumSelector;
