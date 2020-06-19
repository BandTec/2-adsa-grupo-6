import React, { Component } from 'react';
import Chart from "chart.js";
import * as S from './style.js';

import api from '../../../pages/services/api';

export default class Grafico extends Component {
    chartRef = React.createRef();

    async componentDidMount() {

        const nome = [];

        const myChartRef = this.chartRef.current.getContext('2d');

        await api.get('/plotDash').then(res => {
            nome.push(res.data);
        }).catch(error => {

        })

        console.log(nome[0]);
        

        new Chart(myChartRef, {
            type: 'horizontalBar',
            data: {
                labels: ["Google Chrome", "VSCODE", "Minecraft", "COD"],
                datasets: [{
                    label: '',
                    data: [
                        Math.random() * 15.00.toFixed(2),
                        Math.random() * 15.00.toFixed(1),
                        Math.random() * 25.00.toFixed(1),
                        Math.random() * 25.00.toFixed(1)
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(255, 201, 66, 0.4)',
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 2)',
                        'rgba(54, 162, 235, 2)',
                        'rgba(255, 206, 86, 2)',
                        'rgba(255, 206, 86, 2)',
                        //     'rgba(75, 192, 192, 1)',
                        //     'rgba(153, 102, 255, 1)',
                        //     'rgba(255, 159, 64, 1)'
                    ],

                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });

    }
    render() {
        return (
            <S.chart>
                {this.plotDash}
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </S.chart>
        )
    }
}