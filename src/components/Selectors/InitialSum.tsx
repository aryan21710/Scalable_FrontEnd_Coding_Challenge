import React from 'react';
import { textField } from './styles';
import { TextField } from '@material-ui/core';

interface IProps {
    // eslint-disable-next-line no-unused-vars
    onChangeHandler: (event: {target: {value: string;};}) => void,
    initialSum: number
}

const InitialSum:React.FC<IProps> = ({ onChangeHandler, initialSum }:IProps) => (
    <form noValidate autoComplete="off">
        <TextField
            type="number"
            id="cypressInitialSum"
            style={textField}
            placeholder="Enter Initial Investment Sum"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{ inputProps: { min: 1 } }}
            value={initialSum === 0 ? 'Enter Initial Investment Sum' : initialSum}
            onChange={onChangeHandler}
        />
    </form>
);

export default InitialSum;
