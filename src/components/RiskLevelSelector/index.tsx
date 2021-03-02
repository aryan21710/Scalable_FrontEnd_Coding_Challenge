import React, { useContext } from 'react';
import { outerWrapper } from './styles';
import { Box } from '@material-ui/core';
import { AppContext } from '../../context/appContext';
import { ICone } from '../../common/interfaces';
import { defaultSelectorValue } from '../../common/constants';


const RiskLevelSelector = () => {
	const { onChangeRiskLevel, cones } = useContext(AppContext);

	const options = cones.map((cone: ICone, idx: number) => (
		<option key={idx} value={cone.riskLevel}>
			{cone.riskLevel}
		</option>
	));

	const onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void = (event) => {
		const riskLevel = parseInt(event.target.value);
		onChangeRiskLevel(riskLevel);
	};
	return (
		<Box style={outerWrapper}>
			<label>Risk level:</label>
			<select onChange={onChange} defaultValue={defaultSelectorValue}>
				{options}
			</select>
		</Box>
	);
};

export default RiskLevelSelector;
