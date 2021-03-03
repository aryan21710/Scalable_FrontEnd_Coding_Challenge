/**
 * This is the Description of this Interface.
	 * @interface ICalculateTimeSeries:-
	 * This is needed while calculating Time Series in Table and
	 * Chart View Components
	 *
	 *  {number} mu - Average yearly return (No Default value)
	 *
	 *  {number} sigma:- Standard deviation (No Default value)
	 *
	 *  {number} initialSum:- Initial Investment Sum ( Customizable user value by inputting it in Filter Selector)
	 *
	 *  {number} monthlySum:-   Monthly Sum ( Customizable user value by inputting it in Filter Selector)
	 *
	 *  {number} fee:- Self Explanatory (Default value is 0.01)
	 *  {number} years:- Self Explanatory (Ranges from 0 - 10)
	 */

export interface ICalculateTimeSeries {
	years: number;
	mu: number;
	sigma: number;
	fee: number;
	initialSum: number;
	monthlySum: number;
}

/**
 * This is the Description of this Interface.
	 * @interface ItimeSeries:-
	 * This is the return type for util function calculateTimeSeries
	 *
	 *  {number} median - Average yearly return (No Default value)
	 *
	 *  {number} good:- Standard deviation (No Default value)
	 *
	 *  {number} bad:- Initial Investment Sum ( Customizable user value by inputting it in Filter Selector)
	 *
	 *  {number} month:-   Monthly Sum ( Customizable user value by inputting it in Filter Selector)
	 */

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
