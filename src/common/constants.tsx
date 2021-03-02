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
    }
];

export const APIURL = 'http://localhost:3000/api/cones';