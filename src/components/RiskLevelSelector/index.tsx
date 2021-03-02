import React, { useContext } from 'react';
import { outerWrapper } from './styles';
import { Box } from '@material-ui/core';
import { AppContext } from '../../context/appContext';
import { ICone } from '../../common/interfaces';

interface IProps {
	maxRiskLevel: number;
	onChangeRiskLevel: (newRiskLevel: React.SetStateAction<number>) => void;
}

const RiskLevelSelector = () => {
	const { maxRiskLevel, onChangeRiskLevel, cones } = useContext(AppContext);

	const defaultRisk = 10;

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
			<select onChange={onChange} defaultValue={defaultRisk}>
				{options}
			</select>
		</Box>
	);
};

export default RiskLevelSelector;
