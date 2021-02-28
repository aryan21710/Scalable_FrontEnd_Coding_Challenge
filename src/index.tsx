import React from 'react';
import ReactDOM from 'react-dom';

const sum = (a: Array<number>): number => {
	return a.reduce((acc, cum, idx) => {
		return acc + cum;
	}, 0);
};

interface Iobj {
	name: string;
	lname: string;
	age: number;
	profession: string;
	jobs: string[];
}

const displayObj = (myObj: Iobj): string => {
    const { name, lname, age, profession, jobs } = myObj;
	return `${name}${lname} is ${age} years old. He works as ${profession}. He worked in following companies ${jobs}`;
};

const App = () => {
	const myObj = {
		name: 'aryan',
		lname: 'sharma',
		age: 41,
		profession: 'FrontEnd Web Developer',
		jobs: ['INTL', 'GEEKTRUST', 'SIMARCORP'],
	};

	return (
		<div>
			<p>{`output of sum is :- ${sum([10, 20, 30, 40])}`}</p>
			<hr></hr>
			<p>PASSING OBJECT TO A FUNCTION</p>
			{displayObj({
				name: 'aryan',
				lname: 'sharma',
				age: 41,
				profession: 'FrontEnd Web Developer',
				jobs: ['INTL', 'GEEKTRUST', 'SIMARCORP'],
			})
				.split('.')
				.map((_) => (
					<p>{_}</p>
				))}
			<hr></hr>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
