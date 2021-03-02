export const maxRiskLevel = 25;
export const minRiskLevel = 3;

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
	},
];

export const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
	scales: {
		xAxes: [
			{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Years',
				},
				gridLines: {
					drawOnChartArea: false,
                },
                ticks: {
                    fontColor: "white",
                    fontSize: 16,

                }
			},
		],
		yAxes: [
			{
				display: true,
				scaleLabel: {
					display: true,
                    labelString: 'Valuation (EUR)',
                    color: "white",

                },
                ticks: {
                    fontColor: "white",
                    fontSize: 16,

                }
			},
		],
    },
    legend: {
		labels: {
            fontSize: 18,
            fontColor: "white"
		},
	},

	
};


export const defaultSelectorValue = 10;

export const chartDataSets = [
	{
		label: 'Good performance',
		borderColor: 'red',
		borderWidth: 2,
		fill: false,
		pointRadius: 0,
	},
	{
		label: 'Median performance',
		borderColor: 'green',
		borderWidth: 2,
		fill: false,
		pointRadius: 0,
	},
	{
		label: 'Bad performance',
		borderColor: 'yellow',
		borderWidth: 2,
		fill: false,
		pointRadius: 0,
	},
];

export const APIURL = 'http://localhost:3001/api/cones';
