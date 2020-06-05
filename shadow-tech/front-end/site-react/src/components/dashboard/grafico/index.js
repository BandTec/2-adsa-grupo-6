import React, { Component } from 'react';
import Chart from "chart.js";
import * as S from './style.js';

export default class Grafico extends Component {
    chartRef = React.createRef();

    componentDidMount() {

        const myChartRef = this.chartRef.current.getContext('2d');

        new Chart(myChartRef, {
            type: 'horizontalBar',
            data: {
                labels: ['CPU ', 'RAM', 'DISCO',],
                datasets: [{
                    label: '',
                    data: [
                        Math.random() * 15.00.toFixed(2),
                        Math.random() * 15.00.toFixed(1),
                        Math.random() * 25.00.toFixed(1)
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 201, 66, 0.4)',
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 2)',
                        'rgba(54, 162, 235, 2)',
                        'rgba(255, 206, 86, 2)',
                        //     'rgba(75, 192, 192, 1)',
                        //     'rgba(153, 102, 255, 1)',
                        //     'rgba(255, 159, 64, 1)'
                    ],

                    borderWidth: 2
                }]
            },
            options:{
                responsive: true,
                maintainAspectRatio: false,
            }
        });

    }
    render() {
        return (
            <S.chart>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </S.chart>
        )
    }
}