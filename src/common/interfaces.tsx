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
	 * This is the return type for util function calculateTimeSeries in Table Component
	 *
	 *  {number} median - Depends upon the value of Initial Sum, Monthly Sum and Risk Value
	 *
	 *  {number} good:- Depends upon the value of Initial Sum, Monthly Sum and Risk Value
	 *
	 *  {number} bad:- Depends upon the value of Initial Sum, Monthly Sum and Risk Value
	 *
	 *  {number} month:- Ranges Between 0 & 120
	 */

export interface ItimeSeries {
	median: number;
	good: number;
	bad: number;
	month: number;
}

/**
 * This is the Description of this Interface.
	 * @interface ItimeSeriesForChart:-
	 * This is the return type for util function calculateTimeSeries in Chart Component
	 *
	 *  {object} median - {y and x cordinates value to draw the chart}
	 *
	 *  {object} upper95:- {y and x cordinates value to draw the chart}
	 *
	 *  {object} lower05:- {y and x cordinates value to draw the chart}
	 *
	 */

export interface ItimeSeriesForChart {
    median: {y:number, x:number|undefined}[];
	upper95: {y:number, x:number|undefined}[];
	lower05: {y:number, x:number|undefined}[];
}

/**
 * This is the Description of this Interface.
	 * @interface ItimeSeriesTable:-
	 * This is the overall return type by util function calculateTimeSeries
	 *
	 *  {Array of Object} timeSeriesForTable - Array of {median, good, bad, month}
	 *
	 *  {Array of Object} timeSeriesForChart:- Array of {median, upper95, lower05}
	 *
	 *
	 */

export interface ItimeSeriesTable {
    timeSeriesForTable:ItimeSeries[],
    timeSeriesForChart:ItimeSeriesForChart
}

/**
 * This is the Description of this Interface.
	 * @interface IChartCordinates:-
	 *   Needed as input in for deriving values of dataMedian, dataGood, dataBad, labels.
	 *
	 *  {undefined | number} x - x cordinates to layout the chart view
	 *
	 *  {undefined | number} y:- y cordinates to layout the chart view
	 */

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
/**
 * This is the Description of this Interface.
	 * @interface ICone:-
	 *   Needed To Draw Individual Table Row Entries
	 *
	 *  { number} mu - Average yearly return (No Default value)
	 *
	 *  { number} riskLevel:- RiskLevel controlled by RiskLevel Selector .Ranges between 3 and 25. (Default value is 3)
	 * 
	 *  {number} sigma:- Standard deviation (No Default value)
	 */

export interface ICone {
	mu: number;
	riskLevel: number;
	sigma: number;
}
