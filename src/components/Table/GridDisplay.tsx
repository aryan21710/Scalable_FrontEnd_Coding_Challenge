import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { columnHeaders } from '../../common/constants';

const timeSeries:string[]=[]

const GridDisplay = () => (
    <div
        id="myGrid"
        style={{
            height: '100%',
            width: '70vw',
            color: 'white',
        }}
        className="ag-theme-alpine"
    >
        <AgGridReact
            columnDefs={columnHeaders}
            rowData={timeSeries}
            pagination={true}
            paginationAutoPageSize={true}
        />
    </div>
);

export default GridDisplay;