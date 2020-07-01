import React, { Component, useState } from 'react';
import Chart from "chart.js";
import * as S from './style.js';

import api from '../../services/api';

export default class Grafico extends Component {
    chartRef = React.createRef();

    async componentDidMount() {

        var pc = '';

        var hora = 0;

        // const idUsuario = sessionStorage.getItem('idUsuario');

        const idUsuario = 11;


        const myChartRef = this.chartRef.current.getContext('2d');

        var cont = 0

        await api.get('/registrosAluno/' + idUsuario).then(res => {
            pc = res.data
            hora = res.data;
        }).catch(error => {
            // alert('erro de conexão')
        })

        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: [`${hora[4].hora}:${hora[4].minutos}:${hora[4].segundos}`, 
                `${hora[3].hora}:${hora[3].minutos}:${hora[3].segundos}`, 
                `${hora[2].hora}:${hora[2].minutos}:${hora[2].segundos}`,
                `${hora[1].hora}:${hora[1].minutos}:${hora[1].segundos}`,
                `${hora[0].hora}:${hora[0].minutos}:${hora[0].segundos}`],
                datasets: [{
                    label: 'CPU',
                    data: [
                        pc[4].cpuPc,
                        pc[3].cpuPc,
                        pc[2].cpuPc,
                        pc[1].cpuPc,
                        pc[0].cpuPc,
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(255, 99, 132, 0.4)',
                    ],
                    borderColor: [
                        'rgba(255, 0, 0, 2)',
                        'rgba(255, 0, 0, 2)',
                        'rgba(255, 0, 0, 2)',
                        'rgba(255, 0, 0, 2)',
                        'rgba(255, 0, 0, 2)',
                    ],

                    borderWidth: 2
                }, {
                    label: 'RAM',
                    data: [
                        pc[4].memoria,
                        pc[3].memoria,
                        pc[2].memoria,
                        pc[1].memoria,
                        pc[0].memoria,
                    ],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 2)',
                        'rgba(54, 162, 235, 2)',
                        'rgba(54, 162, 235, 2)',
                        'rgba(54, 162, 235, 2)',
                        'rgba(54, 162, 235, 2)',
                    ],

                    borderWidth: 2
                }, {
                    label: 'DISCO',
                    data: [
                        pc[4].disco,
                        pc[3].disco,
                        pc[2].disco,
                        pc[1].disco,
                        pc[0].disco,
                    ],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 2)',
                        'rgba(255, 206, 86, 2)',
                        'rgba(255, 206, 86, 2)',
                        'rgba(255, 206, 86, 2)',
                        'rgba(255, 206, 86, 2)',
                    ],

                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 100,
                            min: 0,
                            stepSize: 10
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