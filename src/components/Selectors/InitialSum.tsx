import React from 'react';
import { textField } from './styles';
import { TextField } from '@material-ui/core';

interface IProps {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    initialSum: number
}

const InitialSum:React.FC<IProps> = ({ onChangeHandler, initialSum }:IProps) => (
    <form noValidate autoComplete="off">
        <TextField
            type="number"
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
