import React from 'react';
import { Box } from '@material-ui/core';
import { ICone } from '../../common/interfaces';
import { defaultSelectorValue } from '../../common/constants';
import { riskLevelWrapper } from './styles';


interface IProps {
    onSelectHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    cones: ICone[]
}

const RiskLevel:React.FC<IProps> = ({ onSelectHandler, cones }:IProps) => {

    const options = cones.map((cone: ICone, idx: number) => (
        <option key={idx} value={cone.riskLevel}>
            {cone.riskLevel}
        </option>
    ));

    return (
        <Box style={riskLevelWrapper}>
            <label>Risk level:</label>
            <select onChange={onSelectHandler} defaultValue={defaultSelectorValue}>
                {options}
            </select>
        </Box>
    );
};

export default RiskLevel;
