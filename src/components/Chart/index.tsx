import React, { useEffect, useRef, useContext } from 'react';
import { Chart as ChartJs } from 'chart.js';
import { Box } from '@material-ui/core';
import { chart, innerWrapper, outerWrapper } from './styles';
import { AppContext } from '../../context/appContext';
import { calculateTimeSeriesForChart } from '../../common/utils';
import { IChartCordinates } from '../../common/interfaces';

const Chart = () => {
    const { riskLevel, cones } = useContext(AppContext);
    const canvasRef = useRef(null);
    useEffect(() => {
        cones.length > 0 && drawChart();
    }, []);

    const drawChart = () => {
        const { mu, sigma } = cones.filter((cone: { riskLevel: any }) => cone.riskLevel === riskLevel)[0];

        const timeSeries = calculateTimeSeriesForChart({
            mu,
            sigma,
            years: 10,
            initialSum: 10000,
            monthlySum: 200,
            fee: 0.01,
        });

        console.log('timeSeries', timeSeries);

        const labels = timeSeries.median.map((v: IChartCordinates, idx: number) => (idx % 12 == 0 ? idx / 12 : ''));
        const dataMedian = timeSeries.median.map((v: IChartCordinates) => v.y);
        const dataGood = timeSeries.upper95.map((v: IChartCordinates) => v.y);
        const dataBad = timeSeries.lower05.map((v: IChartCordinates) => v.y);

        const data = {
            datasets: [
                {
                    data: dataGood,
                    label: 'Good performance',
                    borderColor: 'red',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0,
                },
                {
                    data: dataMedian,
                    label: 'Median performance',
                    borderColor: 'green',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0,
                },
                {
                    data: dataBad,
                    label: 'Bad performance',
                    borderColor: 'yellow',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0,
                },
            ],
            labels,
        };

        const options = {
            responsive: false,
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
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Valuation (EUR)',
                        },
                    },
                ],
            },
        };

        const config = {
            type: 'line',
            data: data,
            options,
        };
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const myChart = new ChartJs(context, config);
    };
    return (
        <Box style={outerWrapper}>
            <Box style={innerWrapper}>
                <canvas style={chart} ref={canvasRef} width={600} height={400} />
            </Box>
        </Box>
    );
};

export default Chart;
