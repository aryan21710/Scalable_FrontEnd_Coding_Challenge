import React, { useContext } from 'react';
import { outerWrapper } from './styles';
import { Box } from '@material-ui/core';
import { AppContext } from '../../context/appContext';
import { defaultSelectorValue } from '../../common/constants';

const YearSelector = () => {
	const { onChangeYear } = useContext(AppContext);

	const options = Array.from({ length: 11 }, (v, idx) => idx).map((year, idx) => (
		<option key={idx} value={year}>
			{year}
		</option>
	));

	const onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void = (event) => {
		const newYear = parseInt(event.target.value);
		onChangeYear(newYear);
	};
	return (
		<Box style={outerWrapper}>
			<label>Year Selector:</label>
			<select onChange={onChange} defaultValue={defaultSelectorValue}>
				{options}
			</select>
		</Box>
	);
};

export default YearSelector;
