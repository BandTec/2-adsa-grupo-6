import React, { Component, useState } from 'react';
import Chart from "chart.js";
import * as S from './style.js';

import api from '../../services/api';

export default class Grafico extends Component {
    chartRef = React.createRef();

    async componentDidMount() {

        var pc = '';
        var time = 0;
        const idUsuario = sessionStorage.getItem('idUsuario');
        const myChartRef = this.chartRef.current.getContext('2d');

        await api.get('/registrosAluno/' + idUsuario).then(res => {
            pc = res.data
            time = res.data;
        }).catch(error => {
            // alert('erro de conexão')
        })

        var horahora = time.map(time => `${time.hora}:${time.minutos}:${time.segundos}`).reverse();

        var cpu = pc.map(pc => pc.cpuPc).reverse();
        var memoria = pc.map(pc => pc.memoria).reverse();
        var disco = pc.map(pc => pc.disco).reverse();

        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: horahora,
                datasets: [{
                    label: 'CPU',
                    data: cpu,
                    backgroundColor: 'rgba(255, 99, 132, 0.4)',
                    borderColor: 'rgba(255, 0, 0, 2)',
                    borderWidth: 2
                }, {
                    label: 'RAM',
                    data: memoria,
                    backgroundColor: 'rgba(54, 162, 235, 0.4)',
                    borderColor: 'rgba(54, 162, 235, 2)',
                    borderWidth: 2
                }, {
                    label: 'DISCO',
                    data: disco,
                    backgroundColor: 'rgba(54, 162, 235, 0.4)',
                    borderColor: 'rgba(255, 206, 86, 2)',
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