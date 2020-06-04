var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['CPU ', 'RAM', 'DISCO', ],
        datasets: [{
            label: 'Temperatura',
            data: [Math.random() * 30.00.toFixed(1), Math.random() * 15.00.toFixed(1), Math.random() * 25.00.toFixed(1)],
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
    }
});