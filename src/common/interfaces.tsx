
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
