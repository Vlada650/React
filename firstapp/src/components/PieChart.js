import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = () => {
    return (
        <div >
            <Pie
                data={{
                    labels: ['Sleeping', 'Eating', 'Coding', 'Routine', 'Walking'],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 100, 25, 25],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(25, 209, 166)',
                            'rgb(145, 25, 209)'
                        ],
                        hoverOffset: 5,
                    }],
                }}
                options={{
                    maintainAspectRatio: true,
                    responsive: false
                }}
                height={350}
                width={350}
            />
        </div>
    )
}



/*return (
<div style={{ width: '250px', height: '250px' }}>
    <Pie
        data={{
            labels: ['Sleeping', 'Eating', 'Coding', 'Routine', 'Walking'],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100, 25, 25],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(25, 209, 166)',
                    'rgb(145, 25, 209)'
                ],
                hoverOffset: 5,
            }],
        }}

    />
</div>
)*/

export default PieChart