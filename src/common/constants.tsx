export const myObj = {
    name: 'aryan',
    lname: 'sharma',
    age: 41,
    profession: 'FrontEnd Web Developer',
    jobs: ['INTL', 'GEEKTRUST', 'SIMARCORP', 'ARISTA NETWORKS'],
};

export const maxRiskLevel=25;
export const minRiskLevel=3;

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

export const columnHeaders = [
    {
        headerName: 'Month',
        field: 'month',
        sortable: true,
        filter: true,
        resizable: true,
        cellRenderer: 'LinkComponent',
    },
    {
        headerName: 'Good',
        field: 'good',
        sortable: true,
        filter: true,
        resizable: true,
    },
    {
        headerName: 'Median',
        field: 'median',
        sortable: true,
        filter: true,
        resizable: true,
    },
    {
        headerName: 'Bad',
        field: 'bad',
        sortable: true,
        filter: true,
        resizable: true,
    }
];

export const APIURL = 'http://localhost:3000/api/cones';