import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {sum,displayObj} from './common/utils'
import {myObj} from './common/constants'
const App = () => {

	return (
		<div>
			<p>{`output of sum is :- ${sum([10, 20, 30, 40])}`}</p>
			<hr></hr>
			<p>PASSING OBJECT TO A FUNCTION</p>
			{displayObj(myObj)
				.split('.')
				.map((_) => (
					<p>{_}</p>
				))}
			<hr></hr>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
