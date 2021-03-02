
export interface ICalculateTimeSeries {
	years: number;
	mu: number;
	sigma: number;
	fee: number;
	initialSum: number;
	monthlySum: number;
}

export interface ItimeSeries {
	median: number;
	good: number;
	bad: number;
	month: number;
}

export interface ItimeSeriesForChart {
    median: {y:number, x:number|undefined}[];
	upper95: {y:number, x:number|undefined}[];
	lower05: {y:number, x:number|undefined}[];
}

export interface ItimeSeriesTable {
    timeSeriesForTable:ItimeSeries[],
    timeSeriesForChart:ItimeSeriesForChart
}

export interface IChartCordinates {
	x: undefined | number;
	y: undefined | number;
}

export interface IMapData {
    median: number;
	upper95: number;
	lower05: number;
	x: number | null;
}


export interface ICone {
	mu: number;
	riskLevel: number;
	sigma: number;
}
