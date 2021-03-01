import React from 'react';
import { Box } from '@material-ui/core';
import { innerWrapper, outerWrapper } from './styles';
import GridDisplay from './GridDisplay';

const Table = () => {
	return (
		<Box style={outerWrapper}>
			<Box style={innerWrapper}>
				<GridDisplay />
			</Box>
		</Box>
	);
};

export default Table;
