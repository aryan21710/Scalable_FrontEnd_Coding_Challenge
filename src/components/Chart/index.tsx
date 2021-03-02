import React, { useEffect, useRef, useContext } from 'react';
import { Chart as ChartJs } from 'chart.js';
import { Box } from '@material-ui/core';
import { chart, innerWrapper, outerWrapper } from './styles';
import { AppContext } from '../../context/appContext';
import { calculateTimeSeries } from '../../common/utils';
import { chartOptions, chartDataSets } from '../../common/constants';
import { IChartCordinates,ItimeSeriesForChart } from '../../common/interfaces';


const Chart = () => {
	const { riskLevel, cones, initialSum, monthlySum } = useContext(AppContext);
	const canvasRef = useRef(null);
	useEffect(() => {
		cones.length > 0 && drawChart();
	}, []);

	const drawChart = () => {
		const { mu, sigma } = cones.filter((cone: { riskLevel: any }) => cone.riskLevel === riskLevel)[0];

		const timeSeries:ItimeSeriesForChart = calculateTimeSeries({
			mu,
			sigma,
			years: 10,
			initialSum,
			monthlySum,
			fee: 0.01,
		}).timeSeriesForChart

		console.log('timeSeries',timeSeries);


		const labels = timeSeries.median.map((v: IChartCordinates, idx: number) => (idx % 12 == 0 ? idx / 12 : ''));
		const dataMedian = timeSeries.median.map((v: IChartCordinates) => v.y);
		const dataGood = timeSeries.upper95.map((v: IChartCordinates) => v.y);
        const dataBad = timeSeries.lower05.map((v: IChartCordinates) => v.y);
        
        const datasets=chartDataSets.map((chartData, idx) => {
            if (idx === 0) {
                return { ...chartData, data: dataGood };
            } else if (idx === 1) {
                return { ...chartData, data: dataMedian };
            } else {
                return { ...chartData, data: dataBad };
            }
        })

		const data = {
			datasets,
			labels
		};

		const config = {
			type: 'line',
			data: data,
			options: chartOptions,
        };

		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
        const myChart = new ChartJs(context, config);

	};
	return (
		<Box style={outerWrapper}>
			<Box style={innerWrapper}>
				<canvas style={chart} ref={canvasRef} width={'70vw'} height={450} />
			</Box>
		</Box>
	);
};

export default Chart;
