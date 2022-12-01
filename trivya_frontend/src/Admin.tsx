import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Legend } from 'chart.js'
Chart.register(ArcElement, Legend)

const Admin = () => {
  const dataset = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'red',
        'blue',
        'green'
      ]
    }]
  }

  return (
    <div>
        Admin
        <Pie data={dataset}/>
    </div>
  )
}

export default Admin
