import React, { useEffect, useRef, useContext } from 'react';
import { Chart as ChartJs } from 'chart.js';
import { Box } from '@material-ui/core';
import { chart, innerWrapper, outerWrapper } from './styles';
import { AppContext } from '../../context/appContext';
import { calculateTimeSeries } from '../../common/utils';
import { chartOptions, chartDataSets, canvasWidth, canvasHeight  } from '../../common/constants';
import { IChartCordinates, ItimeSeriesForChart, ICone } from '../../common/interfaces';


const Chart:()=>JSX.Element = () => {
    const { riskLevel, cones, initialSum, monthlySum } = useContext(AppContext);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        cones.length > 0 && drawChart();
    }, []);

    const drawChart = () => {
        const { mu, sigma } = cones.filter((cone: ICone) => cone.riskLevel === riskLevel)[0];

        const timeSeries:ItimeSeriesForChart = calculateTimeSeries({
            years: 10,
            mu,
            sigma,
            fee: 0.01,
            initialSum,
            monthlySum,
        })?.timeSeriesForChart;

        const labels = timeSeries.median.map((v: IChartCordinates, idx: number) => (idx % 12 == 0 ? idx / 12 : ''));
        const dataMedian = timeSeries.median.map((v: IChartCordinates) => v.y);
        const dataGood = timeSeries.upper95.map((v: IChartCordinates) => v.y);
        const dataBad = timeSeries.lower05.map((v: IChartCordinates) => v.y);

        const datasets = chartDataSets.map((chartData, idx) => {
            if (idx === 0) {
                return { ...chartData, data: dataGood };
            } else if (idx === 1) {
                return { ...chartData, data: dataMedian };
            } else {
                return { ...chartData, data: dataBad };
            }
        });

        const data = {
            datasets,
            labels
        };

        const config = {
            type: 'line',
            data: data,
            options: chartOptions,
        };

        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            new ChartJs(context, config);
        }

    };
    return (
        <Box style={outerWrapper}>
            <Box style={innerWrapper}>
                <canvas style={chart} ref={canvasRef} width={canvasWidth} height={canvasHeight} />
            </Box>
        </Box>
    );
};

export default Chart;
