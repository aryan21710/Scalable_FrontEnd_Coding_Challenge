import { ICalculateTimeSeries } from '../common/constants';
import {Iobj} from './tsInterfaces';

export const sum = (a: Array<number>): number => {
	return a.reduce((acc, cum, idx) => {
		return acc + cum;
	}, 0);
};

export const displayObj = (myObj: Iobj): string => {
	const { name, lname, age, profession, jobs } = myObj;
	return `${name}${lname} is ${age} years old. He works as ${profession}. He worked in following companies:- ${jobs}`;
};

export const mapDate = ({ years, mu, sigma, fee, initialSum, monthlySum }: ICalculateTimeSeries) => {
	let yearlyReturn = mu - fee;
	let monthlyReturn = yearlyReturn / 12;
	let month = years * 12;

	let median =
		initialSum * Math.exp(yearlyReturn * years) +
		(monthlySum *
			Math.exp(monthlyReturn * (month - Math.floor(month))) *
			(Math.exp(monthlyReturn * Math.floor(month)) - 1.0)) /
			(Math.exp(monthlyReturn) - 1.0);

	return {
		median: median,
		upper95: Math.exp(Math.log(median) + Math.sqrt(years) * sigma * 1.645),
		lower05: Math.exp(Math.log(median) - Math.sqrt(years) * sigma * 1.645),
	};
};

export const calculateTimeSeries = ({ years, mu, sigma, fee, initialSum, monthlySum }: ICalculateTimeSeries) => {
	const series = [];

	for (let k = 0; k <= 12 * years; ++k) {
		series.push(mapDate({ years: k / 12, mu, sigma, fee, initialSum, monthlySum }));
	}

	return series.map((seriesElem, idx) => {
		return {
			median: seriesElem.median,
			good: seriesElem.upper95,
			bad: seriesElem.lower05,
			month: idx,
		};
	});
};
