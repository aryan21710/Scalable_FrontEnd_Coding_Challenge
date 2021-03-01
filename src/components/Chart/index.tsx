import React, { useState, useEffect, useRef, useContext } from 'react';
import { Chart as ChartJs } from 'chart.js';
import { useConesDataForTableApi } from '../../customHooks/useConesDataForTableApi';
import RiskLevelSelector from '../RiskLevelSelector';
import { ItimeSeries,maxRiskLevel, minRiskLevel} from '../../common/constants';
import { Box } from '@material-ui/core';
import { chart, innerWrapper, outerWrapper } from './styles';
import { AppContext } from '../../context/appContext';


const Chart = () => {
    // const [cone, setCone] = useState({});
    const {maxRiskLevel}=useContext(AppContext);
    const [riskLevel, setRiskLevel] = useState<number>(minRiskLevel);
    const canvasRef = useRef(null);
    const onChangeRiskLevel: (newRiskLevel: React.SetStateAction<number>) => void = (newRiskLevel: React.SetStateAction<number>) => setRiskLevel(newRiskLevel);
    // useConesDataForTableApi(setCone, riskLevel);

 
    const options = {
        responsive: false,
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Years'
                },
                gridLines: {
                    drawOnChartArea: false
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Valuation (EUR)'
                }
            }]
        }
    };

    const config = {
        type: 'line',
        data : {},
        options
    };
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const myChart = new ChartJs(context, config);


    return (
        <Box style={outerWrapper}>
            <Box style={innerWrapper}>

            <canvas style={chart}
                ref={canvasRef}
                width={600}
                height={400}
                />
                </Box>
        </Box>
    );
};


export default Chart;