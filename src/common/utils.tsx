import { ICalculateTimeSeries, IChartCordinates } from './constants';

export const mapDate = ({ years, mu, sigma, fee, initialSum, monthlySum }: ICalculateTimeSeries) => {
	let yearlyReturn = mu - fee;
	let monthlyReturn = yearlyReturn / 12;
	let month = years * 12;
	let x: undefined = undefined;

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
		x,
	};
};

export const calculateTimeSeriesForTable = ({ years, mu, sigma, fee, initialSum, monthlySum }: ICalculateTimeSeries) => {
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


export const calculateTimeSeriesForChart = ({ years, mu, sigma, fee, initialSum, monthlySum }: ICalculateTimeSeries) => {
	var series = [];
	for (let k = 0; k <= 12 * years; ++k) {
		series.push(mapDate({ years: k / 12, mu, sigma, fee, initialSum, monthlySum }));
	}

	const median: IChartCordinates[] = [];
	const upper95: IChartCordinates[] = [];
	const lower05: IChartCordinates[] = [];

	for (let k = 0; k < series.length; k++) {
		median.push({ y: series[k].median, x: series[k]?.x });
		upper95.push({ y: series[k].upper95, x: series[k]?.x });
		lower05.push({ y: series[k].lower05, x: series[k].x });
	}

	return { median, upper95, lower05 };
};
