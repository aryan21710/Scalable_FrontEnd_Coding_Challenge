import { ICalculateTimeSeries, IChartCordinates,  IMapData, ItimeSeriesTable, ItimeSeriesForChart } from './interfaces';

export const mapDate = ({ years, mu, sigma, fee, initialSum, monthlySum }: ICalculateTimeSeries): IMapData => {
    const yearlyReturn = mu - fee;
    const monthlyReturn = yearlyReturn / 12;
    const month = years * 12;
    let x;

    const median =
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

export const calculateSeries = ({
    years,
    mu,
    sigma,
    fee,
    initialSum,
    monthlySum,
}: ICalculateTimeSeries): IMapData[] =>
    Array.from({ length: 12 * years + 1 }, (v, idx) => idx).map((serie) =>
        mapDate({
            years: serie / 12,
            mu,
            sigma,
            fee,
            initialSum,
            monthlySum
        })
    );

export const calculateTimeSeries = ({
    years,
    mu,
    sigma,
    fee,
    initialSum,
    monthlySum,
}: ICalculateTimeSeries): ItimeSeriesTable => {
    const series = calculateSeries({ years, mu, sigma, fee, initialSum, monthlySum });
    [];


    const timeSeriesForTable = series.map((seriesElem, idx) => ({
        median: seriesElem.median,
        good: seriesElem.upper95,
        bad: seriesElem.lower05,
        month: idx,
    }));


    const median: IChartCordinates[] = [];
    const upper95: IChartCordinates[] = [];
    const lower05: IChartCordinates[] = [];

    for (let k = 0; k < series.length; k++) {
        median.push({ y: series[k].median, x: series[k]?.x });
        upper95.push({ y: series[k].upper95, x: series[k]?.x });
        lower05.push({ y: series[k].lower05, x: series[k].x });
    }

    // eslint-disable-next-line no-console
    console.log('median,upper95,lower05', median, upper95, lower05);

    const timeSeriesForChart:ItimeSeriesForChart = { median, upper95, lower05 };
    return {
        timeSeriesForTable,
        timeSeriesForChart
    };
};

