import React, { Component } from 'react';
import Chart from "chart.js";
import * as S from './style.js';

import api from '../../../services/api';

export default class Grafico extends Component {
    chartRef = React.createRef();

    async componentDidMount() {

        const processos = [];

        const myChartRef = this.chartRef.current.getContext('2d');
        
        await api.get('/plotDash').then(res => {
            processos.push(res.data);
        }).catch(error => {
            alert('erro de conexão')
        })

        new Chart(myChartRef, {
            type: 'horizontalBar',
            data: {
                labels: [processos[0][0].nome, processos[0][1].nome, processos[0][2].nome],
                datasets: [{
                    label: 'Acessos por máquina',
                    data: [
                        processos[0][0].n,
                        processos[0][1].n,
                        processos[0][2].n,
                    ],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 2)',
                        'rgba(54, 162, 235, 2)',
                        'rgba(54, 162, 235, 2)',
                    ],

                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            min: 0,
                            max: 65,
                            stepSize: 1
                        }
                    }]
                }
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