import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { columnHeaders } from '../../common/constants';
import { ItimeSeries } from '../../common/interfaces';

interface IProps {
	timeSeries: ItimeSeries[];
}

/** This is Neede by Aggrid to Resolve the warning messages */
const LinkComponent = () =><div></div>;

const GridDisplay: React.FC<IProps> = (props: IProps) => {
    const { timeSeries } = props;
    return (
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
                frameworkComponents={{ LinkComponent }}
            />
        </div>
    );
};

export default GridDisplay;
